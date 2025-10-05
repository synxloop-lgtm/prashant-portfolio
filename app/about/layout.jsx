import Footer from "@/components/Footer";

export const metadata = {
  title: "Prashant | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
