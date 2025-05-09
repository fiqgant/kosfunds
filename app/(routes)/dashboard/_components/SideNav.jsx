import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  Briefcase,
  GraduationCap,
  BookOpenCheck,
  LinkIcon,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navigation() {
  const menuList = [
    { id: 1, name: "Dasbor", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Pendapatan", icon: CircleDollarSign, path: "/dashboard/incomes" },
    { id: 3, name: "Anggaran", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 4, name: "Pengeluaran", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 5, name: "Perbarui", icon: ShieldCheck, path: "/dashboard/upgrade" },
    { id: 6, name: "Freelance", icon: Briefcase, path: "/dashboard/freelance" },
    { id: 7, name: "Beasiswa", icon: GraduationCap, path: "/dashboard/scholarships" },
    { id: 8, name: "Edukasi", icon: BookOpenCheck, path: "/dashboard/education" },
    { id: 9, name: "Affiliate", icon: LinkIcon, path: "/dashboard/affiliate" }, // ✅ Menu baru
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div>
      {/* Sidebar Desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:h-screen p-5 border shadow-sm fixed">
        <div className="flex flex-row items-center mb-5">
          <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} />
          <span className="text-blue-800 font-bold text-xl ml-2">Kosfunds</span>
        </div>
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <div
              className={`flex items-center gap-2 p-4 mb-2 rounded-full text-gray-500 hover:bg-blue-100 hover:text-primary cursor-pointer ${
                path === menu.path && "text-primary bg-blue-100"
              }`}
            >
              <menu.icon />
              <span>{menu.name}</span>
            </div>
          </Link>
        ))}
        <div className="absolute bottom-10 left-5 flex items-center gap-2">
          <UserButton />
          <span className="text-gray-700">Profil</span>
        </div>
      </div>

      {/* Navbar Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around p-2 z-50 space-x-0">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <div className="flex flex-col items-center text-gray-500">
              <menu.icon
                className={`w-6 h-6 ${
                  path === menu.path ? "text-blue-700" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  path === menu.path ? "text-blue-700" : "text-gray-500"
                }`}
              >
                {menu.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
