"use client"
import Link from 'next/link';
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { BsBuildings } from "react-icons/bs";
import { BsSuitcaseLg } from "react-icons/bs";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const pathname = usePathname(); // capturo la ruta actual

  useEffect(() => { //  pestaña activa dependiendo de la ruta actual
    if (pathname === "/vacancies") {
      setActiveTab("vacancies");
    } else if (pathname === "/companies") {
      setActiveTab("companies");
    }
  }, [pathname]); // Dependencia del pathname (cada vez que cambie )

  return (
    <div className="tabs">
      <Link href="/vacancies">
        <button
          className={`tab ${activeTab === "vacancies" ? "active" : ""
            }`}
          onClick={() => setActiveTab("vacancies")}
        >
           <h3>  <BsSuitcaseLg />  </h3> Vacancies
        </button>
      </Link>
      <Link href="./companies">
        <button
          className={`tab ${activeTab === "companies" ? "active2" : ""
            }`}
          onClick={() => setActiveTab("companies")}
        >
          <span><BsBuildings /></span> Companies
        </button>
      </Link>
    </div>
  );
};

export default Tabs;
