import { RiArrowRightLine, RiCloseFill, RiMenuFill } from "react-icons/ri";

import Logo from "./Logo";

import { Button, buttonVariants } from "./ui/Button";
import FlexBox from "./ui/FlexBox";
import Container from "./ui/Container";
import Box from "./ui/Box";
import { useState } from "react";
import { useWindowWidthAndHeight } from "../hooks";

const Header = () => {
  const [width, _] = useWindowWidthAndHeight();
  return (
    <header id="header" className="header bg-white shadow">
      <Container className="py-4">
        <FlexBox justify="between" items="center">
          <Logo />
          {width > 992 ? <Menu /> : <MobileMenu />}
        </FlexBox>
      </Container>
    </header>
  );
};

const Menu = () => {
  return (
    <>
      <FlexBox justify="between" items="center" className="w-full">
        <FlexBox gap="none">
          <a href="#hero" className={buttonVariants({ variant: "link-muted" })}>
            Home
          </a>
          <a
            href="#features"
            className={buttonVariants({ variant: "link-muted" })}
          >
            Product
          </a>
          <a
            href="#pricing"
            className={buttonVariants({ variant: "link-muted" })}
          >
            Pricing
          </a>
          <a
            href="#contact"
            className={buttonVariants({ variant: "link-muted" })}
          >
            Contact
          </a>
        </FlexBox>
        <FlexBox>
          <a href="#" className={buttonVariants({ variant: "ghost" })}>
            Login
          </a>
          <a href="#" className={buttonVariants({ variant: "deafult" })}>
            Become a member <RiArrowRightLine />
          </a>
        </FlexBox>
      </FlexBox>
    </>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <RiMenuFill />
      </Button>
      <Box
        className={
          "w-full h-screen fixed left-0 top-0 bg-black duration-300 ease-in-out z-[100] " +
          (isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
        onClick={() => setIsOpen(false)}
      />
      <FlexBox
        items="center"
        justify="between"
        className={
          "fixed max-lg:w-2/4 max-md:w-3/4 max-sm:w-full h-screen bg-white p-4 top-0 duration-300 ease-in-out z-[101] " +
          (isOpen ? "right-0" : " -right-full")
        }
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <RiCloseFill />
        </Button>
        <ul className="w-full children:mb-4">
          <li>
            <Button variant="link-muted" className="w-full justify-center" onClick={()=> setIsOpen(false)}>
              <a href="#hero" className="text-lg">
                Home
              </a>
            </Button>
          </li>
          <li>
            <Button variant="link-muted" className="w-full justify-center" onClick={()=> setIsOpen(false)}>
              <a href="#features" className="text-lg">
                Product
              </a>
            </Button>
          </li>
          <li>
            <Button variant="link-muted" className="w-full justify-center" onClick={()=> setIsOpen(false)}>
              <a href="#pricing" className="text-lg">
                Pricing
              </a>
            </Button>
          </li>
          <li>
            <Button variant="link-muted" className="w-full justify-center" onClick={()=> setIsOpen(false)}>
              <a href="#contact" className="text-lg">
                Contact
              </a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-center" onClick={()=> setIsOpen(false)}>
              <a href="#" className="text-lg">
                Login
              </a>
            </Button>
          </li>
          <li>
            <Button className="w-full justify-center" onClick={()=> setIsOpen(false)}>
              <a href="#" className="text-lg">
                Become a member
              </a>
            </Button>
          </li>
        </ul>
      </FlexBox>
    </>
  );
};

export default Header;
