import React from "react"
import FormRegister from "./FormRegister";
import NavbarRegister from "@/components/navbarRegister/navbar";

const Register: React.FC = () => {

    return (
        <>
        <NavbarRegister/>
        <div className="flex flex-col items-center justify-center relative w-full bg-[url('/RegisterImg.png')] bg-cover bg-center">
            <FormRegister/>
        </div>
        </>
)};

export default Register

