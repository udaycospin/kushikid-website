import arjunImage from "@/assets/arjun-ideal-kid.png";
import raguImage from "@/assets/ragu-lazy-kid.png";

const ProblemStory = () => {
  return (
    <section className="bg-muted">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Modern Day Parenting Challenge
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every child has potential — they just need the right system to unlock it.
          </p>
        </div>

        {/* Split Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Arjun - Ideal Kid */}
          <div className="card-soft border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary/20 overflow-hidden mb-6">
                <img 
                  src={arjunImage} 
                  alt="Arjun - A motivated child" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">
                Meet Arjun
              </h3>
              
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-center gap-2 justify-center">
                  <span className="text-secondary">✓</span> Always completes tasks
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="text-secondary">✓</span> Has healthy routines
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="text-secondary">✓</span> Feels motivated and confident
                </li>
              </ul>
              
              <p className="text-sm text-foreground font-medium bg-accent px-4 py-2 rounded-xl">
                Arjun grows through small habits, daily goals, and positive reinforcement.
              </p>
            </div>
          </div>

          {/* Ragu - Lazy Kid */}
          <div className="card-soft border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted overflow-hidden mb-6">
                <img 
                  src={raguImage} 
                  alt="Ragu - A distracted child" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-muted-foreground mb-3">
                Meet Ragu
              </h3>
              
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-center gap-2 justify-center">
                  <span className="text-destructive/60">✗</span> Avoids routines
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="text-destructive/60">✗</span> No structure
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="text-destructive/60">✗</span> Easily distracted
                </li>
              </ul>
              
              <p className="text-sm text-foreground font-medium bg-muted px-4 py-2 rounded-xl">
                Ragu struggles without guidance, consistency, and motivation.
              </p>
            </div>
          </div>
        </div>

        {/* Connecting Message */}
        <div className="text-center">
          <div className="inline-block bg-card px-8 py-4 rounded-2xl shadow-sm border border-border">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              Most kids aren't lazy — they just need the 
              <span className="text-primary"> right system</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStory;
