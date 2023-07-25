const {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const res = require("express/lib/response");
const {
  Timestamp,
  doc,
  setDoc,
  addDoc,
  collection,
  updateDoc,
} = require("firebase/firestore");
const { firebaseAuth, firestore } = require("../config/firebase.config");
const config = require("../config/keys");
const Stripe = require("stripe");
const stripe = Stripe(config.secretKeyTest);

// Create new user
const createUserAccount = async (req, res) => {
  try {
    const { email, password, name, surname, terms, newsletter } = req.body;
    let user;
    await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
      (userCredential) => {
        user = userCredential.user;
        return user;
      }
    );

    const customer = await stripe.customers.create({
      email: email,
      name: name + " " + surname,
      description: "Photo system customer",
    });

    if (!!user && !!customer) {
      const userRef = doc(firestore, "USERS", user.uid);
      const messageRef = collection(firestore, "USERS", user.uid, "MESSAGES");

      if (!!messageRef && !!userRef) {
        await setDoc(userRef, {
          email: email,
          createAccountTimeStamp: Timestamp.fromDate(new Date()),
          name: name,
          surname: surname,
          uuid: user.uid,
          terms: terms,
          newsletter: newsletter,
          customerID: customer.id,
          subscriptionID: "",
        });

        const data = await addDoc(messageRef, {
          first_name: "Photoly",
          email: "office-photoly@gmail.com",
          category_photo: "",
          city: "",
          street: "",
          date: "",
          time: "",
          message: "Hello in app",
          terms: "",
          doc_id: "",
          timestamp: Timestamp.fromDate(new Date()),
        });

        if (data) {
          const updateDocRef = doc(
            firestore,
            "USERS",
            user.uid,
            "MESSAGES",
            data.id
          );
          await updateDoc(updateDocRef, {
            doc_id: data.id,
          });

          res.status(200).send(user);
        }

        // Promise.all(promises)
        //   .then(() => console.log("added"))
        //   .catch((error) => console.log(error));
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Login with email and password
const loginWithEmailPassword = async (req, res) => {
  const { email, password } = req.body;
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password).then(
      (user) => res.status(200).json(user)
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const logOutFromAccount = async (req, res) => {
  try {
    await signOut(firebaseAuth).then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const checkCurrUser = async (req, res) => {
  try {
    await onAuthStateChanged(
      firebaseAuth,
      (currentUser) => res.status(200).json(currentUser)
      // console.log([currentUser])
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  loginWithEmailPassword,
  logOutFromAccount,
  checkCurrUser,
  createUserAccount,
};
