"use client"
import { ICompany } from "@/models/company.model";
import { IVacant } from "@/models/vacant.model";
import { VacantService } from "@/services/vacancies.service";
import { useRouter } from 'next/navigation';
import { RiDeleteBinLine } from "react-icons/ri";

type BtnDeleteProps = {
    id:string
};
const useVacantService = new VacantService();

const BtnDelete: React.FC<BtnDeleteProps> = ({ id }) => {

    const router = useRouter();

    const handleDelete = async (id: string) => {
        const isConfirmed = confirm("¿Estás seguro que deseas borrar la vacante?");
        if(!isConfirmed) return;
        try {
          await useVacantService.destroy(id);
          console.log("Vacante eliminada");
          router.refresh();
        } catch (error) {
          console.log("Error al eliminar la vacante", error);
        }
      };
    return (
        <>
            <button className='btn-delete' onClick={() => handleDelete(id.toString())}> <RiDeleteBinLine /></button>
        </>
    )
}

export default BtnDelete;