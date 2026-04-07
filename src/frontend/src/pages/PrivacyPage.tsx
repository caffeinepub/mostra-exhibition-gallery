import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <MetaTags
        title="Privacy Policy | Mostra Exhibition Gallery"
        description="Read the Privacy Policy of Mostra Exhibition Gallery. Learn how we collect, use, and protect your personal data."
      />
      <PageHero kicker="Legal" title="Privacy Policy" />
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <p className="font-sans-ui text-xs uppercase tracking-[0.15em] text-gold mb-2">
                Last updated: April 2026
              </p>
              <p>
                At Mostra Exhibition Gallery (&quot;Mostra&quot;,
                &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are
                committed to protecting your privacy. This policy explains how
                we handle your personal information when you visit our website
                or interact with our services.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                1. Data We Collect
              </h2>
              <p>We may collect the following information:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>
                  Name, email address, and phone number (via contact and
                  collaboration forms)
                </li>
                <li>Messages and enquiry details you submit</li>
                <li>
                  Technical data such as browser type, IP address, and page
                  visit logs
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                2. How We Use Your Data
              </h2>
              <p>Your information is used to:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Respond to your enquiries and collaboration requests</li>
                <li>Manage our CRM and lead pipeline internally</li>
                <li>
                  Send relevant updates about exhibitions and events (only if
                  you opt in)
                </li>
                <li>Improve our website and user experience</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information with
                third parties.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                3. Data Storage
              </h2>
              <p>
                Your data is stored securely on the Internet Computer
                blockchain, which provides decentralised and tamper-resistant
                storage. We retain your data for as long as it is necessary to
                fulfil the purposes stated above or as required by law.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                4. Third-Party Integrations
              </h2>
              <p>
                We may use third-party services such as WhatsApp (Interakt) to
                follow up on your enquiries. These services operate under their
                own privacy policies. By submitting a form, you acknowledge that
                your contact details may be used to send you a WhatsApp
                notification via our automated system.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for communications at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                6. Contact Us
              </h2>
              <p>
                For any privacy-related queries, please contact us at{" "}
                <a
                  href="mailto:hello@mostra.in"
                  className="text-gold hover:text-foreground transition-colors"
                >
                  hello@mostra.in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
