import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

 function ShoppingFooter() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Mahairs</h2>
          <p className="text-sm text-gray-300">
            Premium hair extensions & beauty essentials for every queen.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop/listing" className="hover:text-gray-300">Men-braids</a></li>
            <li><a href="/shop/listing" className="hover:text-gray-300">Women</a></li>
            <li><a href="/shop/listing" className="hover:text-gray-300">Kids
</a></li>
            <li><a href="/shop/listing" className="hover:text-gray-300">Revamps</a></li>
            <li><a href="/shop/listing" className="hover:text-gray-300">Intallations</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-2">Join for updates & deals</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Your email" className="bg-white text-black" />
            <Button variant="secondary" className="bg-gray-500 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Mahairs. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-white">
          <a href="#"><FaFacebookF className="hover:text-gray-300" size={18} /></a>
          <a href="#"><FaInstagram className="hover:text-gray-300" size={18} /></a>
          <a href="#"><FaTwitter className="hover:text-gray-300" size={18} /></a>
          <a href="mailto:support@mahairs.com"><FaEnvelope className="hover:text-gray-300" size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default ShoppingFooter
