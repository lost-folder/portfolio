import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import mssg from "./img/mssg.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Other content of your page here */}
      {/* <main className="flex-grow"></main> */}

      {/* Footer Section */}
      <footer className="bg-[#DEAC80] text-white py-10 mt-auto">
        <div className="max-w-[1440px] max-h-[300px] mx-auto px-6 sm:px-16 flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {/* Social Media Section */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Me Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Me</h2>
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Image src={mssg} alt="Message" width={96} height={96} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-white text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
