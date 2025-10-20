'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IE')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">1. Who We Are</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Village Cafe</strong><br />
                  47 Bridge Street<br />
                  Westport, Co. Mayo<br />
                  F28 XT98
                </p>
                <p className="text-gray-700">
                  Phone: <a href="tel:+35398287 65" className="text-sage-600 hover:underline">+353 98 28765</a><br />
                  Email: <a href="mailto:hello@villagecafe.ie" className="text-sage-600 hover:underline">hello@villagecafe.ie</a>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We're a cozy neighborhood cafe in Westport serving specialty coffee and homemade food since 2015. This Privacy Policy explains how we collect and use your information when you visit our website or contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">2. Information We Collect</h2>

              <h3 className="text-2xl font-semibold mb-3 text-sage-700">2.1 Contact Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contact us or make an inquiry, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Any message or special requests you send us</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-sage-700">2.2 Newsletter Signup</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you subscribe to our newsletter, we collect your email address to send you updates about:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Daily specials and seasonal menu items</li>
                <li>Special events</li>
                <li>News and updates from the cafe</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can unsubscribe at any time using the link in every email.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-sage-700">2.3 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, basic technical information is collected:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Browser type and device information</li>
                <li>Pages you visit on our site</li>
                <li>Time and date of your visit</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This information is collected anonymously and does not identify you personally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Respond to your inquiries and messages</li>
                <li>Send newsletter updates (if you subscribe)</li>
                <li>Provide information about our menu, events, and opening hours</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>We will NEVER:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Sell your personal information</li>
                <li>Share your details with third parties for marketing</li>
                <li>Send you spam or unsolicited emails</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">4. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses these trusted services:
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h4 className="font-semibold mb-2">Website Hosting</h4>
                <p className="text-gray-600 text-sm mb-2"><strong>Cloudflare</strong> - Hosts our website and provides security</p>
                <p className="text-gray-600 text-xs">Privacy Policy: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">cloudflare.com/privacypolicy</a></p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h4 className="font-semibold mb-2">Website Management</h4>
                <p className="text-gray-600 text-sm mb-2"><strong>Connecteire</strong> - Manages and updates our website</p>
                <p className="text-gray-600 text-xs">Privacy Policy: <a href="https://connecteire.ie/privacy" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">connecteire.ie/privacy</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">5. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We keep your information only as long as needed:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Contact form messages:</strong> 6 months</li>
                <li><strong>Newsletter subscriptions:</strong> Until you unsubscribe</li>
                <li><strong>Financial records:</strong> 7 years (legal requirement)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                After these periods, your information is securely deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">6. Your Rights (GDPR)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Ask us to correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request we delete your data ("right to be forgotten")</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Object:</strong> Object to how we process your data</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact us at <a href="mailto:hello@villagecafe.ie" className="text-sage-600 hover:underline font-semibold">hello@villagecafe.ie</a> or call <a href="tel:+353982876 5" className="text-sage-600 hover:underline font-semibold">+353 98 28765</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses minimal cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Essential cookies:</strong> Required for the website to work properly (no consent needed)</li>
                <li><strong>Analytics:</strong> Anonymous visitor statistics to improve our website (privacy-friendly, no personal data)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do NOT use advertising cookies or track you across other websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">8. Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Secure website connection (HTTPS encryption)</li>
                <li>Limited staff access to personal data</li>
                <li>Regular security updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this policy occasionally. The "Last updated" date at the top shows when changes were made. Significant changes will be posted on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-coffee-800">10. Contact Us</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>For privacy questions or data requests:</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Village Cafe<br />
                  Email: <a href="mailto:hello@villagecafe.ie" className="text-sage-600 hover:underline font-semibold">hello@villagecafe.ie</a><br />
                  Phone: <a href="tel:+353982876 5" className="text-sage-600 hover:underline font-semibold">+353 98 28765</a><br />
                  Address: 47 Bridge Street, Westport, Co. Mayo, F28 XT98
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Data Protection Commission (Ireland):</strong><br />
                  If you have concerns about how we handle your data, you can contact:<br />
                  Website: <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">www.dataprotection.ie</a><br />
                  Phone: +353 (0)761 104 800<br />
                  Email: info@dataprotection.ie
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
