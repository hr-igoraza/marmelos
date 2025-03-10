import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const message = `New Enquiry:\n\nFull Name: ${formData.fullName}\nLast Name: ${formData.lastName}\nPhone Number: ${formData.phoneNumber}\nEmail: ${formData.email}\nMessage: ${formData.message}`;


    const encodedMessage = encodeURIComponent(message);


    const whatsappLink = `https://wa.me/+919288100118?text=${encodedMessage}`;


    window.open(whatsappLink, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-white p-6 rounded-lg w-full max-w-2xl"
    >
      <div className="grid md:grid-cols-2 md:gap-10 gap-2">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 gap-2 md:mt-4 mt-2">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      </div>
      <div className="md:mt-4 mt-2">
        <label className="block text-gray-700 font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-green-700 text-white font-semibold py-2 mt-4 hover:bg-green-800"
      >
        Done
      </button>
    </form>
  );
};

export default Form;