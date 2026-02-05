interface CTASectionProps {
  onJoinWaitlist: () => void;
}

const CTASection = ({ onJoinWaitlist }: CTASectionProps) => {
  return (
    <section className="bg-primary">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Start your child's positive habit journey
        </h2>
        
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Be among the first parents to give your child the gift of good habits.
        </p>
        
        <button 
          onClick={onJoinWaitlist}
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-secondary-light transition-colors"
        >
          <span>👉</span>
          Join the waitlist
        </button>
      </div>
    </section>
  );
};

export default CTASection;
