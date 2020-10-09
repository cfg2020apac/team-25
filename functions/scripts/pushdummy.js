const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

var data = {
  address: {
    primaryAddress: true,
    business: new admin.firestore.GeoPoint(0, 0),
    residential: new admin.firestore.GeoPoint(0, 0),
  },
  phoneInfo: {
    primaryPhone: "business",
    business: "+85212345678",
    home: null,
    cell: null,
  },
  mainEmail: "test@example.com",
  alternateEmail: "test@example.com",
  birthdate: new admin.firestore.Timestamp(Math.floor(Date.now() / 1000), 0),
  gender: "",
  educationLevel: "",
  employmentStatus: "",
  codeOfConduct: {
    waiverSigned: true,
    wasConvicted: false,
    typedSignature: "",
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  },
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp(),
  lastLoggedInOn: admin.firestore.FieldValue.serverTimestamp(),
  firstName: "",
  lastName: "",
  chineseName: "",
  permanentId: {
    country: "",
    type: "",
    value: "",
  },
  volunteerSkills: [{
    skillId: db.collection('skills').doc('2m0JDaRiGv7xmCApWU5O'),
    proficiencyLevel: 10
  }],
  registrationStatus: false,
}

const main = async () => {
  db.collection('volunteers').add(data)
}

main();
