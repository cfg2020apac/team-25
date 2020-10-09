const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const data = {
  title: "Meeting with Organization XYZ",
  description: "the bank",
  organization: db.collection('organizations').doc('ZzSZQIWQBD4XGf9uIbKG'),
  meetingTime: admin.firestore.FieldValue.serverTimestamp(),
  createdOn: admin.firestore.FieldValue.serverTimestamp()
}

const main = async () => {
  db.collection('organization_meetings').add(data)
}

main();
