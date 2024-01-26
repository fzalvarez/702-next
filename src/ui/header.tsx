import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
const Header = () => {
const t = useTranslations("Index");
  return (
    <header>
      <div className="bg-primary-500">Topbar: Contacto + idioma</div>
      <div className="fixed left-0 top-0 z-40 w-full bg-primary-700 py-4">
        <section className="flex items-center justify-center min-[300px]:justify-between">
          {/* Logo que se muestra en disp muy pequeños, centrado. Oculto de 300 a más 
  <button
    className="min-[300px]:hidden"
    onClick$={() => (showMenu.value = true)}
  >
    <span class="sr-only">{t("app.links.home@@Inicio")}</span>
    <Logo
      alt="logo"
      class="max-w-[200px] object-contain duration-500 lg:max-w-xs"
    />
  </button>
  */}

          {/* Logo que se muestra en disp no tan pequeños, centrado. Se muestra de 300 a más */}
          <Link href="/" className="hidden min-[300px]:block">
            <span className="sr-only">{t("app.links.home@@Inicio")}</span>
            Logo
          </Link>

          {/* 
  <button
    onClick$={() => (showMenu.value = true)}
    class="hidden place-items-center text-white min-[300px]:grid md:hidden"
  >
    <IcOutlineMenu class="text-xl" /> 
  </button>
  */}

          {/* Logo que se muestra en disp no tan pequeños, centrado. Se muestra de 300 a más */}
          <div className="hidden items-center gap-3 text-sm text-white md:flex lg:text-base">
            <Link href="/login" className="">
              Home
            </Link>
            <Link href="/login" className="">
              Home
            </Link>
            <Link href="/login" className="">
              Home
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
