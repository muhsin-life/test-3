import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  h-full w-full">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
