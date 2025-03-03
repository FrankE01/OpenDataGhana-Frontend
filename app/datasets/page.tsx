import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import PageHeader, {
  PageHeaderText,
  PageHeaderTitle,
} from "@/components/page-header";

const Datasets = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex">
      <AppSidebar />
      <main className="w-full md:px-12">
        <NavBar />
        <PageHeader>
          <PageHeaderTitle displayName="PageHeaderTitle">
            Datasets
          </PageHeaderTitle>
          <PageHeaderText displayName="PageHeaderText">
            Explore curated datasets tailored for Ghanaian-centric machine
            learning and data science projects.
          </PageHeaderText>
        </PageHeader>
        <div className="flex flex-col space-y-12">
          <h1>Dataset Page</h1>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Datasets;
