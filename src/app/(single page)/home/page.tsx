import Section1 from '@/components/HomeComponents/section1';
import Caracteristicas from '@/components/HomeComponents/Caracteristicas';
import PaginaClientes from '@/components/HomeComponents/PaginasClientes';
import PlanPago from '@/components/HomeComponents/PlanPago';
export default function Home() {
  return (
      <div>
    <div>
      <Section1 />
    </div>
      <div className='bg-gradient-to-b from-[#E2D2D2] to-white'>
      <Caracteristicas />
      <PaginaClientes />
      </div>
      <PlanPago />
    </div>
);
}