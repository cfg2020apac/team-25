import React, { FC, useMemo } from "react";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import getCollectionReference from "../../Utils/getCollectionReference";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MUIDataTable from "mui-datatables";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Pie } from "react-chartjs-2";
import { BarChart } from "./barchart";

const db = firebase.firestore();

export interface AdminScreenProps {}

const columns = [
  {
    name: "firstName",
    label: "First Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "mainEmail",
    label: "Email",
    options: {
      filter: false,
      sort: true,
    },
  },
];

const VolunteersbyGender = {
  title: "Volunteers by Gender",
  //NOT BASED ON ACTUAL DATA
  datasets: [
    {
      data: [15, 84],
      backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Male", "Female"],
};
const MostPopularEventTypes = {
  title: "Most Popular Event Types",
  datasets: [
    {
      data: [221, 74, 28, 26, 54],
      backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    "Youth Opportunities",
    "Serve-A-Thon",
    "COVID-19 Relief",
    "Phone Call Support",
    "Others",
  ],
};

const VolunteersbyLanguage = {
  title: "Volunteers by Language",
  //NOT BASED ON ACTUAL DATA
  datasets: [
    {
      data: [40, 32, 27],
      backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["English", "Cantonese", "Both"],
};
const VolunteersbyResidentialStatus = {
  title: "Volunteers by Residential Status",
  //NOT BASED ON ACTUAL DATA
  datasets: [
    {
      data: [68, 31],
      backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Locals", "Expats"],
};

const AdminScreen: FC<AdminScreenProps> = (props) => {
  const [values, loading, error] = useCollectionData(
    getCollectionReference("volunteers"),
    {
      idField: "volunteerId",
    }
  );

  const options = useMemo(
    () => ({
      filterType: "checkbox",
      download: false,
      onRowsDelete: async (lookup, data) => {
        const idToDelete = (values[lookup.data[0].index] as any).volunteerId;
        await db.collection("volunteers").doc(idToDelete).delete();
      },
    }),
    [values]
  );

  //const classes = useStyles();
  if (loading) {
    return <CircularProgress size="large" />;
  }

  if (error) {
    return <div>Error fetching volunteers</div>;
  }

  const VolunteersbyGender = {
    datasets: [
      {
        data: [15, 84],
        backgroundColor: ["#0074D9", "#FF4136"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Male", "Female"],
    title: "Volunteers by Gender",
  };
  const MostCommonEventTypes = {
    datasets: [
      {
        data: [221, 74, 28, 26, 54],
        backgroundColor: [
          "#0074D9",
          "#FF4136",
          "#a6d4fa",
          "#81c784",
          "#ff9800",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Youth Opportunities",
      "Serve-A-Thon",
      "COVID-19 Relief",
      "Phone Call Support",
      "Others",
    ],
    title: "Most Common Event Types",
  };
  const HighestParticipationRate = {
    title: "Highest Participation Rate for Different Event Types",
    chartdata: [73.61, 47.0, 41.59, 41.17, 34.66],
    color: "#FFFFFF",
    labels: [
      "Serve-A-Thon",
      "Online Training Session",
      "Phone Call Support",
      "Family Opportunity",
      "Youth Opportunities",
    ],
  };

  return (
    <div>
      <Box>
        <MUIDataTable
          title={"Volunteers List"}
          data={values}
          columns={columns}
          options={options}
        />
      </Box>
      <Typography component="h3" variant="h3">
        Volunteers by Gender
      </Typography>
      <Pie data={VolunteersbyGender} />
      <Typography component="h3" variant="h3">
        Most Common Event Types
      </Typography>
      <Pie data={MostCommonEventTypes} />
      <Typography component="h3" variant="h3">
        Highest Participation Rate
      </Typography>
      <BarChart input={HighestParticipationRate} />
      <Typography component="h3" variant="h3">
        Volunteers by Language
      </Typography>
      <Pie data={VolunteersbyLanguage} />
      <Typography component="h3" variant="h3">
        Volunteers by ResidentialStatus
      </Typography>
      <Pie data={VolunteersbyResidentialStatus} />
    </div>
  );
};

export default AdminScreen;
