import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-navyslate-900 dark:bg-navyslate-950 text-navyslate-300 pt-20 pb-10 border-t border-navyslate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6">
              Lumina<span className="text-trustcyan-500">Dental</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Premium dental care tailored to your unique needs. We combine advanced technology with compassionate care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-navyslate-800 flex items-center justify-center hover:bg-trustcyan-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navyslate-800 flex items-center justify-center hover:bg-trustcyan-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#treatments" className="hover:text-trustcyan-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">Treatments</Link></li>
              <li><Link href="#journey" className="hover:text-trustcyan-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">Our Process</Link></li>
              <li><Link href="#testimonials" className="hover:text-trustcyan-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">Patient Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-trustcyan-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">Dental Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-trustcyan-500 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span>123 Dental Way, Suite 100<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="text-trustcyan-500 mr-3 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <span className="text-trustcyan-500 mr-3 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <a href="mailto:hello@luminadental.com" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">hello@luminadental.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Clinic Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>Monday - Friday</span><span className="text-white font-medium">8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-white font-medium">9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-trustcyan-500 font-medium">Emergency Only</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navyslate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
