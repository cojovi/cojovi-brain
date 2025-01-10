import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { brainmaster } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const isActive = (url) => {
    if (url.startsWith('http')) return false;
    return location.pathname === url || (url === '/' && location.pathname === '');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm 
      ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/" className="block w-[12rem] xl:mr-8">
          <img
            src={brainmaster}
            width={196}
            height={40}
            alt="cojovi webworx logo"
          />
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              // Determine if the link should be an internal Link or external anchor
              const isExternal = item.url.startsWith('http');
              const LinkComponent = isExternal ? 'a' : Link;
              const linkProps = isExternal 
                ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
                : { to: item.url };

              return (
                <LinkComponent
                  key={item.id}
                  {...linkProps}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12
                  ${item.onlyMobile ? "lg:hidden" : ""}
                  ${isActive(item.url) ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}
                  onClick={handleClick}
                >
                  {item.title}
                </LinkComponent>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>
        <Button className="hidden lg:flex" href="https://rabbit-cam.vercel.app/">
          Rabbit.Stories
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
