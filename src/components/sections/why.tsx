import CardType1 from "../ui/cards";

const data = [
  {
    title: "Train",
    info: "Get professional traning that not only prepares you for high paying roles but also sets you apart in a competitive salary.",
    src: "1.png",
  },
  {
    title: "Connect",
    info: "Get professional traning that not only prepares you for high paying roles but also sets you apart in a competitive salary.",
    src: "2.png",
  },
  {
    title: "Fulfil",
    info: "Get professional traning that not only prepares you for high paying roles but also sets you apart in a competitive salary.",
    src: "3.png",
  },
];

const Why = () => {
  return (
    <div className="p-12 text-[#09325B]">
      <div className="max-w-[600px] my-8 text-center mx-auto">
        <h2 className="text-3xl  md:text-4xl font-bold">
          Step Into a Rewarding Truck Driving Career with Top Pay in Canada or
          the US!
        </h2>

        <p className="py-4">
          We equip you with the skills and connections to secure well-paid
          positions and build a successful trucking career.
        </p>
      </div>

      <div className="flex flex-wrap justify-center max-w-[950px] mx-auto gap-6 my-12">
        {data.map((d, index) => {
          return (
            <CardType1 info={d.info} title={d.title} src={d.src} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Why;
