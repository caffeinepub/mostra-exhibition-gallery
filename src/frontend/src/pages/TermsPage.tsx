import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export default function TermsPage() {
  return (
    <>
      <MetaTags
        title="Terms & Conditions | Mostra Exhibition Gallery"
        description="Read the Terms and Conditions of Mostra Exhibition Gallery. Understand the rules governing your use of our website and services."
      />
      <PageHero kicker="Legal" title="Terms & Conditions" />
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <p className="font-sans-ui text-xs uppercase tracking-[0.15em] text-gold mb-2">
                Last updated: April 2026
              </p>
              <p>
                By accessing and using the Mostra Exhibition Gallery website
                (&quot;Site&quot;), you agree to be bound by these Terms and
                Conditions. Please read them carefully before using our Site.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                1. Use of the Site
              </h2>
              <p>
                You agree to use this Site only for lawful purposes. You must
                not:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Misuse or interfere with the Site or its infrastructure</li>
                <li>Impersonate any person or misrepresent your affiliation</li>
                <li>Transmit any harmful, obscene, or unlawful content</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                2. Intellectual Property
              </h2>
              <p>
                All content on this Site — including artworks, photographs,
                text, logos, and layout — is the property of Mostra Exhibition
                Gallery or its respective artists and licensors. You may not
                reproduce, distribute, or create derivative works without
                explicit written permission.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                3. Exhibitions & Services
              </h2>
              <p>
                Information about exhibitions, services, and events is provided
                for general informational purposes and may be subject to change.
                Mostra reserves the right to modify, reschedule, or cancel any
                exhibition or event without prior notice.
              </p>
              <p className="mt-3">
                Enquiries submitted through the website do not constitute a
                binding agreement. All collaborations and commissions are
                subject to a separate written contract.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                4. Limitation of Liability
              </h2>
              <p>
                Mostra Exhibition Gallery shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of
                this Site or our services. We provide this Site &quot;as
                is&quot; without warranties of any kind.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                5. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of Gujarat, India. Any
                disputes shall be subject to the exclusive jurisdiction of the
                courts in Rajkot, Gujarat.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl font-bold text-foreground uppercase mb-3">
                6. Contact
              </h2>
              <p>
                For any queries regarding these terms, contact us at{" "}
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
