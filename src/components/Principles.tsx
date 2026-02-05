const principles = [
  {
    icon: "🎯",
    title: "One goal at a time",
    description: "Focus leads to real progress"
  },
  {
    icon: "📅",
    title: "Small daily tasks",
    description: "Tiny steps create big changes"
  },
  {
    icon: "⭐",
    title: "Positive rewards only",
    description: "Encouragement over punishment"
  },
  {
    icon: "🔒",
    title: "Parent controlled",
    description: "You're always in charge"
  },
  {
    icon: "🌱",
    title: "Long-term habits",
    description: "Building character for life"
  }
];

const Principles = () => {
  return (
    <section className="bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Simple Principles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            KushiKid follows proven methods that parents and child experts trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="card-soft border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className="font-bold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
