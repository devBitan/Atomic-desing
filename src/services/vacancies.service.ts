import { IVacant } from "@/models/card.model";
import { HttpClient } from "@/utils/client-http";
// /vacancies
export class VacantService {
    private httpCliente: HttpClient;

    constructor() {
        this.httpCliente = new HttpClient();
    }

    async findAll() {
        try {
            const coders = this.httpCliente.get<IVacant[]>("vacancies")
            return coders;
        } catch (error) {
            console.error("Error al buscar vacancies", error);
            throw error;
        }
    }

    async destroy(id: string) {
        try {
            const coders = this.httpCliente.delete<IVacant[]>(`vacancies/${id}`)
            return coders;
        } catch (error) {
            console.error("Error al eliminar vacancies", error);
            throw error;
        }
    }

    async create(coder: IVacant) {
        try {
            const newCoder = this.httpCliente.post<string, IVacant>(`vacancies`, coder)
            return newCoder;
        } catch (error) {
            console.error("Error al crear vacancies", error);
            throw error;
        }
    }

    async update(id: string, coder: IVacant) {
        try {
            const updateCoder = this.httpCliente.put<string, IVacant>(`vacancies/${id}`, coder)
            return updateCoder;
        } catch (error) {
            console.error("Error al axtualizar vacancies", error);
            throw error;
        }
    }
}