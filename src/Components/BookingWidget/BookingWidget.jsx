import { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { UserIcon, CalendarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Guest Picker Component
const GuestPicker = ({ guests, setGuests }) => {
  const handleIncrement = (e) => {
    e.stopPropagation(); 
    setGuests(guests + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation(); 
    setGuests(Math.max(1, guests - 1));
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={handleDecrement}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          −
        </button>
        <span className="font-medium text-lg">{guests}</span>
        <button
          onClick={handleIncrement}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

// Main Booking Widget Component
export const BookingWidget = () => {
  const [activeField, setActiveField] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const widgetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setActiveField(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB');
  };

  return (
    <div 
      ref={widgetRef} 
      className="mt-10 flex flex-col md:flex-row items-center justify-between border rounded-[50px] shadow-sm hover:shadow-md transition-all duration-200 p-2 max-w-3xl mx-auto relative bg-white overflow-visible"
    >
      {/* Who Section */}
      <div className="flex-1 w-full md:w-auto p-3 relative">
        <button
          className="w-full text-left focus:outline-none rounded-lg p-3 transition-all hover:bg-gray-50"
          onClick={() => setActiveField(activeField === 'who' ? null : 'who')}
          style={{ outline: activeField === 'who' ? '2px solid #025d28' : 'none' }}
        >
          <div className="flex items-center gap-3">
            <UserIcon className="w-5 h-5 text-gray-700" />
            <div>
              <div className="text-sm font-medium text-gray-900">Who</div>
              <div className="text-gray-500 text-sm">
                {guests > 0 ? `${guests} guest${guests !== 1 ? 's' : ''}` : 'Add guests'}
              </div>
            </div>
          </div>
          {activeField === 'who' && (
            <div className="absolute top-full left-0 mt-2 w-full z-50 bg-white rounded-xl shadow-lg">
              <GuestPicker guests={guests} setGuests={setGuests} />
            </div>
          )}
        </button>
      </div>

      {/* Check In Section */}
      <div className="flex-1 w-full md:w-auto p-3 relative">
        <button
          className="w-full text-left focus:outline-none rounded-lg p-3 transition-all hover:bg-gray-50"
          onClick={() => setActiveField('checkIn')}
          style={{ outline: activeField === 'checkIn' ? '2px solid #025d28' : 'none' }}
        >
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-5 h-5 text-gray-700" />
            <div>
              <div className="text-sm font-medium text-gray-900">Check in</div>
              <div className="text-gray-500 text-sm">
                {formatDate(checkInDate) || 'Add dates'}
              </div>
            </div>
          </div>
          {activeField === 'checkIn' && (
            <div className="absolute top-full left-0 md:left-auto md:right-0 mt-2 w-fit md:w-[350px] z-50 ">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => {
                  setCheckInDate(date);
                  setActiveField('checkOut');
                }}
                inline
                minDate={new Date()}
                calendarClassName="font-sans react-datepicker--responsive"
              />
            </div>
          )}
        </button>
      </div>

      {/* Check Out Section */}
      <div className="flex-1 w-full md:w-auto p-3 relative">
        <button
          className="w-full text-left focus:outline-none rounded-lg p-3 transition-all hover:bg-gray-50"
          onClick={() => setActiveField('checkOut')}
          style={{ outline: activeField === 'checkOut' ? '2px solid #025d28' : 'none' }}
        >
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-5 h-5 text-gray-700" />
            <div>
              <div className="text-sm font-medium text-gray-900">Check out</div>
              <div className="text-gray-500 text-sm">
                {formatDate(checkOutDate) || 'Add dates'}
              </div>
            </div>
          </div>
          {activeField === 'checkOut' && (
            <div className="absolute top-full left-0 md:left-auto md:right-0 mt-2 w-fit md:w-[350px] z-50 ">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => {
                  setCheckOutDate(date);
                  setActiveField(null);
                }}
                inline
                minDate={checkInDate}
                calendarClassName="font-sans react-datepicker--responsive"
              />
            </div>
          )}
        </button>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto p-2">
        <button
          className="w-full flex items-center justify-center bg-[#025d28] text-white rounded-4xl p-4 hover:bg-[#024d22] transition-colors"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};