const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

const data = {
  status: "active", // active, cancelled, inactive, pending
  minimumAge: 10,
  name: "Serve-A-Thon: Deliver Daily Necessities to Homeless People in Sham Shui Po",
  description: "Serve-A-Thon: Deliver Daily Necessities to Homeless People in Sham Shui Po",
  scheduleType: "", // Date & Time Specific, Individually Scheduled, or To Be Scheduled
  registrationType: "Sign Up", // Sign Up or Express Interest, we can represent this as a dropdown
  startTime: new admin.firestore.Timestamp(Math.floor(Date.now() / 1000) + 86400, 0),
  endTime: new admin.firestore.Timestamp(Math.floor(Date.now() / 1000) + 86400 * 3, 0),
  organization: null, // Assume it is HandsOn HK when null, document reference
  coordinatorEmail: "test@example.com",
  numLeadersNeeded: 0,
  maxAttendance: 30,
  minAttendance: 5,
  totalConfirmed: 27,
  // volunteersNeeded: 3, // maxAttendance - totalConfirmed
  totalAttended: 27,
  impactOutcome2: 10,
  // totalNotAttended: 0, // totalConfirmed - totalAttended
  // totalHoursServed: 54, // (endTime - startTime) * totalAttended
  createdOn: admin.firestore.FieldValue.serverTimestamp(),
  lastModifiedOn: admin.firestore.FieldValue.serverTimestamp()
}

const main = async () => {
  db.collection('events').add(data)
}

main();
