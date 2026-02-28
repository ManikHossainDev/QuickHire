
import Companies from "@/components/Pages/Home/Companies";
import ExploreByCategory from "@/components/Pages/Home/ExploreByCategory";
import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
      <Companies />
      <div className="py-32">
          <ExploreByCategory />
      </div>
    </section>
  );
};

export default HomePage;
