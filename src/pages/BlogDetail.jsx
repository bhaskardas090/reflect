import { useLocation } from 'react-router-dom';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const location = useLocation();
  console.log('Location object:', location); // Log the entire location object
  const blogData = location.state;

  if (!blogData) {
    return <div>No blog details available</div>;
  }

  return (
    <div className="blog-detail">
      <img src={blogData.img} alt={blogData.title} />
      <h2>{blogData.title}</h2>
      <p>{blogData.content}</p>
    </div>
  );
};

export default BlogDetail;
