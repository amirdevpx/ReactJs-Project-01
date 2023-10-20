import { RiGroupLine } from "react-icons/ri";

import HeadBox from "./HeadBox";

import Box from "./ui/Box";
import Heading from "./ui/Heading";
import FlexBox from "./ui/FlexBox";
import Container from "./ui/Container";

type HeadType = {
  title: string;
  subtitle: string;
};
const Features = () => {
  const headData: HeadType = {
    title: "Better Strategy With Quality Business",
    subtitle:
      "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  };

  return (
    <section id="features" className="features">
      <Container className="py-20">
        {/* Title */}
        <HeadBox data={headData} />
        {/* Content */}
        <FlexBox wrap="wrap" col="3" lg="2" md="1" gap="none" className="-mx-2">
          <Box className="p-2">
            <Box className="features-box p-8 text-center border border-gray-200 bg-gray-100 rounded-xl hover:bg-blue-400 hover:text-white transition">
              <FlexBox justify="center" className="mb-4 text-blue-500">
                <RiGroupLine className="features-icon w-12 h-12 transition" />
              </FlexBox>
              <Heading level="h4">Support On Raising Funds</Heading>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="features-box p-8 text-center border border-gray-200 bg-gray-100 rounded-xl hover:bg-blue-400 hover:text-white transition">
              <FlexBox justify="center" className="mb-4 text-blue-500">
                <RiGroupLine className="features-icon w-12 h-12 transition" />
              </FlexBox>
              <Heading level="h4">Investment Trading</Heading>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="features-box p-8 text-center border border-gray-200 bg-gray-100 rounded-xl hover:bg-blue-400 hover:text-white transition">
              <FlexBox justify="center" className="mb-4 text-blue-500">
                <RiGroupLine className="features-icon w-12 h-12 transition" />
              </FlexBox>
              <Heading level="h4">Financial Analysis</Heading>
            </Box>
          </Box>
        </FlexBox>
      </Container>
    </section>
  );
};

export default Features;
