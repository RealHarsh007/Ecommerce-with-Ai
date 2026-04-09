import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-20">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">UrbanX</h2>
          <p className="text-sm text-gray-400">
            Elevate your style with premium fashion collections for men, women & kids.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Kids</li>
            <li className="hover:text-white cursor-pointer">Collections</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe for latest updates & offers
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 outline-none text-sm"
            />
            <button className="bg-yellow-400 text-black px-4 rounded-r-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700"></div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 UrbanX. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;