"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import Modal from "../molecules/modal/Modal"; // importa el componente Modal

const BtnAdd: React.FC = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/vacancies") {
      setActiveTab("vacancies");
    } else if (pathname === "/companies") {
      setActiveTab("companies");
    }
  }, [pathname]);

  return (
    <>
      <button
        className={`btn-add ${activeTab === "vacancies" ? "active" : "active2"}`}
        onClick={() => setIsModalOpen(true)}
      >
        <MdAddCircle /> Add {pathname}
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
      />
    </>
  );
};

export default BtnAdd;
