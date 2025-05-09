"use client";

import formatNumber from "@/utils";
import getFinancialAdvice from "@/utils/getFinancialAdvice";
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";

function CardInfo({ budgetList = [], incomeList = [] }) {
  const { user } = useUser();
  const [financialAdvice, setFinancialAdvice] = useState("");

  const [totalBudget, totalSpend, totalIncome] = useMemo(() => {
    let totalBudget_ = 0,
      totalSpend_ = 0,
      totalIncome_ = 0;

    const filteredBudgetList = budgetList.filter(
      (element) =>
        element.createdBy === user?.primaryEmailAddress?.emailAddress
    );
    const filteredIncomeList = incomeList.filter(
      (element) =>
        element.createdBy === user?.primaryEmailAddress?.emailAddress
    );

    filteredBudgetList.forEach((element) => {
      totalBudget_ += Number(element.amount || 0);
      totalSpend_ += Number(element.totalSpend || 0);
    });

    filteredIncomeList.forEach((element) => {
      totalIncome_ += Number(element.totalAmount || 0);
    });

    return [totalBudget_, totalSpend_, totalIncome_];
  }, [budgetList, incomeList, user]);

  useEffect(() => {
    if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
      const fetchFinancialAdvice = async () => {
        const advice = await getFinancialAdvice(
          totalBudget,
          totalIncome,
          totalSpend
        );
        setFinancialAdvice(advice);
      };

      fetchFinancialAdvice();
    }
  }, [totalBudget, totalIncome, totalSpend]);

  // Helper parsing kategori dari AI
  const parseAdviceByCategory = (text) => {
    const sectionMap = {
      ANGGARAN: "",
      PAJAK: "",
      AFFILIATE: "",
      FREELANCE: "",
    };

    const matches = text.split(/\[(ANGGARAN|PAJAK|AFFILIATE|FREELANCE)\]/gi);
    for (let i = 1; i < matches.length; i += 2) {
      const key = matches[i].toUpperCase();
      const content = matches[i + 1]?.trim();
      if (sectionMap[key] !== undefined) {
        sectionMap[key] = content;
      }
    }

    return sectionMap;
  };

  return (
    <div>
      {budgetList.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 -mb-1 rounded-2xl flex items-center justify-between">
            <div>
              <div className="flex mb-2 flex-row space-x-1 items-center">
                <h2 className="text-md">Finance Advisor</h2>
                <Sparkles
                  className="rounded-full text-white w-10 h-10 p-2
                  bg-gradient-to-r
                  from-pink-500
                  via-red-500
                  to-yellow-500
                  background-animate"
                />
              </div>

              {!financialAdvice ? (
                <h2 className="font-light text-md">Loading financial advice...</h2>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {Object.entries(parseAdviceByCategory(financialAdvice)).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="bg-white rounded-xl shadow p-4 space-y-2 border"
                      >
                        <h3 className="text-md font-semibold">{key}</h3>
                        <p className="text-sm leading-relaxed">{value}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Budget</h2>
                <h2 className="font-bold text-2xl">
                  {formatNumber(totalBudget)}
                </h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Spend</h2>
                <h2 className="font-bold text-2xl">
                  {formatNumber(totalSpend)}
                </h2>
              </div>
              <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. Of Budget</h2>
                <h2 className="font-bold text-2xl">{budgetList.length}</h2>
              </div>
              <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Sum of Income Streams</h2>
                <h2 className="font-bold text-2xl">
                  {formatNumber(totalIncome)}
                </h2>
              </div>
              <CircleDollarSign className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((_, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
