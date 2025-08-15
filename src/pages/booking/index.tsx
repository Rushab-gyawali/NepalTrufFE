import api from "../../api/api";
import React, { useEffect, useState } from "react";
import { CommonTable } from "../../components/common/datatable";

// Use a local type here
interface Booking {
  id: number;
  start_time: string;
  end_time: string;
  status: string;
  total_price: string;
  payment_status: string;
  user_name: string;
  sports_field_name: string;
}

// Column type for CommonTable
interface Column<T> {
  header: string;
  accessor?: string; // <-- allow string keys
  render?: (value: any, row: T) => React.ReactNode;
}

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const res = await api.get("/bookings");
        setBookings(res.data);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const columns: Column<Booking>[] = [
    { header: "User", accessor: "user_name" },
    { header: "Sports Field", accessor: "sports_field_name" },
    { header: "Price", accessor: "total_price" },
    { header: "Status", accessor: "status" },
    { header: "Payment Status", accessor: "payment_status" },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">My Bookings</h1>
      </div>

      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading bookings...</div>
      ) : (
        <CommonTable data={bookings} columns={columns} isActionRequired={false} />
      )}
    </div>
  );
};

export default Index;
