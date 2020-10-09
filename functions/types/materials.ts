import * as admin from 'firebase-admin';

interface ExtraNeeds {
  attributes: {
    deliveryAddress: string;
    groupSupported: string;
    phoneNumber: string;
  };
  createdOn: admin.firestore.Timestamp;
  description: string;
  lastModifiedOn: admin.firestore.Timestamp;
  name: string;
  organization: admin.firestore.DocumentReference;
  quantity: string;
}