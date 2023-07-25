const {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
} = require("firebase/firestore");
const { firestore } = require("../config/firebase.config");
const { firestoreUsageCalculator } = require("../utils/firestore.util");

const getDataUserAccount = async (req, res) => {
  try {
    const userID = req.params.id;
    const docRef = doc(firestore, "USERS", `${userID}`);
    const userAccountData = await getDoc(docRef);

    res.status(200).send(userAccountData.data());
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateSubscriptionID = async (req, res) => {
  try {
    const { userID, subscriptionID } = req.body;

    const docRef = doc(firestore, "USERS", `${userID}`);

    const resp = await updateDoc(docRef, {
      subscriptionID: subscriptionID,
    });

    res.status(200).send(resp);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const getActualDBSize = async (req, res) => {
//   try {
//     const docRef = doc(firestore, "USERS", `H8n9ofwumYfVgxK457QGp9nZdR63`);
//     const data = await getDoc(docRef);
//     const json = JSON.stringify(data.data());
//     const size = Buffer.byteLength(json);
//     console.log(size);
//   } catch (error) {
//     console.log(error);
//   }
// };

const getActualDBSize = async (req, res) => {
  const id = req.params.id;
  let actualSize = 0;
  try {
    const docRef = doc(firestore, "USERS", id);
    const collRef = collection(docRef, "Messages");
    const data = await getDocs(collRef);
    data.forEach((doc) => {
      actualSize = actualSize + firestoreUsageCalculator(doc.data());
    });
    const object = {
      plann: "free",
      dbSize: actualSize,
      maxSize: "300",
    };
    res.status(200).send(object);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

//powinienem pobierac wielkosci z Messages i Galleries i odczytywac wielkosci plików, w głownym doikumencie powienienem ustalkić maksymalny zakres bazydanych lub usatawic tak ze kazdy uzytkownik ma swoja kolekcje

module.exports = {
  getDataUserAccount,
  getActualDBSize,
  updateSubscriptionID,
};
