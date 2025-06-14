"use client"

import React from "react";
import { RegisterSubmit } from "@/services/postRegisterForm";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import registerValidations from "@/components/FormRegister/registerValidations";
import { Formik } from "formik";
import RegisterUserDtoFront from "@/interfaces/registerDto";


const FormRegister: React.FC = () => {
    const router = useRouter()
    const handleOnSubmit = async (values: RegisterUserDtoFront) => {
    try {
        const response = await RegisterSubmit(values);
        if (response?.status === 201) {
            toast.success('¡Usuario registrado! Redirigiendo al Login...', {
                duration: 2000,
            });
            setTimeout(() => {
                router.push('/login');
            }, 2000); // coincide con el timer
        } else {
            toast.error('Dato repetido. Ingresa un valor distinto en Email.', {
                duration: 2000,
            });
        }
    } catch (error) {
        toast.error('Hubo un problema al querer registrarse.', {
            duration: 2000,
        });
        console.log('error en el register:', error);
    }
};

return(
    <>
    <Formik
            initialValues = {{name:"", lastname:"", phone:"", email: '', password: '' }}
            validationSchema={registerValidations}
            onSubmit={handleOnSubmit}
            >
            {({ isSubmitting, values, handleBlur, handleChange, handleSubmit, errors, touched }) => (
            
            <form onSubmit={handleSubmit} className="p-5 flex flex-col items-center justify-center text-black bg-[#FBF2F2]  border-2 overflow-hidden rounded-lg h-[580px]  ">

                <div className="flex flex-col ">
                    <label htmlFor="name" className="mt-5  text-black text-xl ">Nombre:</label>
                    <input  type="text" 
                            id="name" 
                            name="name" 
                            placeholder="JhonDoe" 
                            value={values.name} 
                            onBlur={handleBlur}  
                            onChange={handleChange}
                            className="text-black outline-none focus:outline-none bg-white inputs mt-1  rounded-lg p-1.5"/>
                    <p className="text-xl text-red-500 mb-4">{errors.name && touched.name && errors.name}</p>
                </div>
                
                <div className="flex flex-col ">
                    <label htmlFor="lastname" className=" text-black text-xl ">Apellido:</label>
                    <input  type="text" 
                            id="lastname" 
                            name="lastname" 
                            placeholder="Diaz" 
                            value={values.lastname} 
                            onBlur={handleBlur}  
                            onChange={handleChange}
                            className="text-black outline-none focus:outline-none bg-white inputs mt-1  rounded-lg p-1.5"/>
                    <p className="text-xl text-red-500 mb-4">{errors.lastname && touched.lastname && errors.lastname}</p>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className=" text-black text-xl">Telefono:</label>
                    <input  type="text" 
                            id="phone"  
                            name="phone" 
                            placeholder="3515097178" 
                            value={values.phone}
                            onBlur={handleBlur}  
                            onChange={handleChange}
                            className="text-black outline-none focus:outline-none bg-white inputs mt-1  rounded-lg p-1.5"/>
                    <p className="text-xl text-red-500 mb-4">{errors.phone && touched.phone && errors.phone}</p>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-black text-xl">Email:</label>
                    <input  type="email"
                        id="email"
                        name="email" 
                        value={values.email} 
                        onBlur={handleBlur}  
                        onChange={handleChange}
                        placeholder="EmailExample@gmail.com" 
                        className="text-black outline-none focus:outline-none bg-white inputs mt-1  rounded-lg p-1.5"/>
                    <p className="text-xl text-red-500 mb-4">{errors.email && touched.email && errors.email}</p>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className=" text-black text-xl">Contraseña:</label>
                    <input  type="password" 
                            id="password"
                            name="password" 
                            placeholder="●●●●●●●●●●●" 
                            value={values.password}
                            onBlur={handleBlur}  
                            onChange={handleChange}
                            className="text-black outline-none focus:outline-none bg-white inputs mt-1  rounded-lg p-1.5"/>
                    <p className="text-xl text-red-500 mb-4">{errors.password && touched.password && errors.password}</p>
                </div>

                <button type="submit" disabled={isSubmitting} className="mb-2 pl-4 pr-4 pt-2 pb-2 text-xl text-white bg-[#833444] rounded-lg font-bold w-[200px] hover:bg-blue-950 transition duration-300">Crear cuenta</button>
                
            </form>)}
    </Formik>

    </>
)};

export default FormRegister