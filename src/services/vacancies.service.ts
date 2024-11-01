import { IVacant, IBasicVacant, IContentVacant } from "../models/vacant.model";
import { IPaginationRequest } from "@/models/pagination.model";
import { HttpClient } from "../utils/client-http";

export class VacantService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAllWithPagination({page, size}: IPaginationRequest){
        try {
            const vacants = await this.httpClient.get<IVacant>(`vacants?page=${page}&size=${size}`)
            return vacants;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener las compañías");
        }
    }

    async create(vacant: IBasicVacant){
        try {
            const newVacant = await this.httpClient.post<IContentVacant, IBasicVacant>("vacants", vacant)
            return newVacant;
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear la vacante");
        }
    }

    async update(id: string, vacant: IBasicVacant){
        try {
            const updatedVacant = await this.httpClient.put<IContentVacant, IBasicVacant>(`vacants/${id}`, vacant)
            return updatedVacant;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar la vacante");
        }
    }

    async destroy(id: string){
        try {
            const vacant = await this.httpClient.delete(`vacants/${id}`)
            return vacant;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar la vacante");
        }
    }
}