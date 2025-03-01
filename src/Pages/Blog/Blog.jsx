import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import BlogPost from "../../Components/BlogPosts/BlogPost";
import { blogData } from "../../Data/blogData";

const Blog = () => {
  return (
    <>
       <section className="blog-hero">
        <div className="container mx-auto flex justify-center md:h-[120vh] h-[50vh] content-center"></div>
      </section>

      <section className="facilities bg-primary-green p-5 rounded-tl-[25px] rounded-tr-[25px] relative top-[-25px]">
        <div className="content-center">
          <h1 className="text-[#ffffff] font-[700] text-center fs-40">
            Recent Blog
          </h1>
        </div>
      </section>

      <section className="container mx-auto recent-blog-list mb-10 md:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-1 md:grid-rows-9 gap-10">
          {/* First Column */}
          <div className="md:col-span-3 md:row-span-9">
            <Link to={`/blog/${blogData[0].id}`}>
              <div className="w-full overflow-hidden bg-white card-shadow p-5 h-full">
                <img
                  className="m-1.5 h-max w-[calc(100%-12px)]"
                  src={blogData[0].image}
                  alt="image"
                />
                <div className="h-max w-full px-3 py-2">
                  <h6 className="fs-24 font-[600]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </h6>
                  <div className="flex justify-between mt-10 mb-5">
                    <div className="flex gap-3">
                      <div className="w-[30px]">
                        <img
                          className="w-full"
                          src={blogData[0].authorImage}
                          alt="author"
                        />
                      </div>
                      <p className="text-[#6C757D]">{blogData[0].datePosted}</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-[20px]">
                        <img
                          className="w-full"
                          src="/images/blog/recent/share.png"
                          alt="share"
                        />
                      </div>
                      <p className="text-[#6C757D]">
                        {blogData[0].shareCount} shares
                      </p>
                    </div>
                  </div>
                  <p className="my-1 fs-16">{blogData[0].shortDescription}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Column */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-4">
            <Link to={`/blog/${blogData[1].id}`}>
              <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full"
                    src={blogData[1].image}
                    alt="card-image"
                  />
                </div>
                <div className="w-full md:w-1/2 h-max rounded md:px-4 px-0 md:mt-0 mt-5">
                  <h5 className="fs-24 font-[600] mb-4">{blogData[1].title}</h5>
                  <p className="fs-16">{blogData[1].shortDescription}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Third Column */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-4">
            <Link to={`/blog/${blogData[2].id}`}>
              <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full"
                    src={blogData[2].image}
                    alt="card-image"
                  />
                </div>
                <div className="w-full md:w-1/2 h-max rounded md:px-4 px-0 md:mt-0 mt-5">
                  <h5 className="fs-24 font-[600] mb-4">{blogData[2].title}</h5>
                  <p className="fs-16">{blogData[2].shortDescription}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Fourth Column */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-7">
            <Link to={`/blog/${blogData[3].id}`}>
              <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full"
                    src={blogData[3].image}
                    alt="card-image"
                  />
                </div>
                <div className="w-full md:w-1/2 h-max rounded md:px-4 px-0 md:mt-0 mt-5">
                  <h5 className="fs-24 font-[600] mb-4">{blogData[3].title}</h5>
                  <p className="fs-16">{blogData[3].shortDescription}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========== all blogs */}

      <section className="blog-list container mx-auto my-30">
        <h2 className="text-[#025D28] font-[700] text-center fs-30 mb-10">
          All Blog Posts
        </h2>

        <ul>
          {blogData.slice(4).map((blog) => (
            <BlogPost key={blog.id} blog={blog} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;
