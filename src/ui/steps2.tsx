import React from 'react';
import TutorialCard, { TutorialCardProps } from './TutorialCard';

const Steps: React.FC = () => {
  // Datos para las tarjetas
  const cardData: TutorialCardProps[] = [
    {
      count: "01",
      title: "¿A dónde vamos?",
      text: "Elige tanto tu ciudad de origen y destino, como las fechas de tu viaje",
    },
    // Agrega más tarjetas según tus necesidades
  ];

  return (
    <>
      <section className="grid grid-cols-1 gap-5 py-10 max-sm:px-0">
        <h1 className="col-span-full text-center text-3xl font-bold xl:mb-4">
          Compra tus <br className="md:hidden" /> boletos en{" "}
          <span className="text-primary-600">4 pasos</span>
        </h1>

        {/* Renderizar las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <TutorialCard key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Steps;
