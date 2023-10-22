import mockub from "../assets/images/mockup.svg";
import mini_blob from "../assets/images/mini_blob.svg";

import Box from "./ui/Box";
import FlexBox from "./ui/FlexBox";
import Heading from "./ui/Heading";
import Container from "./ui/Container";
import Typography from "./ui/Typography";
import { Button } from "./ui/Button";

const Hero = () => {
  return (
    <section id="hero" className="hero relative overflow-hidden bg-gray-50">
      <Box className="absolute left-0 top-16">
        <img src={mini_blob} alt="" />
      </Box>
      <Container>
        <FlexBox
          wrap="wrap"
          gap="none"
          col="2"
          md="1"
          items="center"
          className="min-h-[calc(100vh-64px)] max-md:py-20 max-md:gap-8"
        >
          <FlexBox flex="col" gap="eight">
            <Heading level="h1" className="text-5xl">
              Your Financial Assistance
            </Heading>
            <Typography>
              We know how large objects will act, but things on a small scale.
            </Typography>
            <Box>
              <Button rounded="full" className="mr-4">
                Get Quote Now
              </Button>
              <Button rounded="full" variant="outline">
                Learn More
              </Button>
            </Box>
          </FlexBox>
          <Box>
            <img src={mockub} alt="" />
          </Box>
        </FlexBox>
      </Container>
    </section>
  );
};

export default Hero;
