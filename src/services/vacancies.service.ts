import { IVacant } from "@/models/card.model";
import { HttpClient } from "@/utils/client-http";
// /vacants
export class VacantService {
    private httpCliente: HttpClient;

    constructor() {
        this.httpCliente = new HttpClient();
    }

    async findAll() {
        try {
            const coders = this.httpCliente.get<IVacant[]>("vacants")
            return coders;
        } catch (error) {
            console.error("Error al buscar vacants", error);
            throw error;
        }
    }

    async destroy(id: string) {
        try {
            const coders = this.httpCliente.delete<IVacant[]>(`vacants/${id}`)
            return coders;
        } catch (error) {
            console.error("Error al eliminar vacants", error);
            throw error;
        }
    }

    async create(coder: IVacant) {
        try {
            const newCoder = this.httpCliente.post<string, IVacant>(`vacants`, coder)
            return newCoder;
        } catch (error) {
            console.error("Error al crear vacants", error);
            throw error;
        }
    }

    async update(id: string, coder: IVacant) {
        try {
            const updateCoder = this.httpCliente.put<string, IVacant>(`vacants/${id}`, coder)
            return updateCoder;
        } catch (error) {
            console.error("Error al axtualizar vacants", error);
            throw error;
        }
    }
}