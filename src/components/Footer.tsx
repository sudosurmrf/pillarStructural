import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (location.pathname === '/') {
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-brand-primary text-white py-16 relative overflow-hidden">
      {/* PSE Logo — decorative, centered, doesn't affect layout */}
      <img
        src="/PSELogo.png"
        alt=""
        className="absolute left-[52%] top-[39%] -translate-x-1/2 -translate-y-1/2 w-84 h-84 object-contain opacity-90 pointer-events-none select-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-12 items-start">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <div className="w-1 h-5 bg-brand-primary rounded-full"></div>
              </div>
              <span className="font-bold text-xl tracking-tighter uppercase">
                Pillar <span className="font-light text-white/60">Structural</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Pillar Structural Engineers is a leading engineering firm dedicated to providing innovative and safe structural solutions for the modern world.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-accent">Quick Links</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><button onClick={() => handleNavClick('/#services')} className="hover:text-white transition-colors">Services</button></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><button onClick={() => handleNavClick('/#process')} className="hover:text-white transition-colors">Our Process</button></li>
                <li><button onClick={() => handleNavClick('/#contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-accent">Legal</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/licensing" className="hover:text-white transition-colors">Licensing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile: show logo centered */}
        <div className="flex md:hidden justify-center mb-8">
          <img src="/PSELogo.png" alt="Pillar Structural Engineers" className="w-72 h-72 object-contain opacity-90" />
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Pillar Structural Engineers. All rights reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
