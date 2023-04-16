const db = require('../connection.js');

const contactListCollection = db.collection('contactList');

async function addContact(data) {
  const docRef = await contactListCollection.add(data);
  return docRef.id;
}

async function getContactList() {
  const snapshot = await contactListCollection.get();

  const contactList = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    data.id = doc.id;
    contactList.push(data);
  })

  return contactList;
}

module.exports = {
  addContact,
  getContactList,
};