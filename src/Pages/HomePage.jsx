import NavBar from '../Components/NavBar'
import About from '../Components/About'
import Work from '../Components/Work'
import Projects from '../Components/Projects'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container-fluid py-0 bg-dark bg-gradient" style={{margin: "75px 0 0 0px" }}>
      <NavBar />
      <About />
      <Work />
      <Projects />
    </div>
  )
}

export default HomePage;
