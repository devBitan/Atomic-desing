"use client"
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import Modal from '../molecules/modal/Modal';
import { IVacant } from '@/models/vacant.model';
import { ICompany } from '@/models/company.model';

type BtnEditProps = {
  item?:IVacant | ICompany,
};

const BtnEdit: React.FC<BtnEditProps> = ({ item }) => {

    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    

    useEffect(() => {
      console.log(item)
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
             activeTab={activeTab}
             data={item}/>
            <button className='btn-edit' onClick={() => setIsModalOpen(true)}> <FiEdit2/>
            </button>
        </>
    )
}

export default BtnEdit;