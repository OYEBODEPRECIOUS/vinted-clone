import googlePlay from "../assets/en.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer-section bg-[rgb(242,242,242)] px-10">
        <section className="footer-navlink grid grid-cols-3 pt-20 pb-5 text-[rgb(141,128,160)] ">
          {/* 1st column */}
          <section className="grid">
            <header className="text-lg font-semibold">
              <p>Vinted</p>
            </header>
            <a className="py-2" href="">
              About us
            </a>
            <a className="py-2" href="">
              About us
            </a>
            <a className="py-2" href="">
              About us
            </a>
            <a className="py-2" href="">
              About us
            </a>
            <a className="py-2" href="">
              About us
            </a>
          </section>
          {/* 2nd column */}
          <section className="grid">
            <header className="text-lg font-semibold">
              <p>Vinted</p>
            </header>
            <a className="py-2" href="">
              About us
            </a>
            <a className="py-2" href="">
              About us
            </a>
            <a className="py-2" href="">
              About us
            </a>
          </section>
          {/* 3rd column */}
          <section className="grid">
            <header className="text-lg font-semibold">
              <p>Vinted</p>
            </header>
            <a href="">About us</a>
            <a href="">About us</a>
            <a href="">About us</a>
            <a href="">About us</a>
          </section>
        </section>
        <section className="social-section flex justify-between py-5 border-t-[1px] border-[rgb(141,128,160)]">
          <section className="social-link flex gap-5 text-3xl text-[rgb(186,187,186)]">
            <a className="" href="">
              <FaSquareFacebook />
            </a>
            <a className="" href="">
              <FaLinkedin />
            </a>
            <a className="" href="">
              <FaInstagram />
            </a>
          </section>
          <section className="app-link flex gap-5">
            <img src={googlePlay} alt="google play icon" />
            <img src={googlePlay} alt="apple store icon" />
          </section>
        </section>
        <section className="flex gap-10 text-md py-10 border-t-[1px] border-[rgb(141,128,160)] text-[rgb(141,128,160)]">
          <a href="">Privacy Policy</a>
          <a href="">Cookie Poicy</a>
          <a href="">Cookie Settings</a>
          <a href="">Terms & Conditions</a>
        </section>
      </section>
    </>
  );
};

export default Footer;
