import React, { useState } from "react";
import styles from "./PastJournal.module.css";
// Custom hook
import useDB from "../../hooks/useDB";
// MUI componets
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// Components imports
import NoData from "../NoData/NoData";
import PageHeader from "../PageHeader/PageHeader";
import { getJournalCover } from "../../helper/JournalCover";
// Asset imports
import nodatasearch from "../../assets/nodata-search.png";

function PastJournal({ setShowPastModal }) {
  const { getJournalHistory } = useDB("journals"); // Calling the backend service
  const [history, setHistory] = useState(null); // State to store previous data
  const [noData, setNoData] = useState(null); // State to check if data is available or not

  let journalCover = getJournalCover(); // Getting a random journal cover

  // Event handler : getting the journal from backend
  const handleChange = async (e) => {
    getJournalHistory(e.$d.toString(), setHistory, setNoData);
  };
  return (
    <div className={styles.form}>
      <PageHeader
        title="Your Journals"
        type="primary"
        onclick={() => setShowPastModal(false)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DesktopDatePicker
            label="Select The Date "
            onChange={(e) => handleChange(e)}
            sx={{
              width: "95%",
              maxWidth: "800px",
              margin: " 70px auto 1rem auto",
            }}
            disableFuture
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* Initial Page : No Data Fallback */}
      {!history && !noData && <NoData />}
      {/* 
       // ***********************
      //* Result Part 
      // ************************
      */}
      {history && (
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <Card className={styles.journal}>
            <CardActionArea>
              <img
                src={journalCover}
                style={{ objectFit: "cover", height: "180px", width: "90vw" }}
                alt="cover_image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {history.title}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: history.journal }} />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
      {/* 
      // ***********************
      //* No Data Part
      // ************************
      */}
      {noData && (
        <div
          style={{ height: "70vh", textAlign: "center", paddingTop: "3rem" }}
        >
          <img alt="no data" src={nodatasearch} />
          <h3 style={{ padding: "1rem", fontSize: "1rem" }}>
            Nothing no show.
            <br />
            Are you sure you wrote your story that day?
          </h3>
        </div>
      )}
    </div>
  );
}

export default PastJournal;
