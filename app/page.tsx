import AboutSection from "@/components/about-section";
import { AppSidebar } from "@/components/app-sidebar";
import Banner from "@/components/banner";
import NavBar from "@/components/nav-bar";
import PopularCategoriesSection from "@/components/popular-categories-section";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex">
      <AppSidebar />
      <main className="w-full md:px-12">
        <NavBar />
        <Banner />
        <div className="flex flex-col space-y-12">
          <AboutSection />
          <PopularCategoriesSection />
        </div>
      </main>
    </div>
  );
}
