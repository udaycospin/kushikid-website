import { useState } from "react";
import Hero from "@/components/Hero";
import ProblemStory from "@/components/ProblemStory";
import Solution from "@/components/Solution";
import Principles from "@/components/Principles";
import WhyItWorks from "@/components/WhyItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setWaitlistOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Hero onJoinWaitlist={handleJoinWaitlist} />
      <ProblemStory />
      <Solution />
      <Principles />
      <WhyItWorks />
      <CTASection onJoinWaitlist={handleJoinWaitlist} />
      <Footer />
      
      <WaitlistModal 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
      />
    </main>
  );
};

export default Index;
