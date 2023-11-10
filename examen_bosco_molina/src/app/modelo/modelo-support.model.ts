import { contact } from "./modelo-data-contacts.modelo";
import { modelo_support } from "./modelo-json-contacts.model";
export interface contact_full {
    page?:number
    per_page?:number
    total?:number
    total_pages?:number
    data?: contact[]
    support?:modelo_support[]
}