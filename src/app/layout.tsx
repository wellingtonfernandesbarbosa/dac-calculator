import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Calculadora - Doce Arte Confeitaria",
  description: "Calculadora de Doce Arte Confeitaria"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
