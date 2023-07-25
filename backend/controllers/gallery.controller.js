const { firestore } = require("../config/firebase.config");
const uuid = require("uuid");

const addGallery = async (req, res) => {
  const { userUID, name, description, password, date } = req.body;
  let isPublic = true;
  const id = uuid.v4;

  if (password.length > 0) {
    isPublic = false;
  }

  try {
    const docRef = doc(firestore, "USERS", userUID);
    const collRef = collection(docRef, "Galleries", id);

    const response = await addDoc(collRef, {
      id: id,
      name: name,
      description: description,
      date: date,
      isPublic: isPublic,
      password: password,
      timestamp: Timestamp.fromDate(new Date()),
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addGallery,
};
