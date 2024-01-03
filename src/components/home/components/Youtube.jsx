const Youtube = () => {
  let width = 560;
  let height = 315;

  if (window.innerWidth <= 620) {
    width = 350;
    height = 197;
  }

  return (
    <div className="px-[3rem] md:px-[5rem] py-[5rem] flex flex-col lg:flex-row lg:justify-evenly items-center gap-[2rem] lg:gap-[5rem] bg-white">
      <div className="lg:w-[40%] flex flex-col gap-[1.5rem] lg:order-last">
        <h1 className="font-bold text-[3rem] leading-[2.7rem]">Watch Us In Action</h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Dive into the vibrant universe of TMIS Solutions through our captivating promotional video. Immerse yourself
          in the heart of our international customer service platform, where innovation harmonizes with seamless
          solutions. Take a visual tour with us to witness how TMIS transcends boundaries, redefines customer
          interactions, and crafts success stories on a global scale. Join us now and envisage the extraordinary
          possibilities for your brand's international customer service future!
        </p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Press play and step into the extraordinary realm of TMIS!
        </p>
      </div>
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/w9NTzfdG7G4"
        title="KreativeMachinez Promo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-3xl"
      />
    </div>
  );
};

export default Youtube;
