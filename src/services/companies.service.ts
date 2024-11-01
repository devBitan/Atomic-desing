import { ICompany, ICompanyRequest, IBasicCompany, IContent} from "../models/company.model";
import { HttpClient } from "../utils/client-http";

export class CompanyService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAllWithPagination({page, size, name}:ICompanyRequest){
        try {
            const companies = await this.httpClient.get<ICompany>(`company?page=${page}&size=${size}&name=${name || ""}`)
            return companies;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener las compañías");
        }
    }

    async findAll(){
        try {
            const companies = await this.httpClient.get<IContent[]>(`company/all`)
            return companies;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener las compañías");
        }
    }

    async create(company: IBasicCompany){
        try {
            const newCompany = await this.httpClient.post< IContent, IBasicCompany>(`company`, company)
            return newCompany;
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear la compañía");
        }
    }

    async update(id: string, company: IBasicCompany){
        try {
            const updatedCompany = await this.httpClient.put<IContent, IBasicCompany>(`company/${id}`, company)
            return updatedCompany;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar la compañía");
        }
    }

    async destroy(id: string){
        try {
            const company = await this.httpClient.delete(`company/${id}`)
            return company;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar la compañía");
        }
    }
}