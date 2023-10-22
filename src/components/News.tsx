import post_1 from "../assets/images/post_1.png";
import post_2 from "../assets/images/post_2.png";
import post_3 from "../assets/images/post_3.png";
import post_4 from "../assets/images/post_4.png";

import HeadBox from "./HeadBox";

import Box from "./ui/Box";
import { Button } from "./ui/Button";
import FlexBox from "./ui/FlexBox";
import Container from "./ui/Container";
import Typography from "./ui/Typography";

type HeadType = {
  title: string;
  subtitle: string;
};
const News = () => {
  const headData: HeadType = {
    title: "Latest News",
    subtitle:
      "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  };

  return (
    <section id="news" className="news bg-gray-50">
      <Container className="py-20 px-4 xl:max-w-full">
        {/* Title */}
        <HeadBox data={headData} />
        {/* Content */}
        <FlexBox wrap="wrap" col="4" lg="2" md="1" gap="none" className="-mx-2">
          <Box className="p-2">
            <Box className="relative">
              <img src={post_1} alt="" className="w-full h-auto object-cover" />
              <FlexBox
                flex="col"
                justify="end"
                className="w-full h-full p-4 text-white absolute left-0 top-0 bg-gradient-to-t from-gray-900 transition hover:opacity-0 hover:-translate-y-4"
              >
                <Typography element="span" size="small">
                  Tax Management
                </Typography>
                <Typography>
                  Life Tips From Top Ten Adventure Travelers
                </Typography>
                <Button className="rounded-full">View Project</Button>
              </FlexBox>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="relative">
              <img src={post_2} alt="" className="w-full h-auto object-cover" />
              <FlexBox
                flex="col"
                justify="end"
                className="w-full h-full p-4 text-white absolute left-0 top-0 bg-gradient-to-t from-gray-900 transition hover:opacity-0 hover:-translate-y-4"
              >
                <Typography element="span" size="small">
                  Tax Management
                </Typography>
                <Typography>
                  Life Tips From Top Ten Adventure Travelers
                </Typography>
                <Button className="rounded-full">View Project</Button>
              </FlexBox>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="relative">
              <img src={post_3} alt="" className="w-full h-auto object-cover" />
              <FlexBox
                flex="col"
                justify="end"
                className="w-full h-full p-4 text-white absolute left-0 top-0 bg-gradient-to-t from-gray-900 transition hover:opacity-0 hover:-translate-y-4"
              >
                <Typography element="span" size="small">
                  Tax Management
                </Typography>
                <Typography>
                  Life Tips From Top Ten Adventure Travelers
                </Typography>
                <Button className="rounded-full">View Project</Button>
              </FlexBox>
            </Box>
          </Box>
          <Box className="p-2">
            <Box className="relative">
              <img src={post_4} alt="" className="w-full h-auto object-cover" />
              <FlexBox
                flex="col"
                justify="end"
                className="w-full h-full p-4 text-white absolute left-0 top-0 bg-gradient-to-t from-gray-900 transition hover:opacity-0 hover:-translate-y-4"
              >
                <Typography element="span" size="small">
                  Tax Management
                </Typography>
                <Typography>
                  Life Tips From Top Ten Adventure Travelers
                </Typography>
                <Button className="rounded-full">View Project</Button>
              </FlexBox>
            </Box>
          </Box>
        </FlexBox>
      </Container>
    </section>
  );
};

export default News;
