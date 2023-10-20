import { RiCheckboxCircleFill } from "react-icons/ri";

import HeadBox from "./HeadBox";

import Box from "./ui/Box";
import Button from "./ui/Button";
import FlexBox from "./ui/FlexBox";
import Heading from "./ui/Heading";
import Container from "./ui/Container";
import Typography from "./ui/Typography";

type HeadType = {
  title: string;
  subtitle: string;
};
const Pricing = () => {
  const headData: HeadType = {
    title: "Pricing",
    subtitle:
      "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  };

  return (
    <section id="pricing" className="pricing bg-gray-50">
      <Container className="py-20">
        <HeadBox data={headData} />
        <FlexBox wrap="wrap" col="3" lg="2" md="1" gap="none" className="-mx-2">
          <Box className="p-2">
            <FlexBox
              gap="eight"
              flex="col"
              items="center"
              className="py-16 px-10 border border-gray-200 bg-white rounded-xl"
            >
              <Heading level="h2">FREE</Heading>
              <Typography>Organize across all apps by hand</Typography>
              <Box className="text-blue-500 text-center">
                <Heading level="h1">0$</Heading>
                <Typography element="span">Per Month</Typography>
              </Box>
              <Button size="large" className="w-full justify-center">
                Try for free
              </Button>
              <ul>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2 ">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-gray-400 h-8 w-8" />
                  </Box>
                  <Typography>1GB Cloud storage</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-gray-400 h-8 w-8" />
                  </Box>
                  <Typography>Email and community support</Typography>
                </li>
              </ul>
            </FlexBox>
          </Box>
          <Box className="p-2">
            <FlexBox
              gap="eight"
              flex="col"
              items="center"
              className="relative py-16 px-10 border border-gray-200 bg-white rounded-xl"
            >
              <FlexBox
                items="center"
                justify="center"
                className="absolute -top-10 right-8 w-24 h-24 max-lg:w-20 max-lg:h-20 bg-green-500 text-white rounded-full rotate-12"
              >
                <Heading>New</Heading>
              </FlexBox>
              <Heading level="h2">SILVER</Heading>
              <Typography>Organize across all apps by hand</Typography>
              <Box className="text-blue-500 text-center">
                <Heading level="h1">9.99$</Heading>
                <Typography element="span">Per Month</Typography>
              </Box>
              <Button size="large" className="w-full justify-center">
                Try for free
              </Button>
              <ul>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2 ">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-gray-400 h-8 w-8" />
                  </Box>
                  <Typography>1GB Cloud storage</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-gray-400 h-8 w-8" />
                  </Box>
                  <Typography>Email and community support</Typography>
                </li>
              </ul>
            </FlexBox>
          </Box>
          <Box className="p-2">
            <FlexBox
              gap="eight"
              flex="col"
              items="center"
              className="py-16 px-10 border border-gray-200 bg-white rounded-xl"
            >
              <Heading level="h2">GOLD</Heading>
              <Typography>Organize across all apps by hand</Typography>
              <Box className="text-blue-500 text-center">
                <Heading level="h1">19.99$</Heading>
                <Typography element="span">Per Month</Typography>
              </Box>
              <Button size="large" className="w-full justify-center">
                Try for free
              </Button>
              <ul>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2 ">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-green-500 h-8 w-8" />
                  </Box>
                  <Typography>Unlimited product updates</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-gray-400 h-8 w-8" />
                  </Box>
                  <Typography>1GB Cloud storage</Typography>
                </li>
                <li className="flex mb-4">
                  <Box className="me-2">
                    <RiCheckboxCircleFill className="text-gray-400 h-8 w-8" />
                  </Box>
                  <Typography>Email and community support</Typography>
                </li>
              </ul>
            </FlexBox>
          </Box>
        </FlexBox>
      </Container>
    </section>
  );
};

export default Pricing;
