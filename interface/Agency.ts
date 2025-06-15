import { ICustomization } from "./Customization"
import { IProperty } from "./Property";
import { IUser } from "./User";
export interface IAgency {
  id: number;
  name: string;
  description: string;
  customization: ICustomization;
  properties: IProperty[]; // Foreign Key a 'Property', asumido como un array de propiedades de la agencia. ID property (FK)
  agentUser: IUser; // Foreign Key a 'User', ID usuario (agente)'.
  cuit_dni_m: string; // CUIT/DNI/Matrícula de la agencia.
}


export interface ICreateAgency {
  name: string;
  description: string;
  customization?: ICustomization;
  agentUserId: number;
  cuit_dni_m: string;
}