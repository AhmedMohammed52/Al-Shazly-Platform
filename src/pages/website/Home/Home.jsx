import ArabicShowcase from "./sections/ArabicShowcase";
import ContactSection from "./sections/ContactSection";
import FAQSection from "./sections/FAQSection";
import HeroSection from "./sections/HeroSection";
import LearningStagesSection from "./sections/LearningStagesSection";
import TeachingMethodSection from "./sections/TeachingMethodSection";
// import LibrarySection from "./sections/LibrarySection";
import TeacherIntroSection from "./sections/TeacherIntroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <TeacherIntroSection />
      <LearningStagesSection />
      <TeachingMethodSection />
      {/* <LibrarySection /> */}
      <ArabicShowcase />
      <FAQSection />
      <ContactSection />
    </>
  );
}

export default Home;
