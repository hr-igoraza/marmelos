import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { blogData } from "./blogData";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id, 10);
  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div>
        <h2>Error: No Blogs Found</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  return (
    <>
      <div className="section container-full mx-auto mb-30 overflow-hidden h-[90vh]">
        <img
          src={blog.image}
          className="w-full h-full object-cover object-center"
          alt={blog.title}
        />
      </div>

      <div className="container mx-auto mb-[100px]">
        <h2 className="fs-50 font-[500] mx-auto ">{blog.title}</h2>

        <div className="flex justify-between mt-10 mb-5 items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[50px]">
              <img
                className="w-full"
                src={[blog.authorImage]}
                alt="author"
              />
            </div>
            <p className="text-[#6C757D] fs-24">{blog.datePosted}</p>
          </div>
          <div className="flex gap-3">
            <div className="w-[25px]">
              <img
                className="w-full"
                src="/images/blog/recent/share.png"
                alt="share"
              />
            </div>
            <p className="text-[#6C757D] fs-24">{blog.shareCount} shares</p>
          </div>
        </div>

        <p className="fs-24 font-[400] ">
          {blog.description}
        </p>

        <div className="w-full flex justify-center my-10">
          <div className="">
            <button
              className="flex items-center gap-2 bg-primary-green text-white py-2 px-20 fs-20 "
              onClick={() => navigate("/blog")}
            >
              <img className="w-[25px]" src="/images/blog/back.png" alt="back" />
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
