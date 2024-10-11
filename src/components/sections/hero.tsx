const Hero = () => {
  return (
    <div className="flex justify-center items-center hero-bg">
      <div className="flex justify-center max-w-[800px] mx-auto items-center text-white text-center flex-col gap-4 p-12 min-h-[85vh]">
        <h1 className="text-3xl md:text-5xl font-bold">
        Access Truck Driving Global Opportunities that Shoots You to Financial Success
        </h1>

        <p className="text-sm md:text-md py-4">
          Our expert traning, placement services and investment opportunities
          will help you reach new heightsand achieve financial success in the
          Canadian/US trucking industry.
        </p>

        <button className="font-bold text-white bg-blue-500 rounded-md p-2 px-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
