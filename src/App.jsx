import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Header from "./components/Header"


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default App