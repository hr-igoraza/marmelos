import React from "react";
import "./blog.css";
import BlogPost from "../../Components/BlogPosts/BlogPost";

const Blog = () => {
  return (
    <>
      <section className="blog-hero">
        <div className="container mx-auto flex  justify-center h-[120vh] content-center"></div>
      </section>

      <section className="facilities bg-primary-green p-5 rounded-tl-[25px] rounded-tr-[25px] relative top-[-25px]">
        <div className="content-center">
          <h1 className="text-[#ffffff]  font-[700] text-center fs-40 ">
            Recent Blog
          </h1>
        </div>
      </section>

      <section className="container mx-auto recent-blog-list mb-10">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-1 md:grid-rows-9 gap-10">
          {/* First Column */}
          <div className="md:col-span-3 md:row-span-9 ">
            <div className="w-full  overflow-hidden bg-white card-shadow p-5 ">
              <img
                className="m-1.5 h-max w-[calc(100%-12px)]"
                src="/images/blog/recent/tea.png"
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
                        src="/images/blog/recent/author.png"
                        alt="author"
                      />
                    </div>
                    <p className="text-[#6C757D]">June 28, 2018</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[20px]">
                      <img
                        className="w-full"
                        src="/images/blog/recent/share.png"
                        alt="share"
                      />
                    </div>
                    <p className="text-[#6C757D]">1K shares</p>
                  </div>
                </div>
                <p className="my-1 fs-18">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec.Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit. penatibus et magnis dis
                  parturient Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. penatibus et magnis dis parturient
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-4 ">
            <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
              <div className="w-full md:w-1/2">
                <img
                  className="w-full"
                  src="/images/blog/recent/hen.png"
                  alt="card-image"
                />
              </div>
              <div className="w-full md:w-1/2 h-max rounded px-4">
                <h5 className="fs-24 font-[600] mb-4">
                  Lorem Ipsum is simply dummy text
                </h5>
                <p className="fs-16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis partur
                </p>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-4 ">
            <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
              <div className="w-full md:w-1/2">
                <img
                  className="w-full"
                  src="/images/blog/recent/hen.png"
                  alt="card-image"
                />
              </div>
              <div className="w-full md:w-1/2 h-max rounded px-4">
                <h5 className="fs-24 font-[600] mb-4">
                  Lorem Ipsum is simply dummy text
                </h5>
                <p className="fs-16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis partur
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-7 ">
            <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
              <div className="w-full md:w-1/2">
                <img
                  className="w-full"
                  src="/images/blog/recent/hen.png"
                  alt="card-image"
                />
              </div>
              <div className="w-full md:w-1/2 h-max rounded px-4">
                <h5 className="fs-24 font-[600] mb-4">
                  Lorem Ipsum is simply dummy text
                </h5>
                <p className="fs-16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis partur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========== all blogs */}

<section className="blog-list container mx-auto my-30">
    <h2 className="text-[#025D28] font-[700] text-center fs-30 mb-10">All Blog Posts</h2>

    <ul>
        <BlogPost/>
        <BlogPost/>
        <BlogPost/>
        <BlogPost/>
        <BlogPost/>
    </ul>
</section>

    </>
  );
};

export default Blog;
