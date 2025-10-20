'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #15803d 0%, #84cc16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IE')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By using this website (villagecafe.ie), you agree to these Terms of Service. If you do not agree, please do not use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">2. Website Purpose</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website provides information about Village Cafe, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Opening hours and location</li>
                <li>Our menu including daily specials</li>
                <li>Information about our story and values</li>
                <li>Contact information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">3. Menu & Pricing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Menu items, prices, and availability are subject to change. While we make every effort to keep the website up-to-date:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Daily specials and seasonal items may not always be available</li>
                <li>Prices may change without notice</li>
                <li>We reserve the right to substitute ingredients when necessary</li>
                <li>Dietary information is provided as a guide - please inform staff of any allergies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">4. Allergen Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we make every effort to accommodate dietary requirements:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>We prepare food in a kitchen that handles common allergens (nuts, dairy, gluten, etc.)</li>
                <li>Cross-contamination may occur despite our best efforts</li>
                <li>Please inform our staff of any allergies or dietary requirements when ordering</li>
                <li>We cannot guarantee that any item is completely allergen-free</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you have severe allergies, please speak with our staff before ordering.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">5. Special Events</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We occasionally host special events. Please note:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Event dates and times are subject to change</li>
                <li>We reserve the right to cancel events due to unforeseen circumstances</li>
                <li>Pre-booking may be required for certain events</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">6. Website Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this website (text, photos, logos, design) is owned by Village Cafe or used with permission. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Copy or republish our content without permission</li>
                <li>Use our photos for commercial purposes</li>
                <li>Scrape data from this website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">7. External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to social media or other external sites. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">8. Accuracy of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to keep information accurate and up-to-date, we cannot guarantee that all information on this website is current or error-free. For the most current information, please call us or visit in person.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>This website is provided "as is" without warranties</li>
                <li>We are not liable for any damages arising from use of this website</li>
                <li>We are not responsible for website downtime or technical errors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">10. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of this website is also governed by our <Link href="/privacy" className="text-sage-600 hover:underline font-semibold">Privacy Policy</Link>. Please review it to understand how we collect and use your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. The "Last updated" date at the top will reflect any changes. Continued use of the website indicates acceptance of updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of Ireland. Any disputes will be subject to the exclusive jurisdiction of the Irish courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">13. Contact Us</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  For questions about these Terms, contact us:
                </p>
                <p className="text-gray-700">
                  <strong>Village Cafe</strong><br />
                  47 Bridge Street, Westport, Co. Mayo, F28 XT98<br />
                  Phone: <a href="tel:+353982876 5" className="text-sage-600 hover:underline">+353 98 28765</a><br />
                  Email: <a href="mailto:hello@villagecafe.ie" className="text-sage-600 hover:underline">hello@villagecafe.ie</a>
                </p>
              </div>
            </section>

            <div className="bg-sage-50 border-l-4 border-sage-500 p-6 mt-8">
              <p className="text-gray-700 font-semibold mb-2">Thank you for visiting!</p>
              <p className="text-gray-700">
                We look forward to serving you at Village Cafe. See you soon! ☕
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
