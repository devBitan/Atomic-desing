"use client"
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import Modal from '../molecules/modal/Modal';

type BtnEditProps = {
    id: number;
};

const BtnEdit: React.FC<BtnEditProps> = ({ id }) => {

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
            <Modal
             isOpen={isModalOpen}
             onClose={() => setIsModalOpen(false)}
             activeTab={activeTab}/>
            <button className='btn-edit' onClick={() => setIsModalOpen(true)}> <FiEdit2/>

            </button>
        </>
    )
}

export default BtnEdit;