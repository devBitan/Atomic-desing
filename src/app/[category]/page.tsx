"use client";
import Title from '@/ui/atoms/Title';
import Card from '../../ui/molecules/card/Card';
import Navbar from '@/ui/organisms/Navbar';
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useEffect, useState } from 'react';
import Modal from '@/ui/molecules/modal/Modal';
import { ICompanyRequest } from '@/models/company.model';
import { CompanyService } from '@/services/companies.service';
import { VacantService } from '@/services/vacancies.service';
import { IPageable, IPaginationRequest } from "../../models/pagination.model";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import PageNavigation from '@/ui/molecules/pageNavigation.tsx/PageNavigation';


interface IProps {
  searchParams?: IPaginationRequest | ICompanyRequest
  pagination: IPageable,
}

const useCompanyService = new CompanyService();
const useVacantService = new VacantService();


const Dashboard: React.FC<IProps> = ({  searchParams, pagination }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(pathname);
  const [response, setResponse] = useState<any>([]);
  const [pagina, setPagina] = useState<any>(pagination);

  const router = useRouter();
  const searchParamsHook = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const page = searchParams?.page ? parseInt(searchParams.page.toString()) : 1;

      const serviceMap: {
        [key: string]: () => Promise<any>;
      } = {
        '/vacancies': async () => {
          setActiveTab("vacancies");
          return await useVacantService.findAllWithPagination({ page, size: 6 });
        },
        '/companies': async () => {
          setActiveTab("companies");
          const name = searchParams?.name?.toString() || "";
          return await useCompanyService.findAllWithPagination({ page, size: 6, name });
        }
      };

      try {
        const fetchFunction = serviceMap[pathname as keyof typeof serviceMap];
        if (fetchFunction) {
          const result = await fetchFunction();
          console.log(result);
          setResponse(result);
          setPagina(result.pageable);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pathname, searchParams]);

  const totalPages = response?.totalPages || 0;
  console.log("esto es:", response);

  const currentPage = pagina?.pageNumber + 1 || 1;

  const handleNext = (nextPage: number) => {
    if (nextPage <= totalPages && nextPage > 0) {
      const params = new URLSearchParams(searchParamsHook?.toString());
      params.set('page', nextPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const handlePrevious = (backPage: number) => {
    if (backPage > 0 && backPage <= totalPages) {
      const params = new URLSearchParams(searchParamsHook?.toString());
      params.set('page', backPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <>
      <Title />
      <Navbar />
      <h1 className="title-dashboard">{pathname}</h1>
      <div className="cards">
        <Card data={response} pagination={response.pageable} activeTab={activeTab} />
      </div>
      <footer className="title">
        <PageNavigation
          pagination={pagina}
          totalPages={totalPages}
          onNext={() => handleNext(currentPage + 1)}
          onPrevious={() => handlePrevious(currentPage - 1)}
        />
      </footer>
    </>
  );
};

export default Dashboard;
