import localFont from "next/font/local";
import "@/assets/globals.scss";
import NavbarMain from "@/components/navbar/NavbarMain";
import Footer from "@/components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Automatic Door Supply",
  description:
    "A local company providing door design, door fabrication, door installation, door repair throughout in New York.",
};

const pdfPro = localFont({
  src: [
    {
      path: "../font/pfdindisplaypro-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/pfdindisplaypro-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pdfPro.className}>
        <NavbarMain />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
