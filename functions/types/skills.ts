import * as admin from 'firebase-admin'

interface Skills {
  description: string;
  name: string;
  type: string;
  volunteers: admin.firestore.DocumentReference[];
}