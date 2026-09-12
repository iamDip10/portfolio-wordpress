import { useEffect, useState } from "react";
import { useScrollProgress, useIsMobile } from "./hooks/useReveal";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIBuild from "./components/WhatIBuild";
import Architecture from "./components/Architecture";
import PluginLab from "./components/PluginLab";
import Customization from "./components/Customization";
import WebsitePipeline from "./components/WebsitePipeline";
import Ecosystem from "./components/Ecosystem";
import Projects from "./components/Projects";
import CapabilityLab from "./components/CapabilityLab";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Footer, BackToTop } from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const progress = useScrollProgress();
  const isMobile = useIsMobile(860);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-spin" />
        <div className="loader-label">Engineering WordPress…</div>
      </div>
    );
  }

  return (
    <>
      {!isMobile && <CustomCursor />}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <Navbar />
      <Hero />
      <WhatIBuild />
      <Architecture />
      <PluginLab />
      <Customization />
      <WebsitePipeline />
      <Ecosystem />
      <Projects />
      <CapabilityLab />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop progress={progress} />
    </>
  );
}
