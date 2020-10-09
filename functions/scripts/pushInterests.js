const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const data = {
  name: "Swimming",
  category: "Hobby",
  description: "Swimming in the beach.",
  volunteers: [
    db.collection('volunteers').doc('G2lYZQNKmtAQCY1Kwm61')
  ],
}

const main = async () => {
  db.collection('interests').add(data)
}

main();
