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


  const classes = useStyles();
  if (loading) {
    return <CircularProgress size="large" />;
  }

  if (error) {
    return (<div>Error fetching volunteers</div>);
  }

  const Volunteers = {
    title: "Volunteers",
    chartdata: [12, 23, 14, 34, 23, 35, 33, 21, 43, 23, 34, 21],
    color: "#FFFFFF",
    labels: [
      "10/19",
      "11/19",
      "12/19",
      "1/20",
      "2/20",
      "3/20",
      "4/20",
      "5/20",
      "6/20",
      "7/20",
      "8/20",
      "9/20",
    ],
  };

  const Chartdata = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["A", "B", "C"],
  };

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

    <div className={classes.inner}>
      <BarChart input={Volunteers} />
      <Pie data={Chartdata} />
    </div>
  );
};


export default AdminScreen;
