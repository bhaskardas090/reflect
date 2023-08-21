import React, { useEffect, useState } from "react";
import styles from "../styles/Resources.module.css";
import PageHeader from "./../common/PageHeader/PageHeader";
import { useNavigate } from "react-router";
import Quote from "./../common/Quote/Quote";
import meditate from "../assets/meditation_resource.png";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ResourceCard from "../common/ResourceCard/ResourceCard";
import useDB from "../hooks/useDB";

function Resource() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [activeTab, setActiveTab] = useState("blogs");
  const { getBlogs, getVideos, getPodcasts } = useDB(activeTab);
  const [resData, setResData] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleActiveTab = (e) => {
    setActiveTab(e.target.firstChild.data.toLowerCase());
  };

  useEffect(() => {
    const getBlogsData = async () => {
      const res = await getBlogs();
      setResData(res);
    };
    const getVideosData = async () => {
      const res = await getVideos();
      setResData(res);
    };
    const getPodcastsData = async () => {
      const res = await getPodcasts();
      setResData(res);
    };
    if (activeTab === "blogs") getBlogsData();
    if (activeTab === "videos") getVideosData();
    if (activeTab === "podcasts") getPodcastsData();
    // console.log(res);
  }, [activeTab]);

  return (
    <div className={styles.resources}>
      <PageHeader
        type="transparent"
        title="Resources"
        onclick={() => navigate("/")}
      />
      <div className={styles.resourcesContainer}>
        <Quote>
          “We can’t always change what’s happening around us, but we can change
          what happens within us.”
        </Quote>
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Blogs" onClick={handleActiveTab} />
            <Tab label="Videos" onClick={handleActiveTab} />
            <Tab label="Podcasts" onClick={handleActiveTab} />
          </Tabs>
        </Box>
        <div className={styles.cardContainer}>
          {activeTab === "blogs" &&
            resData &&
            resData?.map((blog) => (
              <ResourceCard type="blog" data={blog} key={blog.id} />
            ))}
          {activeTab === "videos" &&
            resData &&
            resData?.map((video) => (
              <ResourceCard data={video} key={video.id} />
            ))}
          {activeTab === "podcasts" &&
            resData &&
            resData?.map((podcast) => (
              <ResourceCard data={podcast} key={podcast.id} />
            ))}
        </div>
        {/* <img src={meditate} alt="meditation" className={styles.meditate} /> */}
      </div>
    </div>
  );
}

export default Resource;
