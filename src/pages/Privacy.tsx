
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Legal"
            title="Privacy Policy"
            subtitle="Effective Date: June 1, 2023. Last Updated: May 15, 2023."
          />
          
          <div className="max-w-4xl mx-auto mt-16 prose prose-sm dark:prose-invert">
            <div className="mb-10">
              <p>
                At Processimo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI agent platform. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
              </p>
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <h3 className="font-semibold">1.1 Personal Data</h3>
                  <p>
                    We may collect personal information that you voluntarily provide when using our platform, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name, email address, and contact information</li>
                    <li>Billing information and payment details</li>
                    <li>Company information</li>
                    <li>Account preferences and settings</li>
                    <li>Communications with our support team</li>
                  </ul>
                  
                  <h3 className="font-semibold">1.2 Usage Data</h3>
                  <p>
                    We automatically collect certain information when you visit, use or navigate our platform. This information may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Device and connection information</li>
                    <li>Browser and operating system details</li>
                    <li>IP address and approximate location</li>
                    <li>Pages viewed and platform usage patterns</li>
                    <li>Referring websites or sources</li>
                  </ul>
                  
                  <h3 className="font-semibold">1.3 User Content</h3>
                  <p>
                    When using our AI agent platform, you may upload, create, or share content that is used to train or operate your AI agents. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Documents, files, and data you upload</li>
                    <li>Instructions and parameters for AI agents</li>
                    <li>Workflow configurations</li>
                    <li>Outputs generated by AI agents</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>We use the information we collect for various business purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Providing and maintaining our platform services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Training and operating your AI agents based on your instructions</li>
                    <li>Improving and personalizing your user experience</li>
                    <li>Communicating with you about your account or our services</li>
                    <li>Analyzing usage patterns to enhance platform performance</li>
                    <li>Ensuring the security and integrity of our platform</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>We may share your information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party vendors, service providers, and partners who perform services on our behalf.</li>
                    <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
                    <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
                    <li><strong>AI Model Providers:</strong> When you use specific AI models through our platform, limited data may be processed by the respective AI model providers according to their terms of service.</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">5. Your Data Protection Rights</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The right to access personal data we hold about you</li>
                    <li>The right to request correction or deletion of your personal data</li>
                    <li>The right to object to processing of your personal data</li>
                    <li>The right to request restriction of processing your personal data</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">6. Children's Privacy</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    Our platform is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    If you have questions or comments about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p>
                    Email: <a href="mailto:processimo.ai@gmail.com" className="text-primary hover:underline">processimo.ai@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
