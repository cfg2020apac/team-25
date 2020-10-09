import * as admin from 'firebase-admin'

interface Venues {
  closedTime: string;
  createdOn: admin.firestore.Timestamp;
  description: string;
  lastModifiedOn: admin.firestore.Timestamp;
  name: string;
  openTime: string;
  organization: admin.firestore.DocumentReference;
}