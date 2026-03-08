import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-brand-primary mb-2 tracking-tight">Terms of Service</h1>
        <p className="text-brand-secondary mb-12">Last updated: March 8, 2026</p>

        <div className="prose prose-brand max-w-none space-y-8 text-brand-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Pillar Structural Engineers website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">2. Services</h2>
            <p>
              Pillar Structural Engineers provides structural engineering services including, but not limited to, signage structures, shade cover structures, swimming pools and spas, exterior CMU walls and fences, staircase systems, and permit processing. All services are subject to separate written agreements between Pillar Structural Engineers and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Infringe the rights of any third party</li>
              <li>Restrict or inhibit any other user from using the website</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Introduce viruses, malware, or other harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, and software — is the property of Pillar Structural Engineers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">5. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided "as is" without warranties of any kind, either express or implied. Pillar Structural Engineers does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall Pillar Structural Engineers be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use this website. This limitation applies regardless of the theory of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">7. Professional Services Disclaimer</h2>
            <p>
              Information provided on this website is for general informational purposes only and does not constitute professional engineering advice. Specific structural engineering services require a formal engagement and are governed by separate professional service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Nevada, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-primary mb-3">10. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
