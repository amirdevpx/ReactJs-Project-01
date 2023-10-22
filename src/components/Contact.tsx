import HeadBox from "./HeadBox";

import Box from "./ui/Box";
import { Button } from "./ui/Button";
import FlexBox from "./ui/FlexBox";
import { Input } from "./ui/Input";
import Container from "./ui/Container";

type HeadType = {
  title: string;
  subtitle: string;
};

const Contact = () => {
  const headData: HeadType = {
    title: "Get In Touch",
    subtitle:
      "The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th",
  };

  return (
    <section id="contact" className="contact bg-gray-800 text-white">
      <Container className="py-20">
        <FlexBox
          wrap="wrap"
          col="2"
          md="1"
          gap="none"
          justify="between"
          items="center"
          className="-mx-2 children:max-w-screen-sm"
        >
          <Box className="p-2">
            <Box className="max-lg:mb-8">
              <HeadBox data={headData} className="text-left mb-0" />
            </Box>
          </Box>
          <Box>
            <Box className="p-2">
              <FlexBox gap="none" className="rounded-md overflow-hidden">
                <Input rounded="none" sizes="large" placeholder="Your Email" />
                <Button rounded="none" size="large">
                  Subscribe
                </Button>
              </FlexBox>
            </Box>
          </Box>
        </FlexBox>
      </Container>
    </section>
  );
};

export default Contact;
