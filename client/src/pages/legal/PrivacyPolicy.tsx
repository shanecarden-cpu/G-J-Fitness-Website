import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-silver-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-silver-600 mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          GJ Fitness for Life ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Fill out forms on our website, including contact forms</li>
          <li>Sign up for a membership</li>
          <li>Subscribe to our newsletter</li>
          <li>Participate in promotions or surveys</li>
          <li>Contact our customer service</li>
        </ul>
        <p className="mb-4">
          The personal information we collect may include:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Name, email address, phone number, and address</li>
          <li>Payment information</li>
          <li>Demographic information</li>
          <li>Health and fitness information</li>
        </ul>
        <p className="mb-4">
          We may also automatically collect certain information when you visit our website, such as:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Browsing behavior</li>
          <li>Referring website</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We may use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Providing and maintaining our services</li>
          <li>Processing memberships and payments</li>
          <li>Sending administrative information</li>
          <li>Sending marketing and promotional communications</li>
          <li>Responding to inquiries and offering support</li>
          <li>Improving our website and services</li>
          <li>Complying with legal obligations</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">4. Disclosure of Your Information</h2>
        <p className="mb-4">
          We may share your information with:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Service providers who perform services on our behalf</li>
          <li>Business partners with your consent</li>
          <li>Legal authorities when required by law</li>
          <li>Third parties in connection with a business transaction</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Right to access your personal information</li>
          <li>Right to correct inaccurate information</li>
          <li>Right to delete your personal information</li>
          <li>Right to object to certain processing</li>
          <li>Right to withdraw consent</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">6. Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, you can contact us:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>By phone: (903) 569-9400</li>
          <li>By email: info@gjfitnessforlife.com</li>
          <li>By mail: 5615 TX-37, Mineola, TX 75773</li>
        </ul>
      </div>
    </div>
  );
}