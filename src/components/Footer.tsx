import { Link } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "react-icons/ri";

import Box from "./ui/Box";
import Button from "./ui/Button";
import FlexBox from "./ui/FlexBox";
import Heading from "./ui/Heading";
import Container from "./ui/Container";
import Typography from "./ui/Typography";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-white">
      <Container className="py-20">
        <FlexBox wrap="wrap" col="4" lg="2" md="1" gap="none" className="-mx-2">
          <Box className="p-2">
            <ul className="children:mb-4">
              <Heading className="mb-4">Get In Touch</Heading>
              <li className="">
                <Typography>the quick fox jumps over the lazy dog</Typography>
              </li>
              <li>
                <FlexBox>
                  <Button variant="link" size="icon">
                    <RiFacebookBoxFill />
                  </Button>
                  <Button variant="link" size="icon">
                    <RiInstagramLine />
                  </Button>
                  <Button variant="link" size="icon">
                    <RiTwitterXFill />
                  </Button>
                </FlexBox>
              </li>
            </ul>
          </Box>
          <Box className="p-2">
            <ul className="children:mb-4">
              <Heading className="mb-4">Company info</Heading>
              <li className="">
                <Link to="/">About Us</Link>
              </li>
              <li className="">
                <Link to="/">Carrier</Link>
              </li>
              <li className="">
                <Link to="/">We are hiring</Link>
              </li>
              <li className="">
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </Box>
          <Box className="p-2">
            <ul className="children:mb-4">
              <Heading className="mb-4">Features</Heading>
              <li className="">
                <Link to="/">Business Marketing</Link>
              </li>
              <li className="">
                <Link to="/">User Analytic</Link>
              </li>
              <li className="">
                <Link to="/">Live Chat</Link>
              </li>
              <li className="">
                <Link to="/">Unlimited Support</Link>
              </li>
            </ul>
          </Box>
          <Box className="p-2">
            <ul className="children:mb-4">
              <Heading className="mb-4">Resources</Heading>
              <li className="">
                <Link to="/">IOS & Android</Link>
              </li>
              <li className="">
                <Link to="/">Watch a Demo</Link>
              </li>
              <li className="">
                <Link to="/">Customers</Link>
              </li>
              <li className="">
                <Link to="/">API</Link>
              </li>
            </ul>
          </Box>
        </FlexBox>
      </Container>
      <Container className="w-full bg-gray-50 py-4">
        <Box>
          <Typography className="text-center">
            Made With Love By Figmaland All Right Reserved{" "}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
