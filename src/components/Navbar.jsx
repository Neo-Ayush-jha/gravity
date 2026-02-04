import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="relative h-[90px] w-full">
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <div className="flex gap-14 text-white text-xs tracking-[0.35em] uppercase">
            <a href="/" className="hover:text-[#c7a17a]">
              ABOUT
            </a>
            <Link to="/services" className="hover:text-[#c7a17a]">
              SERVICES
            </Link>
            <a href="/" className="hover:text-[#c7a17a]">
              PROJECTS
            </a>
          </div>
        </div>

        <div className="absolute right-10 top-6 flex items-center gap-5">
          <a
            href="#"
            className="text-white text-xs tracking-[0.35em] uppercase hover:text-[#c7a17a]"
          >
            CONTACT →
          </a>

          <button className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <Menu size={18} strokeWidth={1.6} className="text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
