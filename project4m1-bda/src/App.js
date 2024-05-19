import Navbar from "./Navbar.tsx";
import Intro from "./Intro.tsx";
import Time from "./Time.tsx";
import ThingsDoneTogether from "./ThingsDoneTogether.tsx";
import Timeline from "./Timeline.tsx";
import HugBank from "./HugBank.tsx";
import "./App.css";
function App() {
  return (
    <div className="ultimate">
      <Navbar />
      <Intro />
      <Time />
      <ThingsDoneTogether />
      <Timeline />
      <HugBank />
    </div>
  );
}

export default App;
