import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full flex-grow px-4 py-6 lg:px-8">
          {children}
        </main>
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
