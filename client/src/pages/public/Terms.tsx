import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter text-gray-900">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="font-bold">Last updated: June 2026</p>
          <div className="space-y-6 mt-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Gotecx Global Technology Ecosystem website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p>Gotecx provides users with access to a rich collection of resources, including enterprise software solutions, API integrations, point-of-sale systems, and custom engineering services (the "Service"). You also understand and agree that the Service may include certain communications from Gotecx, such as service announcements and administrative messages.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Enterprise Accounts</h2>
              <p>In consideration of your use of the Service, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of applicable jurisdictions. You also agree to provide true, accurate, current and complete information about yourself as prompted by the Service's registration form.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}