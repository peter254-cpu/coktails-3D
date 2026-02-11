import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Header from "./components/Header"
import Home from "./components/Home"
import Cocktails from "./components/Coktails"
import About from "./components/About"
import Art from "./components/Art"


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default App