import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter text-gray-900">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="font-bold">Last updated: June 2026</p>
          <div className="space-y-6 mt-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>Welcome to Gotecx Global Technology Ecosystem. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. The Data We Collect About You</h2>
              <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests; Where we need to comply with a legal obligation.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}