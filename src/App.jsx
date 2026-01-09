import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/home/home.jsx";
import HowItWorks from "./pages/home/HowItWorks.jsx";
import PopularCategories from "./pages/home/PopularCategories.jsx";
import TrainerCompanyCTA from "./pages/home/TrainerCompanyCTA.jsx";
import WhyChooseVMS from "./pages/home/WhyChoose.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
import HireFromUs from "./pages/hireFormUs/HireUS.jsx";
import AboutUs from "./pages/aboutUs/AboutHero.jsx";
import WhoWeAre from "./pages/aboutUs/WhoWeAre.jsx";
import WhatWeProvide from "./pages/aboutUs/WhatWeProvide.jsx";
import HowVMSWorks from "./pages/aboutUs/HowVMSWorks.jsx";
import TrustTransparency from "./pages/aboutUs/TrustTransparency.jsx";
import HowHiringWorks from "./pages/hireFormUs/HowHiringWorks.jsx";
import WhyChooseUs from "./pages/aboutUs/WhyChooseUs.jsx";
import OurTeam from "./pages/aboutUs/ourTeam.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import FindJobs from "./pages/jobs/Findjobs.jsx";
import PostJobForm from "./pages/hireFormUs/PostJobForm.jsx";
import CreateTrainerProfile from "./pages/joinUs/CreateTrainerProfile.jsx";
import CompanyRegistration from "./pages/joinUs/CompanyRegistration.jsx";



// const FindJobs = () => <div className="p-20 text-center">Find Jobs Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <HowItWorks />
              <PopularCategories />
              <WhyChooseVMS />
              <TrainerCompanyCTA />
            </>
          }
        />

        {/* OTHER ROUTES */}
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/hire-from-us" element={<HireFromUs />} />
        <Route
          path="/about-us"
          element={
            <>
              <AboutUs />
              <WhoWeAre/>
              <WhatWeProvide />
              <HowVMSWorks/>
              <TrustTransparency/>
              <WhyChooseUs/>
              <OurTeam/>
            </>
          }
        />
        <Route path="/find-jobs" element={<FindJobs />} />


        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/postJob-form" element={<PostJobForm />} />
        <Route path="/TrainerProfile" element={<CreateTrainerProfile />} />
        <Route path="/CompanyRegistration" element={<CompanyRegistration />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
