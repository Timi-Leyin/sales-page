import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-12 bg-[#09325B]">
      <div className="flex flex-col justify-center items-center">
        <div className="my-6 flex gap-5 text-white items-center">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>

        <img width={200} src="logo.png" />
      </div>

      <div className="text-center mt-6 text-white border-t border-[#888] py-3">
        <span>&copy;</span> Tony Trucking 2024
      </div>
    </footer>
  );
};

export default Footer;
