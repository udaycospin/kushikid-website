import kushikidDevice from "@/assets/kushikid-device.png";

const Solution = () => {
  return (
    <section className="bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Device Display */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-110" />
              <img 
                src={kushikidDevice} 
                alt="KushiKid Device" 
                className="relative w-56 md:w-72 h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Introducing <span className="text-primary">KushiKid</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A friendly AI companion that makes building good habits fun and rewarding.
              </p>
            </div>

            {/* For Kids */}
            <div className="card-soft border border-border">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">👧</span> For Kids
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Build habits through small daily actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Learn discipline with goals & rewards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Stay motivated with positive behaviour</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Grow consistently over time</span>
                </li>
              </ul>
            </div>

            {/* For Parents */}
            <div className="card-soft border border-border bg-accent/50">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧</span> For Parents
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Approve activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Control rewards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">•</span>
                  <span>Guide progress safely</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
