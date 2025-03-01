import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SeeMoreBtn from "../SeeMoreBtn/SeeMoreBtn";

const BlogPost = ({ blog }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSeeMoreClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <>
      <li key={blog.id}>
        <div className="mb-20 px-4 md:px-0 ">
          <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4 relative">
            <div className="w-full md:w-1/2  aspect-video object-contain overflow-hidden  ">
              <img className="w-full" src={blog.image} alt="card-image" />
            </div>
            <div className="w-full md:w-1/2 h-full rounded md:px-4 px-0">
              <h5 className="md:w-3/5 md:text-left fs-24  font-[600] mb-4 md:mt-0 mt-5">
                {blog.title}
              </h5>

              <div className="flex justify-between mt-8 mb-5">
                <div className="flex gap-3">
                  <div className="w-[30px]">
                    <img
                      className="w-full"
                      src={blog.authorImage}
                      alt="author"
                    />
                  </div>
                  <p className="text-[#6C757D]">{blog.datePosted}</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-[20px]">
                    <img
                      className="w-full"
                      src="/images/blog/recent/share.png"
                      alt="share"
                    />
                  </div>
                  <p className="text-[#6C757D]">{blog.shareCount} shares</p>
                </div>
              </div>
              <p className="fs-16 md:mb-0 mb-20  ">{blog.shortDescription}</p>

              <div className="w-full mt-5 flex justify-end absolute bottom-5 right-5 ">
                <SeeMoreBtn onClick={handleSeeMoreClick} />
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default BlogPost;
