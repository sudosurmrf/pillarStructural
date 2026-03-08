import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Award, Users, Target, TrendingUp, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <img src="/PSELogo.png" alt="" className="absolute right-8 top-1/2 -translate-y-1/2 w-64 md:w-80 pointer-events-none select-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">About Us</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built on Precision.<br />Driven by Integrity.</h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Pillar Structural Engineers is a structural engineering firm based in Las Vegas, Nevada, providing specialized engineering solutions with over 20 years of combined industry experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Our Story</h2>
              <h3 className="text-3xl font-bold text-brand-primary mb-6 tracking-tight">Engineering Solutions That Stand the Test of Time</h3>
              <p className="text-brand-secondary leading-relaxed mb-6">
                Pillar Structural Engineers was founded with a clear mission: to deliver precise, code-compliant structural engineering services that bring our clients' visions to life safely and efficiently. What started as a focused practice in signage engineering has grown into a full-service structural firm serving diverse project types.
              </p>
              <p className="text-brand-secondary leading-relaxed mb-6">
                Today, we are dually licensed in Nevada and Iowa, with plans to expand into additional states in the near future. Our team brings deep expertise across signage structures, shade systems, swimming pools, CMU walls, staircase systems, and permit processing.
              </p>
              <p className="text-brand-secondary leading-relaxed mb-6">
                What truly sets our team apart is the depth of our academic and professional credentials. Our engineers hold <strong className="text-brand-primary">Ph.D. degrees</strong> and <strong className="text-brand-primary">Master of Science in Civil Engineering (MSCE)</strong> certifications, bringing an advanced level of analytical rigor and research-driven problem-solving to every project. This academic foundation, combined with decades of practical field experience, ensures that our designs are not only code-compliant but engineered to the highest standard.
              </p>
              <p className="text-brand-secondary leading-relaxed">
                We pride ourselves on fast turnaround times, competitive pricing, and a hands-on approach that keeps our clients informed at every stage of the engineering process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center">
                <Award className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-1">20+</div>
                <p className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Years Experience</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center">
                <Target className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-1">500+</div>
                <p className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Projects Completed</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center">
                <Users className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-1">2</div>
                <p className="text-xs uppercase tracking-widest text-brand-secondary font-medium">States Licensed</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center">
                <GraduationCap className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                <div className="text-2xl font-bold text-brand-primary mb-1">Ph.D. & MSCE</div>
                <p className="text-xs uppercase tracking-widest text-brand-secondary font-medium">Credentialed Engineers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Why Pillar</h2>
            <h3 className="text-3xl font-bold text-brand-primary tracking-tight">What Sets Us Apart</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialized Expertise',
                description: 'We focus on what we do best — signage, shade structures, pools, CMU walls, staircases, and permits. This specialization means faster delivery and deeper knowledge for every project.',
              },
              {
                title: 'Dual-State Licensing',
                description: 'Dually licensed in Nevada and Iowa with active expansion plans. Our PE-stamped documents are accepted by building departments across both states.',
              },
              {
                title: 'Client-First Approach',
                description: 'From initial consultation to final permit approval, we keep communication clear and timelines tight. Your project gets personal attention, not a cookie-cutter process.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm border border-gray-100"
              >
                <CheckCircle2 className="w-8 h-8 text-brand-accent mb-4" />
                <h4 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h4>
                <p className="text-brand-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-brand-primary mb-4 tracking-tight">Ready to Work Together?</h3>
          <p className="text-brand-secondary mb-8">Let's discuss how Pillar Structural Engineers can bring your next project to life.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-accent transition-all"
            >
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="inline-flex items-center gap-2 border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
