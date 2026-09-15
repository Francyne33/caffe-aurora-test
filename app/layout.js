import "./globals.css";

export const metadata = {
  title: "Caffè Aurora — Il calore del buon caffè",
  description:
    "Caffè Aurora: torrefazione artigianale, miscele calde e avvolgenti fatte con passione.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
