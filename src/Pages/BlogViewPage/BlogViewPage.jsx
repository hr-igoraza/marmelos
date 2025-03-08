import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { blogData } from "../../Data/blogData";

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
      <div className=" md:mb-30 mb-10  md:h-90vh w-full aspect-video">
        <img
          src={blog.image}
          className="object-cover w-full  h-[100%] "
          alt={blog.title}
        />
      </div>

      <div className="container mx-auto md:mb-[100px] mb-20 px-4">
        <h2 className="fs-45 font-[500] mx-auto ">{blog.title}</h2>

        <div className="flex justify-between mt-10 mb-5 items-center">
          <div className="flex gap-3 items-center">
            <div className="md:w-[50px] w-[30px]">
              <img
                className="w-full"
                src={[blog.authorImage]}
                alt="author"
              />
            </div>
            <p className="text-[#6C757D] fs-20">{blog.datePosted}</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="md:w-[25px] w-[15px]">
              <img
                className="w-full"
                src="/images/blog/recent/share.png"
                alt="share"
              />
            </div>
            <p className="text-[#6C757D] fs-18">{blog.shareCount} shares</p>
          </div>
        </div>

        <div className="fs-20 font-[400] ">
          {blog.description}
        </div>

        <div className="w-full flex justify-center my-10">
          <div className="">
            <button
              className="flex items-center gap-2 bg-primary-green text-white py-2 px-20 fs-20 hover:scale-[1.01] duration-300 cursor-pointer "
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
