import React, { FC } from "react";
import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDocumentData } from "react-firebase-hooks/firestore";
import getDocumentReference from "../../Utils/getDocumentReference";
import { Bar, Pie } from "react-chartjs-2";
import { BarChart } from "./barchart";

export interface AdminScreenProps {}

const useStyles = makeStyles({
  inner: {
    maxWidth: 700,
    alignItems: "center",
  },
});

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
  const [indexData, loading] = useDocumentData(
    getDocumentReference("display", "index")
  );

  const classes = useStyles();
  if (loading) {
    return <CircularProgress size="large" />;
  }

  const { heading, message } = (indexData || {}) as {
    heading: string;
    message: string;
  };

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
      <Typography component="h1" variant="h1">
        Admin
      </Typography>
      <Typography component="h3" variant="h3">
        Volunteers by Gender
      </Typography>
      <Pie data={VolunteersbyGender} />
      <Typography component="h3" variant="h3">
        Most CommonEvent Types
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
