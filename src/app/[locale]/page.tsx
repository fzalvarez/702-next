import Steps from "@/ui/steps";
//import Logo from "@/assets/00_logo_702.png?jsx";




import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>test</span>
        <Steps />
      </main>
      <footer></footer>
    </>
  );
}
