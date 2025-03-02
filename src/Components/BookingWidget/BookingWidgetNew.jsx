import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserIcon, CalendarIcon } from "@heroicons/react/24/outline";

// Main Booking Widget Component
export const BookingWidget = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");

  const widgetRef = useRef(null);

  const handleCheckAvailability = () => {
    // Reset error message
    setError("");

    // Validate inputs
    if (!checkInDate || !checkOutDate) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    if (checkInDate >= checkOutDate) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    if (guests < 1 || isNaN(guests)) {
      setError("Please enter a valid number of guests.");
      return;
    }

    // Proceed with WhatsApp message
    const checkIn = checkInDate.toLocaleDateString("en-GB");
    const checkOut = checkOutDate.toLocaleDateString("en-GB");

    const message = `Hello, I would like to check availability for:
    - Check-in: ${checkIn}
    - Check-out: ${checkOut}
    - Guests: ${guests}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+919288100118?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      ref={widgetRef}
      className="mt-10 flex flex-col md:flex-row items-center justify-between border rounded-[50px] shadow-sm hover:shadow-md transition-all duration-200 p-2 max-w-3xl mx-auto relative bg-white overflow-visible"
    >
      <div className="flex-1 w-full md:w-auto p-3">
        <div className="flex items-center gap-3">
          <UserIcon className="w-10 h-5 text-gray-700" />
          <div>
            <label className=" font-[600]" htmlFor="guests">Who</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value, 10)))}
              className="w-full text-sm font-medium text-gray-900 focus:outline-none"
              placeholder="Guests"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 w-full md:w-auto p-3">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-10 h-5 text-gray-700" />
          <div>
            <label className=" font-[600]" htmlFor="check-in">Check-in</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                if (checkOutDate && date >= checkOutDate) {
                  setCheckOutDate(null); // Reset check-out date if invalid
                }
              }}
              minDate={new Date()}
              placeholderText="Check-in"
              className="w-full text-sm font-medium text-gray-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 w-full md:w-auto p-3">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-10 h-5 text-gray-700" />
          <div>
            <label className=" font-[600]" htmlFor="check-out">Check-out</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              minDate={checkInDate || new Date()}
              placeholderText="Check-out"
              className="w-full text-sm font-medium text-gray-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto p-2">
        <button
          className="w-full flex items-center justify-center bg-[#025d28] text-white rounded-4xl p-4 hover:bg-[#024d22] transition-colors"
          onClick={handleCheckAvailability}
        >
          Check Availability
        </button>
      </div>

      {/* {error && (
        <div className="w-full text-center text-red-600 mt-2">
          {error}
        </div>
      )} */}
    </div>
  );
};