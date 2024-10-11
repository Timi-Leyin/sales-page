import { ReactNode } from "react";

interface CardType1Props {
  title: string;
  info: string;
  src?: string;
  btn?: ReactNode | string;
}

const CardType1 = ({ title, info, src }: CardType1Props) => {
  return (
    <div className="max-w-[300px] text-center relative overflow-hidden shadow-md rounded-md">
      <img src={src} className="h-[200px] w-full object-cover" />
      <div className="p-6">
        <h3 className="pb-4 text-[#1991D3] font-bold text-2xl">{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export const CardType2 = ({ title, info, btn }: CardType1Props) => {
  return (
    <div className="max-w-[350px] md:px-8 p-12 bg-white text-center flex justify-between relative overflow-hidden shadow-md rounded-md">
      <div className="md:p-6">
        <h3 className="pb-4 font-bold text-2xl">{title}</h3>
        <p>{info}</p>

        <button className="px-4 mb-auto py-2 rounded-md mt-8 bg-[#1991D3] text-white">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default CardType1;
