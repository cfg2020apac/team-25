import * as admin from 'firebase-admin';

interface Interests {
  category: string;
  description: string;
  name: string;
  volunteers: admin.firestore.DocumentReference[];
}