import React, { useEffect, useState } from "react";
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
        onclick={() => navigate(-1)}
        title="Resource Blog"
      />
      <div style={{ padding: "1rem" }}>
        <img
          src={blogData?.img}
          alt="blog_image"
          style={{ width: "100%", marginTop: "4rem" }}
        />
        <h2 style={{ margin: "1rem auto" }}>{blogData?.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: blogData?.description }} />
      </div>
    </>
  );
}

export default Blog;
