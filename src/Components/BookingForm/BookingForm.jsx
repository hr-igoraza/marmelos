import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "India",
    streetAddress: "",
    checkIn: "",
    checkOut: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Booking:
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Country: ${formData.country}
    Street Address: ${formData.streetAddress}
    Check-In: ${formData.checkIn}
    Check-Out: ${formData.checkOut}
    Additional Info: ${formData.additionalInfo}`;

    const whatsappUrl = `https://wa.me/+919288100118?text=${(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-3 ">
      <div className="grid grid-cols-1  gap-6">
        <div className="md:flex justify-between gap-4">
          <label className="block md:w-1/2">
            <span className="text-primary-green font-[600] mb-4">First Name</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
              required
            />
          </label>
          <label className="block md:w-1/2">
            <span className="text-primary-green font-[600] mb-4">Last Name</span>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
              required
            />
          </label>
        </div>

        <label className="block">
          <span className="text-primary-green font-[600] mb-4">Phone</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
            required
          />
        </label>
        <label className="block">
          <span className="text-primary-green font-[600] mb-4">Email address</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
            required
          />
        </label>
        <label className="block">
          <span className="text-primary-green font-[600] mb-4">Country / Region</span>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <label className="block">
          <span className="text-primary-green font-[600] mb-4">Street address</span>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
            required
          />
        </label>
        <div className="md:flex justify-between gap-4">
        <label className="block md:w-1/2">
          <span className="text-primary-green font-[600] mb-4">Check-In</span>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
            required
          />
        </label>
        <label className="block md:w-1/2">
          <span className="text-primary-green font-[600] mb-4">Check-Out</span>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-3 border border-primary-green shadow-sm"
            required
          />
        </label>
        </div>
        <label className="block">
          {/* <span className="text-primary-green font-[600] mb-4">
            Additional information
          </span> */}
          <textarea
          placeholder="Additional information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className=" placeholder:text-center mt-1 block w-full rounded-md p-3 border border-primary-green  shadow-sm"
            rows="4"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-primary-green fs-24 font-[600] text-white py-2 px-4 rounded-md p-3 hover:bg-green-600"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
