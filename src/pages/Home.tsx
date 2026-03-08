import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  DraftingCompass,
  Ruler,
  HardHat,
  Layout,
  Tent,
  Waves,
  BrickWall,
  Layers,
  FileText,
} from 'lucide-react';
import { SERVICES } from '../data/services';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6" />,
  Tent: <Tent className="w-6 h-6" />,
  Waves: <Waves className="w-6 h-6" />,
  BrickWall: <BrickWall className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-brand-primary h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Ruler className="w-3 h-3" />
            Precision Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary leading-[1.1] mb-6 tracking-tight">
            Engineering the <span className="text-brand-accent">Foundations</span> of Modern Design.
          </h1>
          <p className="text-xl text-brand-secondary mb-10 max-w-lg leading-relaxed">
            Pillar Structural Engineers delivers code-compliant structural solutions for signage, shade structures, pools &amp; spas, CMU walls, staircase systems, permit processing and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-brand-primary text-white px-8 py-4 rounded-sm font-semibold flex items-center gap-2 hover:bg-brand-accent transition-all group">
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all">
              Consultation
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div>
              <div className="text-2xl font-bold text-brand-primary">20+</div>
              <div className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-primary">500+</div>
              <div className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-primary">100%</div>
              <div className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Compliant</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
              alt="Structural Engineering Detail"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-sm border border-gray-100 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-accent/10 rounded-full">
                <DraftingCompass className="w-5 h-5 text-brand-accent" />
              </div>
              <span className="font-bold text-sm">Design Integrity</span>
            </div>
            <p className="text-xs text-brand-secondary">
              Every calculation is verified for maximum safety and aesthetic alignment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight">Specialized Structural Solutions</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/services/${service.slug}`} className="relative h-64 mb-6 overflow-hidden rounded-sm bg-gray-100 flex items-center justify-center block">
                {service.coverImage ? (
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-brand-secondary/30 flex flex-col items-center gap-2">
                    {ICON_MAP[service.iconName]}
                    <span className="text-xs uppercase tracking-widest font-medium">Coming Soon</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 p-3 bg-white shadow-lg rounded-sm">
                  {ICON_MAP[service.iconName]}
                </div>
              </Link>
              <h4 className="text-2xl font-bold mb-3 text-brand-primary group-hover:text-brand-accent transition-colors">
                {service.title}
              </h4>
              <p className="text-brand-secondary leading-relaxed mb-4">
                {service.description}
              </p>
              <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PermitBanner = ({ onInquire }: { onInquire: () => void }) => {
  return (
    <section className="py-12 bg-brand-accent/5 border-y border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-shrink-0 p-4 bg-brand-accent/10 rounded-full">
            <FileText className="w-8 h-8 text-brand-accent" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-brand-primary mb-2">Permit Processing Available</h3>
            <p className="text-brand-secondary leading-relaxed max-w-2xl">
              Need help getting your project approved? We offer optional permit processing with any of our structural engineering services — preparing complete submission packages, coordinating with plan reviewers, and resolving correction letters to get your permits approved faster.
            </p>
          </div>
          <button
            onClick={onInquire}
            className="flex-shrink-0 bg-brand-primary text-white px-6 py-3 rounded-sm font-semibold text-sm hover:bg-brand-accent transition-all whitespace-nowrap"
          >
            Inquire About Permits
          </button>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Consultation', desc: 'We discuss your vision, constraints, and project requirements.' },
    { title: 'Analysis', desc: 'Rigorous structural modeling and load calculations.' },
    { title: 'Design', desc: 'Detailed engineering drawings and material specifications.' },
    { title: 'Certification', desc: 'Final review and stamped professional engineering documents.' }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Our Method</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-8 tracking-tight">A Systematic Approach to Structural Excellence</h3>
            <p className="text-brand-secondary mb-8 text-lg">
              We bridge the gap between architectural vision and physical reality. Our process ensures that even the most daring designs are backed by sound engineering principles.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">{step.title}</h4>
                    <p className="text-sm text-brand-secondary">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-primary p-12 rounded-sm text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <HardHat className="w-12 h-12 text-brand-accent mb-8" />
            <h4 className="text-3xl font-bold mb-6">Ready to start your next project?</h4>
            <p className="text-white/70 mb-8 leading-relaxed">
              Whether it's a complex staircase for a luxury home or a massive pylon sign for a commercial center, we have the expertise to make it stand.
            </p>
            <ul className="space-y-4 mb-10">
              {['Dually Licensed PE in Nevada & Iowa', '20+ Years Of Experience', 'Fast Turnaround Times', 'Competitive Pricing', 'BIM & 3D Modeling'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block w-full text-center bg-white text-brand-primary py-4 font-bold rounded-sm hover:bg-brand-accent hover:text-white transition-all">
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FORMSPREE_ID = 'meerejrv';

const Contact = ({ selectedProjectType, onProjectTypeChange }: { selectedProjectType: string; onProjectTypeChange: (type: string) => void }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-8 tracking-tight">Let's Discuss Your Project</h3>

            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-sm">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">Email Us</h4>
                  <p className="text-brand-secondary">Info@pillarstructural.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-sm">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">Call Us</h4>
                  <p className="text-brand-secondary">(725) 216-4333</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-sm">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">Location</h4>
                  <p className="text-brand-secondary">Las Vegas, NV</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-100">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-brand-accent mb-4" />
                <h4 className="text-2xl font-bold text-brand-primary mb-2">Message Sent!</h4>
                <p className="text-brand-secondary mb-6">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-brand-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Full Name</label>
                    <input name="name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Email Address</label>
                    <input name="email" type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Project Type</label>
                  <select name="projectType" value={selectedProjectType} onChange={(e) => onProjectTypeChange(e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors">
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Permit Processing">Permit Processing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Message</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-primary text-white py-4 font-bold rounded-sm hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/10 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get('projectType') || SERVICES[0]?.title || '';
  const [projectType, setProjectType] = useState(initialType);

  // Scroll to contact if projectType param was in URL (coming from ServiceDetail permit banner)
  React.useEffect(() => {
    if (searchParams.get('projectType')) {
      setSearchParams({}, { replace: true });
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  const handlePermitInquire = () => {
    setProjectType('Permit Processing');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <Services />
      <PermitBanner onInquire={handlePermitInquire} />
      <Process />
      <Contact selectedProjectType={projectType} onProjectTypeChange={setProjectType} />
    </>
  );
};

export default Home;
