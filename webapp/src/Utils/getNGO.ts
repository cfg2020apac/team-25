const getNGO=(NGO)=>{
	let obj = {
		affliate: NGO.affiliate,
		contacts:{
			calendar: [{email: NGO.email, name: NGO.gName, phoneNumber: NGO.phone, position: NGO.position}]
		},
		corporate: {
			calendar: [{email: NGO.corpEmail, name: NGO.corpName, phoneNumber: NGO.corpPhone, position: NGO.corpPosition}]
		},
		facilities: NGO.facility,
		focusArea: NGO.focusArea,
		funding: NGO.funding,
		irdFileNo: NGO.IRDNo,
		lastModifiedOn: "",
		location:NGO.location ,
		notes:{
			corporateWishList: "",
			hardwareWishList: "" ,
			remarksAfterConfimation: "",
			suggestedNoticePeriod: "" 
		},
		numBeneficiaries: NGO.beneficiaries ,
		numStaff: NGO.staff ,
		organizationName: "",
		populationGroups: [{description: "", name:  ""}],
		recruitmentData:{
			platform: NGO.recruitPlat,
			remarks: NGO.recruitRemark
		},
		satYears: NGO.SATYear,
		section88: NGO.section88,
		skillBasedVolunteers: NGO.skillbased,
		subvented: NGO.subvented ,
		workedWithBefore: {
			description: "",
			elementsOrSuggestions: "",
			experienceDetail: "",
			status: ""
			yearCooperation: ""
		}
	}
}