import { CommonTable } from "../../components/common/datatable";
import React from "react";



const Index: React.FC = () => {
    return (
        <div className="p-4 max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Sports Fields</h1>
                {/* <button
                  onClick={() => navigate(NEWSPORTSFIELDS)}
                  className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
                >
                  + Add New Field
                </button> */}
              </div>
        
              {/* <CommonTable
                data={fields}
                columns={columns}
              /> */}
            </div>
    )
}


export default Index;