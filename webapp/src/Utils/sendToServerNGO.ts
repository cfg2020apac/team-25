import * as firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore()

const sendToServerNGO = (values) => {
    console.log(getNGO(values));
    db.collection('organizations').add(getNGO(values));
}

const currentTime = firebase.firestore.FieldValue.serverTimestamp()

const getNGO = (NGO) =>{

    let obj = {
        affiliate: NGO.affiliate,
        contacts: {
            calendar: [{
                email: NGO.email,
                name: NGO.gName,
                phoneNumber: NGO.phone,
                position: NGO.position
            }],
            corporate: [{
                email: NGO.corpEmail,
                name: NGO.corpName,
                phoneNumber: NGO.corpPhone,
                position: NGO.corpPosition
            }],
            facilities:[NGO.facility],
            focusArea: NGO.focusArea,
            funding: NGO.funding,
            irdFileNo: NGO.IRDNo,
            lastModifiedOn: currentTime,
            location: NGO.location,
            notes: {
                corporateWishList: "",
                hardwareWishList: "",
                remarksAfterConfimation: "",
                suggestedNoticePeriod: ""
            },
            numBeneficiaries: NGO.beneficiaries,
            numStaff: NGO.staff,
            organizationName: "",
            populationGroupd:[{
                description: "",
                name: ""
            }],
            recruitmentData:{
                platform: NGO.recruitPlat,
                remarks: NGO.recruitRemark
            },
            satYears: NGO.SATYear,
            section88: NGO.section88,
            skillBasedVolunteers: NGO.skillbased,
            subvented: NGO.subvented,
            workedWithBefore:{
                descriptiOn: "",
                elementsOrSuggestions: "",
                experienceDetail: "",
                status: "",
                yearCooperation:""
            }
        },
    }
    return obj;
};

export default sendToServerNGO;
