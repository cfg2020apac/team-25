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
    offset: 700,
    maxWidth: 700,
    alignItems: "center",
  },
});
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
    <div className={classes.inner}>
      <BarChart input={Volunteers} />
      <Pie data={Chartdata} />
    </div>
  );
};

export default AdminScreen;
