const links = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
const Header = () => {
  return (
    <nav className="flex absolute w-full top-0 left-0 ">
      <header className="max-w-[1440px] mx-auto flex w-full justify-between items-center p-7 gap-4">
        <div className="logo">
          <img src="/logo.png" width={200} alt="" />
        </div>

        <ul className="hidden md:flex items-center text-white gap-4">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href || "#"}>{link.label}</a>
              </li>
            );
          })}
        </ul>

        <button className="p-2 px-4 rounded-md text-sm border uppercase text-white border-white">
          Get Started
        </button>
      </header>
    </nav>
  );
};

export default Header;
