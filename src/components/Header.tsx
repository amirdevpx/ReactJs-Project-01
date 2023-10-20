import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

import Logo from "./Logo";

import Button from "./ui/Button";
import FlexBox from "./ui/FlexBox";
import Container from "./ui/Container";

const Header = () => {
  return (
    <header id="header" className="header bg-white shadow">
      <Container className="py-4">
        <FlexBox justify="between" items="center">
          {/* Logo */}
          <Logo />
          {/* Menu */}
          <Menu />
        </FlexBox>
      </Container>
    </header>
  );
};

const Menu = () => {
  return (
    <>
      <FlexBox
        items="center"
        justify="between"
        className="w-full max-lg:hidden"
      >
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#features">Product</Link>
          </li>
          <li>
            <Link to="#pricing">Pricing</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <Button variant="ghost">Login</Button>
          </li>
          <li>
            <Button>
              Become a member <RiArrowRightLine />
            </Button>
          </li>
        </ul>
      </FlexBox>
    </>
  );
};

export default Header;
