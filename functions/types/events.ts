import * as admin from 'firebase-admin';

interface Events {
  coordinatorEmail: string;
  createdOn: admin.firestore.Timestamp;
  description: string;
  endTime: admin.firestore.Timestamp;
  impactOutcome2: 10;
  lastModifiedOn: admin.firestore.Timestamp;
  maxAttendance: number;
  minAttendance: number;
  minimumAge: number;
  name: string;
  numLeadersNeeded: number;
  organization: null;
  registrationType: string;
  scheduleType: string;
  startTime: admin.firestore.Timestamp;
  status: string;
  totalAttended: number;
  totalConfirmed: number;
}