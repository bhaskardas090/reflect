import React, { useEffect, useState } from "react";
import styles from "../../styles/Resources.module.css";
// MUI imports
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// Component imports
import PageHeader from "../../common/PageHeader/PageHeader";
import Quote from "../../common/Quote/Quote";
import ResourceCard from "../../common/ResourceCard/ResourceCard";
// Custom hook imports
import useDB from "../../hooks/useDB";
// Library imports
import { useNavigate } from "react-router";

function Resource() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0); // Used for toggle
  const [activeTab, setActiveTab] = useState("blogs"); // Used for checking the activetab
  const { getBlogs, getVideos, getPodcasts } = useDB(activeTab); // Backend methods
  const [resData, setResData] = useState(""); // Used to store the resource data

  // Event handler : toogle tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Event handeler : toogle active tab changes
  const handleActiveTab = (e) => {
    setActiveTab(e.target.firstChild.data.toLowerCase());
  };

  // Conditionally callin the backend based on active tab
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
        {
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
        }
      </div>
    </div>
  );
}

export default Resource;
