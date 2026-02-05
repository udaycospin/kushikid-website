import kushikidLogo from "@/assets/kushikid-logo.png";
import kushikidDevice from "@/assets/kushikid-device.png";

interface HeroProps {
  onJoinWaitlist: () => void;
}

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section className="min-h-[90vh] flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <img 
            src={kushikidLogo} 
            alt="KushiKid" 
            className="h-12 md:h-16 w-auto"
          />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="section-container w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Helping Kids Build Positive Habits — 
                <span className="text-primary"> The Smart Way</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                KushiKid is an AI companion designed to encourage good behaviour, 
                small daily habits, and healthy goal-based rewards — while parents 
                stay fully in control.
              </p>

              <button 
                onClick={onJoinWaitlist}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                <span>👉</span>
                Join the waitlist
              </button>
            </div>

            {/* Device Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-110" />
                <img 
                  src={kushikidDevice} 
                  alt="KushiKid Device" 
                  className="relative w-64 md:w-80 lg:w-96 h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
