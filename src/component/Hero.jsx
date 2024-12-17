import wave from "../assets/wave.svg";

const Hero = () => {
  return (
    <>
      <section className="banner-section mt-[120px]">
        {/* Hero Content */}
        <img
          className="absolute bottom-0  w-full object-cover  "
          src={wave}
          alt="wave"
        />
        <section className="max-sm:hidden  hero-content  py-[100px] ml-10">
          <section className="grid w-2/6 bg-white  p-7 rounded-md">
            <h1 className="text-4xl mb-7 font-semibold">
              Ready to declutter <br /> your closet?
            </h1>
            <button className="bg-[rgb(0,118,131)] p-3 rounded-md text-white font-bold mb-3">
              Sell now
            </button>
            <a className="text-[rgb(0,118,131)] underline text-md" href="">
              Learn how it works
            </a>
          </section>
        </section>
      </section>

      {/* hero content on small device */}
      <section className="my-5 md:hidden lg:hidden xl:hidden hero-content mx-5">
        <section className="grid w-full text-center bg-white rounded-md">
          <h1 className="text-2xl mb-7 font-semibold">
            Ready to declutter your closet?
          </h1>
          <button className="bg-[rgb(0,118,131)] p-3 rounded-md text-white font-bold mb-3">
            Sell now
          </button>
          <a className="text-[rgb(0,118,131)] font-bold text-md" href="">
            Learn how it works
          </a>
        </section>
      </section>
    </>
  );
};

export default Hero;
