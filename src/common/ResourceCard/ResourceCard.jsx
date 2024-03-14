import React, { useState } from "react";
import styles from "./ResourceCard.module.css";
// MUI component imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// Library imports
import { Link, useNavigate } from "react-router-dom";
// Component imports
import VideoPlayer from "../VideoPlayer/VideoPlayer";
//Asset imports
import play from "../../assets/play.png";

function ResourceCard({ type, data }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  //! if type (primary) is there it indicates the blogs else it indicates video
  // Event handler : If type is primary navigating to blog page else It will show the video
  const handleClick = () => {
    if (type) navigate(`/blogs/${data.id}`);
    if (!type) {
      setIsOpen(true);
    }
  };
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <div className={styles.contentContainer} onClick={handleClick}>
          <img
            src={data?.img}
            alt="green iguana"
            className={styles.cover}
            onClick={handleClick}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {data.title}
            </Typography>

            {type && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${data?.description.slice(0, 130)}....`,
                }}
              />
            )}
            {!type && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${data?.description}`,
                }}
              />
            )}
            {type && <Link className={styles.readMore}>Read More</Link>}

            {!type && <img src={play} alt="play" className={styles.play} />}
          </CardContent>
        </div>
      </CardActionArea>
      {data.source && (
        <VideoPlayer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          videoSource={data.source}
        />
      )}
    </Card>
  );
}

export default ResourceCard;
