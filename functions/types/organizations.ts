import * as admin from 'firebase-admin'

interface Organizations {
  affiliate: admin.firestore.DocumentReference;
  contacts: {
    calendar: {
      email: string;
      name: string;
      phoneNumber: string;
      position: string;
    }[];
    corporate: {
      email: string;
      name: string;
      phoneNumber: string;
      position: string;
    }[];
    createdOn: admin.firestore.Timestamp;
  };
  facilities: admin.firestore.DocumentReference[];
  focusArea: string;
  funding: string;
  irdFileNo: string;
  lastModifiedOn: admin.firestore.Timestamp;
  location: string;
  notes: {
    corporateWishList: string;
    hardwareWishList: string;
    remarksAfterConfirmation: string;
    suggestedNoticePeriod: string;
  };
  numBeneficiaries: string;
  numStaff: string;
  organizationName: string;
  populationGroups: {
    description: string;
    name: string;
  }[];
  recruitmentData: {
    platform: string;
    remarks: string;
  };
  satYears: string;
  section88: string;
  skillBasedVolunteers: string;
  subvented: string;
  workedWithBefore: {
    description: string;
    elementsOrSuggestions: string;
    experienceDetail: string;
    status: boolean;
    yearCooperation: string;
  }
}