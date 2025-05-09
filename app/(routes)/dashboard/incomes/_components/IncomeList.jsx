"use client";
import React, { useEffect, useState } from "react";
import CreateIncomes from "./CreateIncomes";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Incomes, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import IncomeItem from "./IncomeItem";


function IncomeList() {
  const [incomelist, setIncomelist] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && getIncomelist();
  }, [user]);

  const getIncomelist = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Incomes),
          totalSpend: sql`COALESCE(sum(${Expenses.amount}), 0)`.mapWith(Number),
          totalItem: sql`COALESCE(count(${Expenses.id}), 0)`.mapWith(Number),
        })
        .from(Incomes)
        .leftJoin(Expenses, eq(Incomes.id, Expenses.budgetId))
        .where(eq(Incomes.createdBy, user?.primaryEmailAddress?.emailAddress))
        .groupBy(Incomes.id)
        .orderBy(desc(Incomes.id));
      setIncomelist(result);
    } catch (error) {
      console.error("Failed to fetch incomes:", error);
    }
  };

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateIncomes refreshData={() => getIncomelist()} />
        {incomelist?.length > 0 ? (
          incomelist.map((budget, index) => (
            <div key={index} className="relative">
              <IncomeItem budget={budget} />
            </div>
          ))
        ) : (
          [1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"></div>
          ))
        )}
      </div>
    </div>
  );
}

export default IncomeList;
