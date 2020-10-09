const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const data = {
  name: "Masks 口罩",
  description: "To protect from COVID-19",
  organization: db.collection('organizations').doc('ZzSZQIWQBD4XGf9uIbKG'),
  quantity: "10",
  attributes: {
    deliveryAddress: "Unit B, 7/F, D2 Place ONE, 9 Cheung Yee Street, Cheung Sha Wan, Kowloon\n九龍長沙灣長義街 9 號 D2 一期7樓B室",
    phoneNumber: "+852 2310 0833 (Call or WhatsApp)",
    groupSupported: "People with Disabilities\n(Visually Impaired, Hearing Impaired, Physical Impaired, etc)"
  },
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp()
}

const main = async () => {
  db.collection('extra_needs').add(data)
}

main();
