const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const data = {
  name: "AsiaWorld-Expo",
  description: "Hong Kong's largest exhibition venue.",
  organization: db.collection('organizations').doc('ZzSZQIWQBD4XGf9uIbKG'),
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  openTime: '10:00:00',
  closeTime: '23:00:00',
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp(),
}

const data2 = {
  name: "Hong Kong Convention and Exhibition Centre (HKCEC)",
  description: "Hong Kong's largest exhibition venue.",
  organization: null,
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp(),
  openTime: '09:00:00',
  closeTime: '23:00:00',
}

const main = async () => {
  db.collection('venues').add(data)
  db.collection('venues').add(data2)
}

main();
