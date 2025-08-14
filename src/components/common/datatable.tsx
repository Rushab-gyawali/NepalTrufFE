import { UPDATESPORTSFIELDS } from '../../util/constants/routeConstant.ts';
import React, { useState, useEffect } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api.ts';

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type CommonTableProps<T extends { id: number | string }> = {
  data: T[];
  columns: Column<T>[];
  onDataChange?: (updatedData: T[]) => void; // optional callback when data changes
};

export function CommonTable<T extends { id: number | string }>({
  data,
  columns,
  onDataChange,
}: CommonTableProps<T>) {
  const navigate = useNavigate();

  // Internal state for data so we can update/delete rows
  const [tableData, setTableData] = useState<T[]>(data);

  // Sync props data to internal state on prop change
  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleEdit = (id: number | string) => {
    api.get(`/sports_fields/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response)
          navigate(`${UPDATESPORTSFIELDS}/${id}`);
        }
      })
      .catch((error) => {
        console.error("error:", error);
        alert("Unable to find the Sports Field.");
      }
      );
  };

  const handleDelete = async (id: number | string) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await api.delete(`/sports_fields/${id}`);
      const updated = tableData.filter((row) => row.id !== id);
      setTableData(updated);
      if (onDataChange) onDataChange(updated);
    } catch (error) {
      console.error("Failed to delete:", error);
      alert("Failed to delete record. Please try again.");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 font-medium text-gray-700"
              >
                {col.header}
              </th>
            ))}
            <th className="px-4 py-2 font-medium text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-t">
              {columns.map((col) => (
                <td key={col.accessor as string} className="px-4 py-2">
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : (row[col.accessor] as React.ReactNode)}
                </td>
              ))}
              <td className="space-x-2 px-4 py-2">
                <button
                  onClick={() => handleEdit(row.id)}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label={`Edit ${row.id}`}
                >
                  <FaPen />
                </button>
                <button
                  onClick={() => handleDelete(row.id)}
                  className="text-red-600 hover:text-red-800"
                  aria-label={`Delete ${row.id}`}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {tableData.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
