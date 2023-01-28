import styles from "./style"
import Hero from "./components/Hero"
import { About, CTA, Services, Footer} from "./components"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-dimGreen ${styles.flexStart} h-full`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
        </div>
      </div>


      <CTA />

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App
