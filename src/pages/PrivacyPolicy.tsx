import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-brand-primary mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-brand-secondary mb-12">Last updated: March 8, 2026</p>

        <div className="prose prose-brand max-w-none space-y-8 text-brand-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">1. Information We Collect</h2>
            <p>
              Pillar Structural Engineers ("we," "our," or "us") collects information you provide directly to us when you use our website, request a consultation, or contact us. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Name and contact information (email address, phone number)</li>
              <li>Project details and descriptions submitted through our contact form</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about projects, services, and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
