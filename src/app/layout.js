import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto w-full px-4 py-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
