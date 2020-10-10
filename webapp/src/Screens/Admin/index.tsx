import React, { FC, useMemo } from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import getCollectionReference from '../../Utils/getCollectionReference';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import MUIDataTable from "mui-datatables";
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

export interface AdminScreenProps {}

const columns = [
  {
   name: "firstName",
   label: "First Name",
   options: {
    filter: false,
    sort: true,
   }
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
     filter: false,
     sort: true,
    }
   }, 
  {
    name: "mainEmail",
    label: "Email",
    options: {
     filter: false,
     sort: true,
    }
  },
];

// const deleteUser = ({ id }) => db.collection('volunteers').doc(id).delete();

const AdminScreen: FC<AdminScreenProps> = (props) => {
  const [values, loading, error] = useCollectionData(getCollectionReference('volunteers'), {
    idField: 'volunteerId'
  });

  const options = useMemo(() => ({
    filterType: 'checkbox',
    download: false,
    onRowsDelete: async (lookup, data) => {
      const idToDelete = (values[lookup.data[0].index] as any).volunteerId;
      await db.collection('volunteers').doc(idToDelete).delete();
    }
  }), [values]);  

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

export default AdminScreen;