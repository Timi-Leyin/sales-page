import { CardType2 } from "../ui/cards";

function OurServices() {
  return (
    <div className="">
      <div className="p-12 my-8 bg-[#1991D3]">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-around max-w-[1440px] mx-auto">
          <img
            src="truck.png"
            className="select-text -translate-x-28 w-[500px]"
          />
          <div className="text-white text-center max-w-[400px] flex gap-4 flex-col">
            <p>
              At TruckersBridge, we're fully ready and committed to help you
              transform your trucking journey.  Are you ready to take your
              trucking career to the next level? Let’s get started today!
            </p>

            <button className="p-2 mx-auto text-white font-bold px-4 rounded-sm bg-[#E1733A]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="p-12 text-[#09325B]">
        <div className="text-center flex-col flex gap-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="">At TruckBridge, we offer</p>
        </div>

        <div className="py-7">
          <img
            src="services.png"
            className="mx-auto w-full md:w-[800px] select-none"
          />
        </div>

        <div className="md:p-12 max-w-[600px] mx-auto">
          <div className="text-center">
            <h3 className="text-3xl my-7 font-bold">
              OUR PROGRAMS/INVESTMENT OPPORTUNITIES
            </h3>
            <p className="my-4">
              Our programs and trainings are designed with your growth in mind,
              offering practical, hands-on training that fits your goals. If
              you're just starting out or aiming higher, we’re here to help you
              make it happen. 
              <span className="inline-block p-4">
                Also, if you’re looking to grow your wealth with smart,
                strategic investments. Our tailored opportunities are created to
                help you make the most of your money. It doesn’t matter if
                you're a seasoned investor or just getting started, you’ll
                surely get the value of your money.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-[#F4FAFD] flex-wrap flex justify-between items-center md:p-12">
          <div className="flex flex-wrap gap-10">
            <CardType2
              title={"The Profitable Truck Driver Blueprint"}
              btn={<p>BOOK NOW</p>}
              info={
                "A practical, step-by-step program designed to help aspiring & active truck drivers earn as much as $10k/month driving trucks in Canada/US through proven and simple strategies!"
              }
            />
            <CardType2
              title={"Invest Your Way to Wealth"}
              btn={<p>BOOK NOW</p>}
              info={
                "Invest in trucks that do the heavy lifting while you pursue other interests. With our investment opportunities, you can set up a steady income stream and let your assets drive your success. It’s a smart, effortless way to build your future"
              }
            />
          </div>
          <div className="text-center py-5 md:py-0">
            <h4 className="text-4xl font-bold max-w-[350px] mr-auto">
              Let’s get you on the path to success!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
