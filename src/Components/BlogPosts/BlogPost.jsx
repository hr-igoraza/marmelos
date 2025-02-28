import React,{useEffect} from "react";
import SeeMoreBtn from "../SeeMoreBtn/SeeMoreBtn";

const BlogPost = () => {

    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
      <li>
        <div className="mb-20 px-4 md:px-0">
          <div className="card-shadow overflow-hidden bg-white flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/2">
              <img
                className="w-full"
                src="/images/blog/all/blog-1.png"
                alt="card-image"
              />
            </div>
            <div className="w-full md:w-1/2 h-max rounded px-4 relative">
              <h5 className="md:w-3/5 md:text-left fs-24  font-[600] mb-4">
                Lorem Ipsum is simply dummy Text of the Printing and Typesetting
              </h5>

              <div className="flex justify-between mt-8 mb-5">
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
              <p className="fs-16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec.Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. penatibus et magnis dis parturient
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                penatibus et magnis dis parturient
              </p>

              <div className="w-full mt-5 flex justify-end ">
          <SeeMoreBtn/>
        </div>
            </div>
       
          </div>
        </div>
      </li>
    </>
  );
};

export default BlogPost;
