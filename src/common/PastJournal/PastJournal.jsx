import React, { useState } from "react";
import dayjs from "dayjs";
import styles from "./PastJournal.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import PageHeader from "../PageHeader/PageHeader";
import useDB from "../../hooks/useDB";
// MUI CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getJournalCover } from "../../helper/JournalCover";
import NoData from "../NoData/NoData";

function PastJournal({ setShowPastModal }) {
  const { getJournalHistory } = useDB("journals");
  const [history, setHistory] = useState(null);
  const [noData, setNoData] = useState(null);

  let journalCover = getJournalCover();

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
      {!history && !noData && <NoData />}
      {/* 
       // ***********************
      //* Result Part 
      // ************************
      */}
      {console.log(journalCover, "*****")}
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
          <img
            alt="no data"
            src="https://cdn-icons-png.flaticon.com/256/7591/7591003.png"
          />
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
