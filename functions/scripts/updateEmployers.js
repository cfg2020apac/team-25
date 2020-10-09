const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const employerId = 'qK2F6I5mimIGmilWeaU5';

const data = {
  name: "JP Morgan & Chase",
  contact: {
    name: "Chan Tai Man",
    email: "test@example.com",
    phoneNumber: "+85212345678"
  },
  description: "the bank",
  volunteers: [
    db.collection('organizations').doc('ztXlS2uvFaUfyYoM1C3K')
  ],
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp(),
}

const main = async () => {
  db.collection('employers').doc(employerId).update(data)
}

main();
