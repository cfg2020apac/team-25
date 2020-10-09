const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const data = {
  organizationName: "",
  subvented: "",
  section88: "",
  focusArea: "",
  populationGroups: [
    {
      name: "",
      description: ""
    }
  ],
  location: "Central",
  affiliate: db.collection('affiliates').doc('HyJtWYVcLbCbijCxnb1Q'),
  numStaff: "0",
  numBeneficiaries: "0",
  funding: null,
  recruitmentData: {
    platform: "",
    remarks: ""
  },
  workedWithBefore: {
    status: false,
    description: "",
    yearCooperation: "",
    experienceDetail: "",
    elementsOrSuggestions: ""
  },
  notes: {
    corporateWishList: "",
    suggestedNoticePeriod: "",
    remarksAfterConfirmation: "",  
    hardwareWishList: "",
  },
  skillBasedVolunteers: "",
  facilities: [db.collection('venues').doc('Q8wf8ojY610jSpIr1wFM')],
  contacts: {
    corporate: [{
      name: "",
      phoneNumber: "",
      email: "",
      position: "",
    }],
    calendar: [{
      name: "",
      phoneNumber: "",
      email: "",
      position: "",
    }]
  },
  satYears: "",
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp(),
}

const main = async () => {
  db.collection('organizations').add(data)
}

main();
  