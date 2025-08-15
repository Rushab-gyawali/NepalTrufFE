import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { CommonTable } from '../../components/common/datatable';
import { NEWSPORTSFIELDS } from '../../util/constants/routeConstant';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Type', accessor: 'field_type' },
  { header: 'Address', accessor: 'address' },
  { header: 'Hourly Rate', accessor: 'hourly_rate' },
  {
    header: 'Active',
    accessor: 'is_active',
    render: (value: boolean) => (value ? 'Yes' : 'No'),
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    api
      .get('/sports_fields')
      .then((res) => setFields(res.data))
      .catch(console.error);
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

      <CommonTable
        data={fields}
        columns={columns}
        onDataChange={(updated) => setFields(updated)}
        isActionRequired={true}
      />
    </div>
  );
}
