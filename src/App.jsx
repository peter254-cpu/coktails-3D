import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Header from "./components/Header"
import Home from "./components/Home"


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <div className="h-dvh bg-black">

      </div>
    </main>
  )
}

export default App