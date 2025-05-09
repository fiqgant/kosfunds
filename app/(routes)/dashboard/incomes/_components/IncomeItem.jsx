import Link from "next/link";
import React from "react";
import { EditIncomes, DeleteIncomes } from "./EditAndDeleteIncomes";
function IncomeItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  return (
    <div
      className="p-5 border rounded-2xl
    hover:shadow-md cursor-pointer h-[170px]"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4
              bg-slate-100 rounded-full 
              "
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg">
          Rp {budget.amount.toLocaleString("id-ID")}
        </h2>
        
      </div>
      <div className="absolute bottom-5 right-5 flex gap-2 mt-5">
          <EditIncomes income={budget} refreshData={() => getIncomelist()} />
          <DeleteIncomes income={budget} refreshData={() => getIncomelist()} />
        </div>
    </div>
  );
}

export default IncomeItem;
