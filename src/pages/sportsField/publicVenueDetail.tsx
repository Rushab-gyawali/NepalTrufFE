import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import CustomDatePicker from '../../components/common/datePicker';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

export interface SportsArenaType {
    id: number;
    name: string;
    description: string;
    image_url: string;
    rating: number;
    address: string;
    hourly_rate: number;
}

const PublicVenueDetail: React.FC = () => {
    const [fields, setFields] = useState<SportsArenaType[]>([]);
    const [selectedField, setSelectedField] = useState<SportsArenaType | null>(null);
    const [bookingDate, setBookingDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get('/sports_fields');
                setFields(res.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const handleCardClick = (field: SportsArenaType) => {
        setSelectedField(field);
        setIsPanelOpen(true);
    };

    const handleClosePanel = () => {
        setIsPanelOpen(false);
        setSelectedField(null);
        setBookingDate(null);
        setStartTime('');
        setEndTime('');
    };

    const handleBook = () => {
        if (!bookingDate || !startTime || !endTime) {
            alert('Please select date and time range');
            return;
        }
        alert(
            `Booking ${selectedField?.name} on ${bookingDate.toDateString()} from ${startTime} to ${endTime}`
        );
        handleClosePanel();
    };

    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    return (
        <div className="relative">
            {/* Grid of fields */}
            <div className='p-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {fields.map((field) => (
                    <div
                        key={field.id}
                        className="relative flex flex-col my-6 bg-white shadow-md border border-slate-200 rounded-lg w-96 cursor-pointer group overflow-hidden"
                        onClick={() => handleCardClick(field)}
                    >
                        <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                            {/* Image */}
                            <img
                                src={
                                    field.image_url ||
                                    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                }
                                alt={field.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Rating badge */}
                            <div className="absolute top-2 right-2 flex items-center bg-black bg-opacity-60 rounded-full px-2 py-1 shadow-md z-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-3 h-3 text-orange-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="ml-1 text-white text-sm">{field.rating || "5.0"}</span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white text-lg font-semibold">{field.name}</h3>
                                    <span className="text-white text-sm bg-green-600 px-2 py-1 rounded">
                                        Rs. {field.hourly_rate}
                                    </span>
                                </div>

                                {/* Location with map icon */}
                                <div className="flex items-center text-gray-200 text-sm mt-1">
                                    <FaMapMarkerAlt className="text-red-400 mr-1" />
                                    <span>{field.address}</span>
                                </div>

                                {/* Truncated description */}
                                <p className="text-gray-300 text-sm mt-2">
                                    {truncateText(field.description, 18)}
                                </p>

                                <FaArrowRight className="text-white text-2xl absolute bottom-4 right-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sliding panel */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-500 
    ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'} 
    w-1/2 flex flex-col`}
            >
                {selectedField && (
                    <>
                        {/* Scrollable top content */}
                        <div className="p-6 overflow-y-auto flex-1">
                            <button
                                className="mb-4 text-red-500 font-bold "
                                onClick={handleClosePanel}
                            >
                                Close
                            </button>
                            <div className="flex justify-between items-center mb-1">
                                <h2 className="text-2xl font-bold">{selectedField.name}</h2>
                                <span className="text-lg font-semibold text-green-600">
                                    Rs. {selectedField.hourly_rate}
                                </span>
                            </div>

                            {/* Address under name */}
                            <div className="flex items-center text-gray-700 mb-4">
                                <FaMapMarkerAlt className="text-red-500 mr-1" />
                                <span>{selectedField.address}</span>
                            </div>

                            <p className="text-slate-600 mb-4">{selectedField.description}</p>
                            <img
                                src={
                                    selectedField.image_url ||
                                    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                }
                                alt={selectedField.name}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                        </div>

                        {/* Fixed booking section */}
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <p className="mb-1 font-semibold text-sm">Select Booking Date:</p>
                            <CustomDatePicker
                                selectedDate={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                            />

                            <p className="mt-3 mb-1 font-semibold text-sm">Select Time Range:</p>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="border border-slate-300 rounded-md p-1 w-1/2 text-sm"
                                />
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="border border-slate-300 rounded-md p-1 w-1/2 text-sm"
                                />
                            </div>

                            <button
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm"
                                onClick={handleBook}
                            >
                                Book Now
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Overlay */}
            {isPanelOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={handleClosePanel}
                />
            )}
        </div>
    );
};

export default PublicVenueDetail;
