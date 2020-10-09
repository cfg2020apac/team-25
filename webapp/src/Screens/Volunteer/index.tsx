import React, { FC } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import MUIDataTable from "mui-datatables";
import getCollectionReference from '../../Utils/getCollectionReference';

const columns = [
  {
   name: "firstName",
   label: "First Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
     filter: true,
     sort: true,
    }
   }, 
  {
    name: "mainEmail",
    label: "Email",
    options: {
     filter: true,
     sort: true,
    }
  },
];

const options = {
  filterType: 'checkbox',
  download: false,
};

const VolunteerScreen: FC = () => {
  const [values, loading, error] = useCollectionData(
    getCollectionReference('volunteers'),
    {
      idField: 'volunteerId'
    }
  );
  if (loading) {
    return <CircularProgress size="large" />
  }
  if (error) {
    return (<div>Error fetching volunteers</div>);
  }

  return (
    <Box>
      <MUIDataTable
        title={"Volunteers List"}
        data={values}
        columns={columns}
        options={options}
      />
    </Box>
  )
}

export default VolunteerScreen;