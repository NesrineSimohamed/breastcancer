import Header from "./sections/Header";
import Hero from "./sections/Hero";
import MissionUnderstand from "./sections/MissionUnderstand";
import MissionNotice from "./sections/MissionNotice";
import MissionDetect from "./sections/MissionDetect";
import MissionScreening from "./sections/MissionScreening";
import MissionAwareness from "./sections/MissionAwareness";
import FinalQuiz from "./sections/FinalQuiz";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MissionUnderstand />
        <MissionNotice />
        <MissionDetect />
        <MissionScreening />
        <MissionAwareness />
        <FinalQuiz />
      </main>
      <Footer />
    </>
  );
}
