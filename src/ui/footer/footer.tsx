import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
const Footer = () => {
const t = useTranslations("Index");
  return (
    <footer className="mt-32 flex w-full flex-col gap-6">
      <div className="left-0 top-0 z-40 w-full bg-black py-4">
        Logo de Quatrobus
      </div>
      <section className="grid w-full grid-cols-2 gap-1 sm:grid-cols-2 sm:px-20 md:grid-cols-9 md:gap-4">
    
      </section>
      <div className="col-span-full grid place-items-center bg-primary-500 py-8 text-zinc-300">
        Logo de Quatrobus
        <span className="text-center text-xs">
          Quatrobus © 2023. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
