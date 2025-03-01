import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { destinationData } from "../../Data/destinationData";

const DestinationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const destinationId = parseInt(id, 10);
  const destination = destinationData.find((item) => item.id === destinationId);

  if (!destination) {
    return (
      <div>
        <h2>Error: No destinations Found</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  return (
    <>
      <div className="section container-full mx-auto mb-30 overflow-hidden h-[90vh]">
        <img
          src={destination.image}
          className="w-full h-full object-cover object-center"
          alt={destination.title}
        />
      </div>

      <div className="container mx-auto mb-[100px] px-20"   >
        <h2 className="fs-50 font-[500] mx-auto ">{destination.title}</h2>

        <div className="flex justify-between mt-10 mb-5 items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[50px]">
              <img
                className="w-full"
                src="/images/home/location.png"
                alt="location"
              />
            </div>
            <p className=" fs-24">{destination.location}</p>
          </div>
          <div className="flex gap-3">
            <p className=" fs-24 font-[600]">
              {destination.distance}
            </p>
          </div>
        </div>

        <p className="fs-24 font-[400] ">{destination.description}</p>

        <div className="w-full flex justify-center my-10">
          <div className="">
            <button
              className="flex items-center gap-2 bg-primary-green text-white py-2 px-20 fs-20 "
              onClick={() => navigate("/touristdestinations")}
            >
              <img
                className="w-[25px]"
                src="/images/blog/back.png"
                alt="back"
              />
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationPage;
