import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonTable } from "../../components/common/datatable";
import { NEWSPORTSFIELDS } from "../../util/constants/routeConstant";

export interface SportsField {
  id: number;
  name: string;
  owner_id: string;
  field_type: string;
  address: string;
  latitude: string;
  longitude: string;
  hourly_rate: string;
  description: string;
  image_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

const columns: Column<SportsField>[] = [
  { header: "Name", accessor: "name" },
  { header: "Type", accessor: "field_type" },
  { header: "Address", accessor: "address" },
  { header: "Hourly Rate", accessor: "hourly_rate" },
  {
    header: "Active",
    accessor: "is_active",
    render: (value) => (value ? "Yes" : "No"),
  },
];

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<SportsField[]>([]);

  useEffect(() => {
    axios
      .get<SportsField[]>("http://localhost:3000/sports_fields")
      .then((response) => {
        setFields(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sports fields:", error);
      });
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Sports Fields</h1>
        <button
          onClick={() => navigate(NEWSPORTSFIELDS)}
          className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
        >
          + Add New Field
        </button>
      </div>

      <CommonTable data={fields} columns={columns} />
    </div>
  );
};

export default Index;
