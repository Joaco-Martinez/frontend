import React from "react";
import Image from "next/image";
import { LogIn, HandCoins, Monitor, TrendingUp } from 'lucide-react';

const BodyLanding: React.FC = () => {
    return (

<div className="relative flex flex-col items-center text-left justify-between bg-[#F8E2E1] w-full gap-4 p-4">
 
  <h2 className=" w-full text-center text-xl text-white mt-8 mb-11 pt-1 pb-1 font-bold bg-[#833444] md:text-2xl lg:text-2xl">
    Tu pagína paso a paso
  </h2>

  <div className="flex flex-col mt-10 lg:w-[1200px] gap-4 lg:flex-col">

    {/* Contenedor Step 1 y 2 */}
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">

      {/* Step 1 */}
      <div className="relative flex bg-white w-full max-w-md overflow-hidden shadow-lg shadow-black h-[120px] md:h-[150px] lg:h-[200px] md:max-w-xl lg:max-w-2xl">
        <div className="flex items-center justify-center w-12 bg-[#833444] text-white font-bold text-lg z-10 md:text-2xl lg:text-3xl">
          1
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center z-10">
          <h2 className="text-xl font-bold uppercase text-black md:text-2xl lg:text-2xl">ingresá tus datos</h2>
          <p className="text-sm text-black md:text-xl lg:text-xl">
            Ingresa los datos de tu agencia para acceder a nuestro plan lo más antes posible.
          </p>
        </div>
        <div className="flex items-center justify-center p-2">
          <LogIn size={44} className="text-[#833444] md:size-15 lg:size-18" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative flex bg-white w-full max-w-md overflow-hidden shadow-lg shadow-black h-[120px] md:h-[150px] lg:h-[200px] md:max-w-xl lg:max-w-2xl">
        <div className="flex items-center justify-center w-12 bg-[#833444] text-white font-bold text-lg z-10 md:text-2xl lg:text-3xl">
          2
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center z-10">
          <h2 className="text-xl font-bold uppercase text-black md:text-2xl lg:text-2xl">pagá nuestro plan</h2>
          <p className="text-sm text-black md:text-xl lg:text-xl">
            Paga un pequeño monto de nuestro plan para poder crear tu página web.
          </p>
        </div>
        <div className="flex items-center justify-center p-2">
          <HandCoins size={44} className="text-[#833444] md:size-15 lg:size-18" />
        </div>
      </div>

    </div>

    {/* Contenedor Step 3 y 4 */}
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">

      {/* Step 3 */}
      <div className="relative flex bg-white w-full max-w-md overflow-hidden shadow-lg shadow-black h-[120px] md:h-[150px] lg:h-[200px] md:max-w-xl lg:max-w-2xl">
        <div className="flex items-center justify-center w-12 bg-[#833444] text-white font-bold text-lg z-10 md:text-2xl lg:text-3xl">
          3
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center z-10">
          <h2 className="text-xl font-bold uppercase text-black md:text-2xl lg:text-2xl">crea tu página</h2>
          <p className="text-sm text-black md:text-xl lg:text-xl">
            Diseñá tu propia página web inmobiliaria de forma fácil y rápida. Mostrá tus propiedades y destacá tu agencia como nunca antes.
          </p>
        </div>
        <div className="flex items-center justify-center p-2">
          <Monitor size={44} className="text-[#833444] md:size-15 lg:size-18" />
        </div>
      </div>

      {/* Step 4 */}
      <div className="relative flex bg-white w-full max-w-md overflow-hidden shadow-lg shadow-black h-[120px] md:h-[150px] lg:h-[200px] md:max-w-xl lg:max-w-2xl">
        <div className="flex items-center justify-center w-12 bg-[#833444] text-white font-bold text-lg z-10 md:text-2xl lg:text-3xl">
          4
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center z-10">
          <h2 className="text-xl font-bold uppercase text-black md:text-2xl lg:text-2xl">compite con otras agencias</h2>
          <p className="text-sm text-black md:text-xl lg:text-xl">
            Subí en el ranking y ganá visibilidad según tus visitas y propiedades publicadas.
          </p>
        </div>
        <div className="flex items-center justify-center p-2">
          <TrendingUp size={44} className="text-[#833444] md:size-15 lg:size-18" />
        </div>
      </div>

    </div>

  </div>

{/* parte 2 */}
    

      {/* Título */}
      <h2 className="w-full text-center text-xl text-white mt-11 mb-11 pt-1 pb-1 font-bold bg-[#833444] md:text-2xl lg:text-2xl">
        ¿Qué ofrecemos en KasApp?
      </h2>
    <div className="flex flex-col items-center mb-11 mt-10 shadow-lg bg-white shadow-black justify-between lg:w-[1200px] gap-4 p-4 rounded-2xl">
      

      {/* Contenedor principal */}
      <div className="flex flex-col items-center gap-4 lg:flex-row bg-white lg:items-center md:justify-between lg:w-[1200px] lg:justify-evenly  ">

        {/* Imagen */}
        <div className=" w-full max-w-sm lg:mb-11 shadow-lg  shadow-black lg:w-[1500px] rounded-xl">
          <Image 
            src="/agenteInmobiliario.png" // reemplazá por tu imagen o static path
            alt="Agente inmobiliario usando laptop"
            width={900}
            height={300}
            className=" object-cover shadow-lg  lg:h-[390px] lg:w-[900px] rounded-xl"
          />
        </div>

        {/* Texto / info */}
        <div className="flex flex-col gap-4 w-full max-w-2xl bg-white  rounded ">
          
          <div>
            <h2 className="text-lg text-center text-white font-bold bg-[#833444] p-1 md:text-xl lg:text-2xl">
              Tu web inmobiliaria
            </h2>
            <p className="text-sm md:text-base mt-2 font-semibold text-center lg:text-xl text-black">
              Muchos agentes solo usan sus redes sociales para mostrar sus propiedades. 
              Con KasApp podés tener tu propia página web profesional.
            </p>
          </div>

        <div className="flex flex-row">

        
        <div className="flex flex-col m-2">

          <h2 className="text-lg text-center text-white font-bold bg-[#833444] p-1 md:text-xl lg:text-2xl">
            Fácil de usar
          </h2>
          <p className="text-sm md:text-base mt-2 font-semibold lg:text-xl text-black ml-2">
            Elegís tus colores preferidos, ponés tu logo, cargás tus propiedades y listo.
            Todo desde un panel simple, podés cambiar lo que quieras en tu web cuando lo necesites.
          </p>
            </div>

          <div className="flex flex-col m-2">

          <h2 className="text-lg text-center text-white font-bold bg-[#833444] p-1 md:text-xl lg:text-2xl">
            Profesional
          </h2>
          <p className="text-sm md:text-base mt-2 font-semibold lg:text-xl text-black ml-2">
            Con KasApp, cualquier agente o inmobiliaria chica puede tener una web de calidad,
            igual que las grandes empresas. Rápido, ordenado y con toda tu info bien presentada.
          </p>
          </div>
            </div>
        </div>

      </div>
    </div>

</div>


)};

export default BodyLanding;