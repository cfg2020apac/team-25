import * as admin from 'firebase-admin'

interface Volunteers {
  address: {
    business: admin.firestore.GeoPoint;
    primaryAddress: true;
    residential: admin.firestore.GeoPoint;
  };
  alternateEmail: string;
  birthdate: admin.firestore.Timestamp;
  chineseName: string;
  codeOfConduct: {
    timestamp: admin.firestore.Timestamp;
    typedSignature: string;
    waiverSigned: boolean;
    wasConvincted: boolean;
  };
  createdOn: admin.firestore.Timestamp;
  educationLevel: string;
  employmentStatus: string;
  firstName: string;
  gender: string;
  lastLoggedInOn: admin.firestore.Timestamp;
  lastModifiedOn: admin.firestore.Timestamp;
  mainEmail: string;
  permanentId: {
    country: string;
    type: string;
    value: string;
  };
  phoneInfo: {
    business: string;
    cell: null;
    home: null;
    primaryPhone: string;
  };
  registrationStatus: boolean;
  volunteerSkills: {
      proficiencyLevel: number;
      skillId: admin.firestore.DocumentReference;
  }[];
}