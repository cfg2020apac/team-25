import numpy as np
import pandas as pd

# set up file names and read into dataframes
# accept input filenames from NodeJS server
ngo_filename = "5_NGO_database.xlsx"
hohk_programs_filename = "4_HandsOnProgram.xls"
volunteer_filename = "2_Dummy_Volunteer_Data.xls"

# read files into dataframes
ngo_df = pd.read_excel(ngo_filename)
programs_df = pd.read_excel(hohk_programs_filename)
volunteers_df = pd.read_excel(volunteer_filename)

# drop irrelevant columns and reset index
colsToDropNgo = [0, 2, 3, 7, 8, 9, 10, 12, 15, 16, 17,
                 19, 21, 22, 24, 25, 26, 27, 30, 31, 32, 33, 34]
ngo_df.drop(ngo_df.columns[colsToDropNgo], axis=1, inplace=True)
ngo_df.index = np.arange(1, len(ngo_df)+1)

# drop irrelevant columns and reset index
# also drop programs where status != active (cancelled or pending). can't do predictive modeling with time constraint.
colsToDropProgs = [0, 5, 7, 8, 10, 11, 13, 14, 16, 17, 18]
programs_df.drop(programs_df.columns[colsToDropProgs], axis=1, inplace=True)
programs_df = programs_df[programs_df.Status == 'Active']
programs_df.index = np.arange(1, len(programs_df)+1)

# drop columns and reset index
colsToDropVols = [0, 1, 5, 6, 7, 14]
volunteers_df.drop(volunteers_df.columns[colsToDropVols], axis=1, inplace=True)
volunteers_df.index = np.arange(1, len(volunteers_df)+1)

# improving column-names' readability
ngo_df.columns = ['OrganizationName', 'FocusArea', 'ServedPopulationGroups', 'GroupsDescription', 'Location', 'NumOfStaff', 'NumOfBeneficiaries',
                  'WorkWithUsBefore', 'YearOfCooperation', 'WishList/PracticalInformation', 'SkillBasedVolunteerNeeds', 'AnyFacilitiesOrRooms']
programs_df.columns = ['Status', 'TotalHoursServedUnderProgram', 'PopulationsServed', 'PrimaryImpactArea', 'VolunteerOpportunityName', 'Location',
                       'OpportunityCoordinator', 'MaxAttendance', 'TotalAttended', 'TotalNotAttended', 'TotalHoursServedForEachOccurrence', 'OpportunityRecordID']
volunteers_df.columns = ['Interests', 'Gender', 'EmploymentStatus', 'AttendanceStatus', 'Connections:HoursServed',
                         'Contact:HoursServed', 'VolunteerOpportunityName', 'VolunteerOpportunityManagingOrgName', 'VolunteerOpportunityType', 'ContactID']

# volunteers by age
femaleCount = volunteers_df['Gender'].value_counts()['Female']
maleCount = volunteers_df['Gender'].value_counts()['Male']
genderGraph = [[femaleCount, maleCount], ["Female", "Male"]]
print(genderGraph)
