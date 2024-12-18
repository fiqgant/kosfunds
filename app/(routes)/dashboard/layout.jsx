"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if (result?.length === 0) {
      router.replace("/dashboard/budgets");
    }
  };

  return (
    <>
      {/* Include Analytics at the top level of the layout */}
      <Analytics />
      <div>
        <div className="fixed md:w-64">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
