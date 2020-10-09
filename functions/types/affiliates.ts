import * as admin from 'firebase-admin'

interface Affiliates {
  createdOn: admin.firestore.Timestamp;
  description?: string;
  lastModifiedOn: admin.firestore.Timestamp;
  name: string;
  organizations: admin.firestore.DocumentReference[];
}