import {useTranslations} from 'next-intl';

export default function AboutUs() {
  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>about us</span>
    </main>
  );
}
