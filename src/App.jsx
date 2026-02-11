import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Header from "./components/Header"
import Home from "./components/Home"
import Cocktails from "./components/Coktails"


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Cocktails />
    </main>
  )
}

export default App