import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-silver-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-silver-600 mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using the GJ Fitness for Life website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the materials (information or software) on GJ Fitness for Life's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to decompile or reverse engineer any software contained on GJ Fitness for Life's website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
        <p className="mb-4">
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by GJ Fitness for Life at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on GJ Fitness for Life's website are provided on an 'as is' basis. GJ Fitness for Life makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p className="mb-4">
          Further, GJ Fitness for Life does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall GJ Fitness for Life or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GJ Fitness for Life's website, even if GJ Fitness for Life or a GJ Fitness for Life authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">5. Accuracy of Materials</h2>
        <p className="mb-4">
          The materials appearing on GJ Fitness for Life's website could include technical, typographical, or photographic errors. GJ Fitness for Life does not warrant that any of the materials on its website are accurate, complete or current. GJ Fitness for Life may make changes to the materials contained on its website at any time without notice. However, GJ Fitness for Life does not make any commitment to update the materials.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">6. Links</h2>
        <p className="mb-4">
          GJ Fitness for Life has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GJ Fitness for Life of the site. Use of any such linked website is at the user's own risk.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">7. Modifications</h2>
        <p className="mb-4">
          GJ Fitness for Life may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of Texas and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, you can contact us:
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