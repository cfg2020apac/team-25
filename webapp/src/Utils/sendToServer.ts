import * as firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore()

db.settings({
    ignoreUndefinedProperties: true
  })

const sendToServer = async (values) => {
    const parsedValues = getVolunteer(values);
    await db.collection('volunteers').add(parsedValues);
}

const currentTime = firebase.firestore.FieldValue.serverTimestamp()

const getVolunteer = (volunteer) =>{

    let obj = {
        address: {
            business: volunteer.businessAddr,
            primaryAddress: volunteer.primaryAddr,
            residential: volunteer.residentialAddr
        },
        alternateEmail: volunteer.altEmail,
        birthdate: volunteer.birthDate,
        chineseName: volunteer.chineseName,
        codeOfConduct: {
            timestamp: "",
            typedSignature: "",
            waiverSigned: "",
            wasConvicted: "" 
        },
        createdOn: currentTime,
        educationalLevel: volunteer.educationLevel,
        employmentStatus: volunteer.empStatus,
        firstName: volunteer.fullName,
        gender: volunteer.gender,
        lastLoggedInOn: currentTime,
        lastModifiedOn: currentTime,
        lastName: "",
        mainEmail: volunteer.email,
        permanentId: {
            country: volunteer.country,
            type: volunteer.type,
            value: volunteer.id
        },
        phoneInfo: {
            business: volunteer.businessNo,
            cell: "",
            home: "",
            primaryPhone: volunteer.phone
        },
        registrationStatus: "",
        volunteerSkills: [
            {
                proficiencyLevel: 0,
                skillId: volunteer.volunteerSkill
            }
        ]

    }
    return obj;
};

export default sendToServer;