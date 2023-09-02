import React, { useState } from "react";
import styles from "./ResourceCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ResourceVideo from "../ResourceVideo/ResourceVideo";

function ResourceCard({ type, data }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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

            {!type && (
              <img
                src="https://cdn-icons-png.flaticon.com/128/260/260446.png"
                alt="play"
                className={styles.play}
              />
            )}
          </CardContent>
        </div>
      </CardActionArea>
      <ResourceVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        videoSource={data.source}
      />
    </Card>
  );
}

export default ResourceCard;
