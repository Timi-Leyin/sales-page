import StoryCard from "./story-card";

const ClientStories = () => {
  return (
    <div className="text-[#09325B]">
      <div className="text-center">
        <h3 className="font-bold text-4xl">CLIENTS STORIES</h3>

        <p className="py-8">Read what our clients are saying about us.</p>
      </div>

      <div className="my-5 flex flex-wrap justify-center gap-8">
        <StoryCard
          name={"Ranan Tamara"}
          info={
            "Before I started truck driving, I was unsure about where to begin in finding a stable career. TruckersBridge provided the guidance I needed, from getting my CDL to navigating the job market. Their personalized advice built my confidence and skills. If you're considering a career in truck driving, TruckersBridge is the all-inclusive brand that will equip you for success. Give them a try—you won’t regret it!"
          }
        />
        <StoryCard
          name={"Ranan Tamara"}
          info={
            "Before I started truck driving, I was unsure about where to begin in finding a stable career. TruckersBridge provided the guidance I needed, from getting my CDL to navigating the job market. Their personalized advice built my confidence and skills. If you're considering a career in truck driving, TruckersBridge is the all-inclusive brand that will equip you for success. Give them a try—you won’t regret it!"
          }
        />
        <StoryCard
          name={"Ranan Tamara"}
          info={
            "Before I started truck driving, I was unsure about where to begin in finding a stable career. TruckersBridge provided the guidance I needed, from getting my CDL to navigating the job market. Their personalized advice built my confidence and skills. If you're considering a career in truck driving, TruckersBridge is the all-inclusive brand that will equip you for success. Give them a try—you won’t regret it!"
          }
        />
      </div>

      <div className="bg-[#1991D3] overflow-hidden p-12 text-white">
        <div className="flex flex-wrap justify-around items-center">
          <div className="p-4 max-w-[400px]">
            <h3 className="text-3xl font-bold md:text-4xl">Create Your Own Success Story Today</h3>

            <p className="py-4">
              You too Can Experience Financial and Professional Success as a
              Canadian/US Truck Driver. Get Started Now!
            </p>

            <button className="bg-[darkorange] font-bold rounded-md px-4 mt-3  py-2">
              Get Started
            </button>
          </div>

          <div className="">
            <img src="/man.png" className="translate-y-12" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStories;
