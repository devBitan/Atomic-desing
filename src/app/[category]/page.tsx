"use client";
import Title from '@/ui/atoms/Title';
import Card from '../../ui/molecules/card/Card';
import Navbar from '@/ui/organisms/Navbar';
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useEffect, useState } from 'react';
import Modal from '@/ui/molecules/modal/Modal';
import { ICompany, IVacant } from '@/models/card.model';
import { CompanyService } from '@/services/companies.service';
import { VacantService } from '@/services/vacancies.service';

interface IProps {
  data?: IVacant | ICompany 
}

const useCompanyService = new CompanyService();

const useVacantService = new VacantService();

const Dashboard: React.FC<IProps> = ({ data }) => {
  const pathname = usePathname(); // capturo la ruta actual
  const [activeTab, setActiveTab] = useState<string>(pathname);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pathname === "/vacancies") {
          setActiveTab("vacancies");
          const vacancies = await useVacantService.findAll();
          setResponse(vacancies);
        } else if (pathname === "/companies") {
          setActiveTab("companies");
          const companies = await useCompanyService.findAll();
          setResponse(companies);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Llamar a la función para realizar las solicitudes
  }, [pathname]);

  // hacer el consumo y enviar por parámetros la data
  return (
    <>
      <Title />
      <Navbar />
      <h1 className="title-dashboard">{pathname}</h1>
      <div className="cards">
        <Card data={response} activeTab={activeTab} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
      />
      <footer className="title">Paginación</footer>
    </>
  );
};

export default Dashboard;
