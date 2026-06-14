import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter text-gray-900">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="font-bold">Last updated: June 2026</p>
          <div className="space-y-6 mt-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p>As is common practice with almost all professional enterprise platforms, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. The Cookies We Set</h2>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
                <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact.</li>
                <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}