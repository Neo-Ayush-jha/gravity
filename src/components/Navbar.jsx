import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="relative h-[70px] md:h-[90px] w-full px-4">
        <div className="absolute inset-x-0 top-4 md:top-8 flex justify-center">
          <div className="hidden md:flex gap-8 lg:gap-14 text-white text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] uppercase">
            <a href="/" className="hover:text-[#c7a17a] transition-colors">
              ABOUT
            </a>
            <Link to="/services" className="hover:text-[#c7a17a] transition-colors">
              SERVICES
            </Link>
            <a href="/" className="hover:text-[#c7a17a] transition-colors">
              PROJECTS
            </a>
          </div>
        </div>

        <div className="absolute right-4 md:right-10 top-4 md:top-6 flex items-center gap-3 md:gap-5">
          <a
            href="#"
            className="hidden sm:block text-white text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] uppercase hover:text-[#c7a17a] transition-colors"
          >
            CONTACT →
          </a>

          <button className="w-9 h-9 md:w-10 md:h-10 bg-white rounded flex items-center justify-center hover:bg-[#c7a17a] transition-colors">
            <Menu size={16} className="md:hidden text-black" strokeWidth={1.6} />
            <Menu size={18} className="hidden md:block text-black" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
