import Hero from "./sections/Hero"
import MissionUnderstand from "./sections/MissionUnderstand"
import MissionNotice from "./sections/MissionNotice"
import MissionDetect from "./sections/MissionDetect"
import MissionScreening from "./sections/MissionScreening"
import MissionAwareness from "./sections/MissionAwareness"

export default function App() {
  return (
    <main>
      <Hero />
      <MissionUnderstand />
      <MissionNotice />
      <MissionDetect />
      <MissionScreening />
      <MissionAwareness />
    </main>
  )
}