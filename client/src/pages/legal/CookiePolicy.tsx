import React from "react";

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-silver-900 mb-8">Cookie Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-silver-600 mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">1. What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">2. How We Use Cookies</h2>
        <p className="mb-4">
          When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>To enable certain functions of the website</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>To enable advertisements delivery, including behavioral advertising</li>
        </ul>
        <p className="mb-4">
          We use both session and persistent cookies on our website and we use different types of cookies to run the website:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li><strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
          <li><strong>Preference cookies.</strong> We may use preference cookies to remember information that changes the way the website behaves or looks, such as the "remember me" functionality or a user's language preference.</li>
          <li><strong>Analytics cookies.</strong> We may use analytics cookies to track information how the website is used so that we can make improvements, and report on our analytics.</li>
          <li><strong>Advertising cookies.</strong> We may use advertising cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">3. Third-Party Cookies</h2>
        <p className="mb-4">
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">4. What Are Your Choices Regarding Cookies</h2>
        <p className="mb-4">
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </p>
        <p className="mb-4">
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" className="text-primary-600 hover:underline">https://support.google.com/accounts/answer/32050</a></li>
          <li>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" className="text-primary-600 hover:underline">http://support.microsoft.com/kb/278835</a></li>
          <li>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="text-primary-600 hover:underline">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
          <li>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary-600 hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
        </ul>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">5. Changes to This Cookie Policy</h2>
        <p className="mb-4">
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. We will let you know via email and/or a prominent notice on our website, prior to the change becoming effective and update the "Last Updated" date at the top of this Cookie Policy.
        </p>
        <p className="mb-4">
          You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Cookie Policy, you can contact us:
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