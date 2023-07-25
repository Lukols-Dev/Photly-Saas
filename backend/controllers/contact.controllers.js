const res = require("express/lib/response");
const {
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  Timestamp,
  doc,
} = require("firebase/firestore");

const { firestore } = require("../config/firebase.config");

//function responsible for add new message from contact form
const addNewContact = async (req, res) => {
  try {
    const {
      userUID,
      first_name,
      email,
      category_photo,
      city,
      street,
      date,
      time,
      message,
      terms,
    } = req.body;

    const docRef = doc(firestore, "USERS", userUID);
    const collRef = collection(docRef, "Messages");

    const response = await addDoc(collRef, {
      first_name: first_name,
      email: email,
      category_photo: category_photo,
      city: city,
      street: street,
      date: date,
      time: time,
      message: message,
      terms: terms,
      timestamp: Timestamp.fromDate(new Date()),
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get contact by id
const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const collectionReferecne = doc(
      firestore,
      "USERS",
      `H8n9ofwumYfVgxK457QGp9nZdR63`,
      "Messages",
      `${id}`
    );

    const response = await getDoc(collectionReferecne);
    // res.send(id);
    res.status(200).send(response.data());
    // res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get all contacts form Firestore
const getAllContacts = async (req, res) => {
  try {
    const { userUID } = req.body;
    let contacts = [];
    const collectionReferecne = collection(
      firestore,
      "USERS",
      `H8n9ofwumYfVgxK457QGp9nZdR63`,
      "Messages"
    );
    const response = await getDocs(collectionReferecne);

    response.forEach((doc) => {
      contacts.push(doc.data());
    });
    res.status(200).send(contacts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete contact/{id}
const deleteContact = async (req, res) => {
  try {
    const response = await deleteDoc(doc(firestore, "Contacts", req.params.id));
    console.log("Delete:", idDoc);

    // res.status(200).send(response);
  } catch (error) {
    console.log(error);
    // res.status(400).send(error.message);
  }
};

// deleteContact();

module.exports = {
  addNewContact,
  getContactById,
  getAllContacts,
  deleteContact,
};
