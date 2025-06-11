import React from "react";
import Image from "next/image";
import Link from "next/link";

const Slider1: React.FC = () => {

    return(
        <>
            <div className="flex p-5 relative w-full h-[253px] bg-[radial-gradient(circle_at_right,_#F5C6C6,_#421424)]">
                <div className="absolute top-0 left-0 z-10 p-4 text-white flex flex-col">
                    <h1 className="text-xl font-bold text-left md:text-2xl lg:text-4xl">Digitalizá tu inmobiliaria con una plataforma moderna y simple de usar</h1>
                    <p className="mt-1">Gestión de propiedades, agenda de visitas, clientes y mas todo desde un solo lugar</p>
                    <Link href="/home" className="ml-6 mt-1 bg-[#A03E56] text-center w-[100px] rounded">COMENZAR</Link>
                </div>
                
                <Image src="/imagenSlider1.png" alt="imagen slider1" width={340} height={500} className="w-[260px] h-[200px] ml-11 object-contain absolute left-26 top-17"/>
            </div>
        </>
)};

export default Slider1