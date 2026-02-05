import kushikidLogo from "@/assets/kushikid-logo.png";


const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="w-full flex flex-col">


        {/* Bottom Bar */}
        <div className="w-full bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="h-px w-full bg-border mb-8" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={kushikidLogo}
                  alt="KushiKid"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Contact Link */}
              <div className="flex items-center">
                <a
                  href="mailto:Kushikid@cospin.in"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span>Kushikid@cospin.in</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} KushiKid by Cospin. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
