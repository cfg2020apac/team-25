const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const affiliateId = 'HyJtWYVcLbCbijCxnb1Q';

const data = {
  name: "",
  organizations: [
    db.collection('organizations').doc('ZzSZQIWQBD4XGf9uIbKG')
  ],
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp(),
}

const main = async () => {
  db.collection('affiliates').doc(affiliateId).update(data)
}

main();
