import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import { useLocation, useNavigate } from "react-router";
import useDB from "../hooks/useDB";
import PageHeader from "../common/PageHeader/PageHeader";

function Blog() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const { getBlog } = useDB("blogs");
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await getBlog(id);
      setBlogData(res);
    };
    getData();
  }, [id]);

  return (
    <>
      <PageHeader
        type="primary"
        onclick={() => navigate("/resource")}
        title="Resource Blog"
      />
      <div className={styles.blog} style={{ padding: "1rem" }}>
        <div className={styles.blogImgContainer}>
          <img
            src={blogData?.img}
            alt="blog_image"
            className={styles.blogImg}
          />
        </div>
        <h2 className={styles.blogTitle}>{blogData?.title}</h2>
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: blogData?.description }}
        />
      </div>
    </>
  );
}

export default Blog;
