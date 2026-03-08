import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const Licensing = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-brand-primary mb-2 tracking-tight">Licensing</h1>
        <p className="text-brand-secondary mb-12">Professional Engineering Credentials</p>

        <div className="prose prose-brand max-w-none space-y-8 text-brand-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">Professional Engineering License</h2>
            <p>
              Pillar Structural Engineers is a dually licensed professional engineering firm, holding active Professional Engineer (PE) licenses in both <strong className="text-brand-primary">Nevada</strong> and <strong className="text-brand-primary">Iowa</strong>. This focused licensing allows us to provide deep expertise and dedicated service to clients in these states, with plans to expand to additional states in the near future.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">Capabilities</h2>
            <ul className="space-y-3 mt-3">
              {[
                'Stamped and sealed structural engineering drawings',
                'Structural calculations and analysis reports',
                'Building permit submission packages',
                'Plan check correction responses',
                'Special inspection coordination',
                'Structural observation reports',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">Code Compliance</h2>
            <p>
              All structural designs produced by Pillar Structural Engineers comply with the latest applicable building codes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>International Building Code (IBC)</li>
              <li>International Residential Code (IRC)</li>
              <li>American Concrete Institute (ACI) Standards</li>
              <li>American Institute of Steel Construction (AISC) Standards</li>
              <li>American Wood Council (AWC) National Design Specification</li>
              <li>The Masonry Society (TMS) Building Code Requirements</li>
              <li>ASCE 7 — Minimum Design Loads and Associated Criteria</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">Insurance</h2>
            <p>
              Pillar Structural Engineers maintains professional liability insurance (Errors &amp; Omissions) and general liability insurance to protect our clients and their projects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">Verify Our Credentials</h2>
            <p>
              For questions about our licensing, credentials, or to request proof of insurance, please contact us:
            </p>
            <p className="mt-3">
              <strong className="text-brand-primary">Pillar Structural Engineers</strong><br />
              Las Vegas, NV<br />
              Email: Info@pillarstructural.com<br />
              Phone: (725) 216-4333
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
