
export interface IAppointment {
  id: number;
  day: string; 
  time: string; 
  name: string; 
  surname: string; 
  email: string; 
  phone: string; 
}

export interface ICreateAppointment {
  day: string;
  time: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
}