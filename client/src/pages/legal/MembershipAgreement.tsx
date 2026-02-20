import React from "react";

export default function MembershipAgreement() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-silver-900 mb-8">Membership Agreement</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-silver-600 mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">1. Membership Terms</h2>
        <p className="mb-4">
          This Membership Agreement ("Agreement") is entered into between GJ Fitness for Life ("Gym") and the individual who signs up for a membership ("Member"). By purchasing a membership, the Member agrees to the following terms and conditions:
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">2. Membership Types and Fees</h2>
        <p className="mb-4">
          The Gym offers several membership options, including Basic, Premium, and Elite plans. The specific features, benefits, and costs of each plan are outlined on the Pricing page of our website. Membership fees are due and payable according to the selected payment schedule (monthly, quarterly, or annually).
        </p>
        <p className="mb-4">
          The Gym reserves the right to adjust membership fees with a 30-day notice to Members. Special promotions and discounts may be offered at the discretion of the Gym.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">3. Duration and Renewal</h2>
        <p className="mb-4">
          Memberships are valid for the term selected at sign-up (month-to-month, quarterly, or annual). Month-to-month memberships automatically renew each month until cancelled by the Member. Term memberships (quarterly or annual) do not automatically renew and must be renewed manually by the Member.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">4. Cancellation Policy</h2>
        <p className="mb-4">
          Members may cancel their membership at any time by providing written notice at least 15 days before the next billing cycle. Cancellation requests must be submitted in writing or through our online portal. No refunds will be provided for unused portions of the current billing cycle.
        </p>
        <p className="mb-4">
          Annual memberships that are cancelled before the end of the term may be subject to an early termination fee, as specified at the time of enrollment.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">5. Gym Rules and Code of Conduct</h2>
        <p className="mb-4">
          Members agree to follow all gym rules and policies, including but not limited to:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Treating all staff and other members with respect</li>
          <li>Using equipment properly and returning it to its designated location after use</li>
          <li>Wearing appropriate athletic attire and footwear</li>
          <li>Wiping down equipment after use</li>
          <li>Not bringing food into workout areas</li>
          <li>Not engaging in behavior that disrupts other members</li>
        </ul>
        <p className="mb-4">
          The Gym reserves the right to terminate a membership without refund for violations of these rules or for behavior that threatens the safety or comfort of other members or staff.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">6. Health and Safety</h2>
        <p className="mb-4">
          Members represent that they are in good health and have no medical condition that would prevent them from using the gym facilities. Members are encouraged to consult with a physician before beginning any exercise program.
        </p>
        <p className="mb-4">
          The Gym is not responsible for any injuries sustained while using the facilities. Members assume all risks associated with using the gym equipment and facilities.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">7. Liability Waiver</h2>
        <p className="mb-4">
          By accepting this Agreement, Members waive any and all claims they may have against the Gym, its owners, employees, and agents for any injury, loss, or damage sustained while using the gym facilities, except for those resulting from gross negligence or willful misconduct.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">8. Hours of Operation</h2>
        <p className="mb-4">
          The Gym is open 24 hours a day, 7 days a week. However, the Gym reserves the right to modify its hours of operation or close temporarily for maintenance, renovations, or holidays with reasonable notice to Members.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">9. Changes to Agreement</h2>
        <p className="mb-4">
          The Gym reserves the right to modify this Agreement at any time with 30 days' notice to Members. Continued use of the gym facilities after such notice constitutes acceptance of the modified terms.
        </p>
        
        <h2 className="text-2xl font-bold text-silver-800 mt-8 mb-4">10. Contact Information</h2>
        <p className="mb-4">
          For questions or concerns regarding this Membership Agreement, please contact us:
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