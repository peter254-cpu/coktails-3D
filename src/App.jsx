import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Header from "./components/Header"
import Home from "./components/Home"
import Cocktails from "./components/Coktails"
import About from "./components/About"


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Cocktails />
      <About />
    </main>
  )
}

export default App