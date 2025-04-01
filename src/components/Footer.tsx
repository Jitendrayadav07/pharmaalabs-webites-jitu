
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Pharma<span className="text-pharma-accent">Labs</span></span>
            </div>
            <p className="mt-4 text-base text-gray-400 max-w-md">
              Blockchain-based medicine authentication and supply chain tracking to eliminate fake medicine and save lives.
            </p>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} PharmaLabs. All rights reserved.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
