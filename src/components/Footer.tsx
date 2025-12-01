import {}from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-300 to-lime-900 text-black py-10 px-6 max-sm:px-4 max-md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        
        {/* Company Info */}
        <div>
            <img
                alt=""
                src="/assets/AgroPulse.png"
                className="h-8 w-auto"
                loading='lazy'
              />
          <p className="text-sm max-w-xs">
            Empowering communities through sustainable agriculture. 
            From soil to table, we nurture growth, quality, and a greener future for all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-lime-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-lime-300 transition">About Us</a></li>
            <li><a href="/products" className="hover:text-lime-300 transition">Our Products</a></li>
            <li><a href="/blog" className="hover:text-lime-300 transition">Farm Insights</a></li>
            <li><a href="/contact" className="hover:text-lime-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-lime-300 transition">FAQs</a></li>
            <li><a href="/policy" className="hover:text-lime-300 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-lime-300 transition">Terms & Conditions</a></li>
            <li><a href="/support" className="hover:text-lime-300 transition">Customer Support</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-lime-200 text-black py-2 rounded hover:bg-yellow-200 transition font-semibold"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
              {/* Facebook */}
        <a href="https://facebook.com" className="text-black hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
        <path fill="#08069d" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/>
        </svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/mrmrs_" className="text-black hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512">
          <path fill="#b71f36" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a href="https://youtube.com" className="text-black hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 576 512">
          <path fill="#d90808" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/>
          </svg>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/mrmrs_" className="">
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 448 512">
         <path fill="#282929" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm297.1 84l-103.8 118.6 122.1 161.4-95.6 0-74.8-97.9-85.7 97.9-47.5 0 111-126.9-117.1-153.1 98 0 67.7 89.5 78.2-89.5 47.5 0zM323.3 367.6l-169.9-224.7-28.3 0 171.8 224.7 26.4 0z"/>
         </svg>
        </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-gray-300 mt-10 border-t border-lime-500/30 pt-4">
        &copy; {new Date().getFullYear()} Agrios Market. All rights reserved.
      </div>
    </footer>
  );
}