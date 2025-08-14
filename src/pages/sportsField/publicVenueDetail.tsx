import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { FaInstagram, FaLocationArrow, FaMap, FaMapMarked, FaMapPin } from 'react-icons/fa';

export interface SportsArenaType {
    id: number;
    name: string;
    description: string;
    image_url: string;
    rating: number;
    address: string;
}

const PublicVenueDetail: React.FC = () => {
    const [fields, setFields] = useState<SportsArenaType[]>([]);

    // helper to simulate delay
    const fakeDelay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get('/sports_fields');
                setFields(res.data);
            } catch (error) {
                console.error(error);
            } finally {
            }
        })();
    }, []);

    const handleButtonClick = (id: number): void => {
        alert(`detail of ${id}`);
    };

    return (
        <div className='p-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {fields.map((field) => (
                <div
                    key={field.id}
                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
                >
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <div className="absolute top-2 right-2 flex items-center bg-black bg-opacity-50 rounded-full px-2 py-1 shadow-md z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-yellow-300"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-white-800 ml-1">{"5.0"}</span>
                        </div>

                        <img
                            src={
                                field.image_url ||
                                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                            }
                            alt={field.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4">
                        <h6 className="text-slate-800 text-xl font-semibold mb-2">
                            {field.name}, {field.address}
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            {field.description}
                        </p>
                    </div>
                    <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
                        <button className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <FaLocationArrow/>
                        </button>
                        <button className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <FaInstagram/>
                        </button>
                    </div>
                    <div className="px-4 pb-4 pt-0 mt-2">
                        <button
                            className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => handleButtonClick(field.id)}
                            type="button"
                        >
                            View Detail
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PublicVenueDetail;
