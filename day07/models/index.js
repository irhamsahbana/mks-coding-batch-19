const db = require('../connection.js');

const contactListCollection = db.collection('contactList');

async function addContact(data) {
  const docRef = await contactListCollection.add(data);
  return docRef.id;
}

module.exports = {
  addContact,
};