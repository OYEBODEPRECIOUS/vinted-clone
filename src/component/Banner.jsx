const Banner = () => {
  return (
    <>
      {/* Second banner image */}
      <section className="p-4">
        <section className="second-banner rounded-md overflow-hidden ">
          <section className="bag-img ">
            {/* <img
              className="rounded-md w-100% object-cover"
              src={bag}
              alt="second banner"
            /> */}
          </section>
          <section className="bag-content p-10 text-white ">
            <div className="absolute ">
              <p className="text-lg">NEW</p>
              <p className="font-semibold text-xl">Discover luxury fashion</p>
            </div>
            {/* <div className="bottom-1">
            </div> */}
            <button className=" absolute bottom-10 px-3 py-2 bg-white text-black font-semibold rounded-md w-max ">
              Shop now
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Banner;
