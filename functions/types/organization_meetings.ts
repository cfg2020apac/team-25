import * as admin from 'firebase-admin'

interface OrganizationMeetings {
  createdOn: admin.firestore.Timestamp;
  description: string;
  meetingTime: admin.firestore.Timestamp;
  organization: admin.firestore.DocumentReference[];
  title: string;
}