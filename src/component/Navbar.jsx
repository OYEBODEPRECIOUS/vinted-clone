import { FaSearch } from "react-icons/fa";
import vinted from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <section className="header fixed top-0 z-10 bg-white w-full">
        <section className=" nav-section px-10 py-3 flex gap-5 items-center justify-between border-b-[1px] ">
          {/* Logo */}
          <section>
            <a className="text-[rgb(0,118,131)] font-bold" href="">
              <img className="h-10 " src={vinted} alt="" />
            </a>
          </section>

          {/* Catalog and Search Options */}
          <section className="max-sm:hidden flex flex-grow items-center">
            {/* Catalog Dropdown */}
            <select
              className="py-1 px-2 h-10 rounded-tl-md rounded-bl-md text-lg bg-[rgb(242,242,242)] border border-gray-300"
              name="catalog"
              id="catalog"
            >
              <option value="">Catalog</option>
              <option value="list1">Member</option>
              <option value="list2">Help Center</option>
            </select>

            {/* Search Bar */}
            <section className="relative flex-grow">
              <input
                className="w-full bg-[rgb(242,242,242)] py-2 h-10 text-lg px-10 pr-10 border border-gray-300 outline-none rounded-tl-none rounded-bl-none rounded-md"
                type="text"
                placeholder="Search for items"
              />
              <FaSearch
                className="absolute left-4 top-3 text-gray-500"
                size={18}
              />
            </section>
          </section>

          {/* User Options */}
          <section className="flex gap-5 max-sm:hidden">
            <button className="text-[rgb(0,118,131)] text-md rounded-md bg-transparent py-1 px-3 border-2 border-[rgb(0,118,131)]">
              Sign up | Login
            </button>
            <button className="text-md text-white bg-[rgb(0,118,131)] py-1 px-3 rounded-md">
              Sell now
            </button>
            <select
              className="bg-transparent font-bold text-lg"
              name="language"
              id="language"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ca">CA</option>
              <option value="us">US</option>
              <option value="ger">GER</option>
              <option value="sp">SP</option>
              <option value="aud">AUD</option>
              <option value="ch">CH</option>
              <option value="yo">YO</option>
              <option value="kg">KG</option>
            </select>
          </section>
        </section>

        {/* Catalog and Search Options for small device*/}
        <section className="my-3 md:hidden lg:hidden flex flex-grow items-center px-2">
          {/* Catalog Dropdown */}
          <select
            className="py-1 px-2 h-10 rounded-tl-md rounded-bl-md text-lg bg-[rgb(242,242,242)] border border-gray-300"
            name="catalog"
            id="catalog"
          >
            <option value="">Catalog</option>
            <option value="list1">Member</option>
            <option value="list2">Help Center</option>
          </select>

          {/* Search Bar */}
          <section className="relative flex-grow">
            <input
              className="w-full bg-[rgb(242,242,242)] py-2 h-10 text-lg px-10 pr-10 border border-gray-300 outline-none rounded-tl-none rounded-bl-none rounded-md"
              type="text"
              placeholder="Search for items"
            />
            <FaSearch
              className="absolute left-4 top-3 text-gray-500"
              size={18}
            />
          </section>
        </section>

        {/* Category Links */}
        <section className="category-section flex gap-5 text-md px-10 py-5 border-t-[2px] border-[rgb(242,242,242)] border-b-[2px]">
          <a href="">All</a>
          <a className="max-sm:hidden max-md:hidden" href="">
            Women
          </a>
          <a className="max-sm:hidden max-md:hidden" href="">
            Men
          </a>
          <a href="">Designers</a>
          <a className="max-sm:hidden max-md:hidden" href="">
            Kids
          </a>
          <a className="max-sm:hidden max-md:hidden" href="">
            Home
          </a>
          <a href="">Electronics</a>
          <a className="max-sm:hidden max-md:hidden" href="">
            Entertainment
          </a>
          <a className="max-sm:hidden max-md:hidden" href="">
            Pet care
          </a>
          <a className="max-sm:hidden max-md:hidden" href="">
            About
          </a>
        </section>
      </section>
    </>
  );
};

export default Navbar;
