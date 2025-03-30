import './globals.css';
import { Noto_Sans } from 'next/font/google';

const noto_sans = Noto_Sans({
  weight: '600',
  preload: false,
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto_sans.className}>
      <body className="bg-zinc-900">
        <main>{children}</main>
      </body>
    </html>
  );
}
