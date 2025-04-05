import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white py-8 sm:py-10 text-center w-full overflow-x-hidden">
      <div className="container mx-auto flex flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between md:items-start">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">DSCE Canteen</h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            Serving fresh, delicious, and affordable meals to fuel your academic journey at DSCE.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <FooterLink href="/menu">Menu</FooterLink>
          <FooterLink href="/offers">Special Offers</FooterLink>
          <FooterLink href="/events">Events</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </div>
        
        {/* Contact & Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <p className="text-sm text-gray-400">Dayananda Sagar College of Engineering</p>
          <p className="text-sm text-gray-400">Bangalore, India</p>
          <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-400">Email: support@dscecanteen.com</p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <SocialIcon href="https://facebook.com" icon={<FaFacebook />} />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
            <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DSCE Canteen. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white hover:underline"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 text-xl transition-colors duration-200 hover:text-white"
    >
      {icon}
    </Link>
  );
}
