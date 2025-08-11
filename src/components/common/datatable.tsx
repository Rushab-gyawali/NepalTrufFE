import React from 'react';
import { FaTrash,FaPen } from 'react-icons/fa';

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type CommonTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void =>{
  alert("Button clicked");
};

export function CommonTable<T>({ data, columns }: CommonTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-2 font-medium text-gray-700">
                {col.header}
              </th>
            ))}
            <th className="px-4 py-2 font-medium text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-t">
              {columns.map((col, colIdx) => (
                <td key={col.accessor as string} className='px-4 py-2'>
                {col.render
                  ? col.render(row[col.accessor], row)
                  : (row[col.accessor] as React.ReactNode)}
              </td>
              ))}
              <td><button onClick={(e) =>  handleButtonClick(e)}><FaPen /></button></td>
              {/* <td><FaTrash /></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
