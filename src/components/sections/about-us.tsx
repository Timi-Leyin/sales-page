const AboutUs = () => {
  return (
    <section className="p-12 flex flex-wrap justify-around text-white w-full bg-[#09325B]">
      <div className="">
        <div className="">
          <h4 className="text-3xl font-bold py-3 ">About Us</h4>
          <p className="text-sm max-w-[400px]">
            <span className="block">
              <span className="text-blue-400 font-bold">TruckersBridge</span> is
              hard-bent helping foreign drivers like you land high-paying
              trucking jobs abroad. 
            </span>
            <span className="block py-3">
              Our specialized training and support are designed to connect your
              skills with global opportunities. 
            </span>
            <span className="block">
              We offer tailored programs to meet your unique needs, bridging the
              gap between where you are and where you want to be.
            </span>
          </p>
        </div>

        <div className="my-8">
          <h4 className="text-3xl font-bold py-3 ">Our Mission</h4>
          <p className="text-sm max-w-[400px]">
            <span className="block">
              Our mission is to connect skilled drivers with amazing career
              opportunities in the trucking industry. 
            </span>
            <span className="block py-3">
              We make the transition to international trucking as smooth as
              possible, so our trainees are ready to tackle the challenges of
              the global market with confidence.
            </span>
          </p>
        </div>
      </div>

      <img width={600} className="" src="/about-img.png" alt="" />
    </section>
  );
};

export default AboutUs;
