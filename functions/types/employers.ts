import * as admin from 'firebase-admin'

interface Employers {
  contact: {
    email: string;
    name: string;
    phoneNumber: string;
  }
  createdOn: admin.firestore.Timestamp;
  description: string;
  lastModifiedOn: admin.firestore.Timestamp;
  name: string;
  volunteers: admin.firestore.DocumentReference[];
}