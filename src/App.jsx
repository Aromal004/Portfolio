import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectTimeline from "./components/ProjectTimeline";
import Technologies from "./components/Technologies";

export default function App() {
  return (
  <>
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero/>
        <ProjectTimeline/>
        <div className="m-10 border-t border-white opacity-0 lg:opacity-25"></div>
        <Experience/>
        <div className="m-10 border-t border-white opacity-0 lg:opacity-25"></div>
        <Technologies/>
        <div className="m-10 border-t border-white opacity-0 lg:opacity-25"></div>
        <Contact/>
        <div className="translate-y-20 border-t border-white opacity-0 lg:opacity-25"></div>
        <Footer/>
      </div>
    </div>
  </>
  )
}
