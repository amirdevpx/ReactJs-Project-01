import person_1 from "../assets/images/person_1.jpeg";
import person_2 from "../assets/images/person_2.jpeg";
import person_3 from "../assets/images/person_3.jpeg";

import Rating from "./Rating";
import HeadBox from "./HeadBox";

import Box from "./ui/Box";
import FlexBox from "./ui/FlexBox";
import Heading from "./ui/Heading";
import Container from "./ui/Container";
import Typography from "./ui/Typography";

type HeadType = {
  title: string;
  subtitle: string;
};

const Testimonials = () => {
  const headData: HeadType = {
    title: "What Clients Say",
    subtitle:
      "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  };

  return (
    <section id="testimonials" className="testimonials bg-gray-50">
      <Container className="py-20">
        {/* Title */}
        <HeadBox data={headData} />
        {/* Content */}
        <FlexBox wrap="wrap" col="3" lg="2" md="1" gap="none" className="-mx-2">
          <Box className="p-2">
            <Box className="p-8 border border-gray-200 bg-white rounded-xl">
              <Box>
                <Rating rate={4} className="mb-8" />
              </Box>
              <Typography className="mb-8">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </Typography>

              <FlexBox>
                <Box className="rounded-full border border-gray-200 overflow-hidden">
                  <img
                    src={person_1}
                    alt=""
                    className="w-14 h-14 object-cover"
                  />
                </Box>
                <Box>
                  <Heading level="h5" className="text-blue-500">
                    Regina Miles
                  </Heading>
                  <Typography element="span">Designer</Typography>
                </Box>
              </FlexBox>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="p-8 border border-gray-200 bg-white rounded-xl">
              <Box>
                <Rating rate={4} className="mb-8" />
              </Box>
              <Typography className="mb-8">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </Typography>

              <FlexBox>
                <Box className="rounded-full border border-gray-200 overflow-hidden">
                  <img
                    src={person_2}
                    alt=""
                    className="w-14 h-14 object-cover"
                  />
                </Box>
                <Box>
                  <Heading level="h5" className="text-blue-500">
                    Regina Miles
                  </Heading>
                  <Typography element="span">Designer</Typography>
                </Box>
              </FlexBox>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="p-8 border border-gray-200 bg-white rounded-xl">
              <Box>
                <Rating rate={4} className="mb-8" />
              </Box>
              <Typography className="mb-8">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </Typography>

              <FlexBox>
                <Box className="rounded-full border border-gray-200 overflow-hidden">
                  <img
                    src={person_3}
                    alt=""
                    className="w-14 h-14 object-cover"
                  />
                </Box>
                <Box>
                  <Heading level="h5" className="text-blue-500">
                    Regina Miles
                  </Heading>
                  <Typography element="span">Designer</Typography>
                </Box>
              </FlexBox>
            </Box>
          </Box>
        </FlexBox>
      </Container>
    </section>
  );
};

export default Testimonials;
