const StoryCard = ({ name, info }: { name: string; info: string }) => {
  return (
    <div className="max-w-[350px] p-8 gap-5 bg-white border border-black rounded-t-md flex flex-col">
      <img className="w-[50px]" src="quote.png" alt="" />
      <p className="">{info}</p>
      <div className="py-4 font-bold">{name}</div>
    </div>
  );
};

export default StoryCard;
