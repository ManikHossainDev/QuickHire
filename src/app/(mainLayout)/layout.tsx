import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section >
      <div className="">
        <Header />
      </div>
      <div className="px-2 md:px-4 xl:px-0">
        {children}
      <Footer />
      </div>
    </section>
  );
};

export default MainLayout;
