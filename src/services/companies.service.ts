import { ICompany } from "@/models/card.model";
import { HttpClient } from "@/utils/client-http";
// /company
export class CompanyService {
    private httpCliente: HttpClient;

    constructor(){
        this.httpCliente = new HttpClient();
    }

    async findAll(){
        try {
            const coders = this.httpCliente.get<ICompany[]>("company")
            return coders;
        } catch (error) {
            console.error("Error al buscar company", error);
            throw error;
        }
    }

    async destroy(id:string) {
        try {
            const coders = this.httpCliente.delete<ICompany[]>(`company/${id}`)
            return coders;
        } catch (error) {
            console.error("Error al eliminar company", error);
            throw error;
        }
    }

    async create(coder: ICompany) {
        try {
            const newCoder = this.httpCliente.post<string, ICompany>(`company`, coder)
            return newCoder;
        } catch (error) {
            console.error("Error al crear company", error);
            throw error;
        }
    }

    async update(id: string, coder: ICompany) {
        try {
            const updateCoder = this.httpCliente.put<string, ICompany>(`company/${id}`,coder)
            return updateCoder;
        } catch (error) {
            console.error("Error al axtualizar company", error);
            throw error;
        }
    }
}