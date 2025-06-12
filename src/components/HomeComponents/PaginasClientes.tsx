import Image from "next/image";

const clientes = [
  { src: "/InmoPrueba.png", alt: "Logo" },
  { src: "/InmoPrueba.png", alt: "Logo" },
  { src: "/InmoPrueba.png", alt: "Logo" },
];

export default function PaginaClientes() {
  return (
    <section className="py-16 px-6 md:px-16 w-full mx-auto flex flex-col items-center">
      <h2 className="text-[40px] font-bold mb-10  md:ml-[-30rem]">Explorá nuestros clientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {clientes.map((cliente, index) => (
          <div
            key={index}
            className="bg-[#FCEAE5] border-2 border-black rounded-md text-center text-black font-medium flex items-center justify-center w-64 h-40 md:w-72 md:h-52 mx-auto"
          >
            <Image
              src={cliente.src}
              alt={cliente.alt}
              width={270}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}