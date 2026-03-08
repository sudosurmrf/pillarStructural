import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight, Download, ImageIcon, FileText } from 'lucide-react';
import { SERVICES } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">Service Not Found</h1>
          <Link to="/" className="text-brand-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      {/* Header Banner */}
      <section className="bg-brand-primary text-white py-16 mb-16 relative overflow-hidden">
        <img src="/PSELogo.png" alt="" className="absolute right-8 top-1/2 -translate-y-1/2 w-64 md:w-80 pointer-events-none select-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">{service.description}</p>
            {service.subServices.length > 0 && (
              <div className="flex flex-wrap gap-3 max-w-[60%] md:max-w-[65%]">
                {service.subServices.map((sub) => (
                  <span key={sub} className="px-3 py-1 bg-white/10 rounded-sm text-sm text-white/80">
                    {sub}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Our Work</h2>
        <h3 className="text-3xl font-bold text-brand-primary mb-12 tracking-tight">Past Projects &amp; Designs</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-brand-secondary/30">
                    <ImageIcon className="w-10 h-10" />
                    <span className="text-xs uppercase tracking-widest font-medium">Project Photo</span>
                  </div>
                )}
              </div>
              <h4 className="text-lg font-bold text-brand-primary mb-1">{project.title}</h4>
              <p className="text-sm text-brand-secondary">{project.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Permit Processing Add-On */}
      <section className="py-12 bg-brand-accent/5 border-y border-brand-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-shrink-0 p-4 bg-brand-accent/10 rounded-full">
              <FileText className="w-8 h-8 text-brand-accent" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-brand-primary mb-2">Permit Processing Available</h3>
              <p className="text-brand-secondary leading-relaxed max-w-2xl">
                Need help getting your project approved? We offer optional permit processing with any of our structural engineering services — handling submissions, revisions, and approvals so you can focus on your project.
              </p>
            </div>
            <button
              onClick={() => navigate('/?projectType=Permit+Processing')}
              className="flex-shrink-0 bg-brand-primary text-white px-6 py-3 rounded-sm font-semibold text-sm hover:bg-brand-accent transition-all whitespace-nowrap"
            >
              Inquire About Permits
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-brand-primary mb-4 tracking-tight">Ready to Start Your Project?</h3>
          <p className="text-brand-secondary mb-8">Get in touch to discuss your {service.title.toLowerCase()} needs.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-accent transition-all"
            >
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="/PSEBrochure.pdf"
              download
              className="inline-flex items-center gap-2 border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Back Link */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
