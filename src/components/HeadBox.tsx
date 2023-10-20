import { cn } from "../libs/utils";

import Box from "./ui/Box";
import Heading from "./ui/Heading";
import Typography from "./ui/Typography";

type HeadBoxType = {
  data: {
    title: string;
    subtitle: string;
  };
  className?: string;
};

const HeadBox = ({ data, className }: HeadBoxType) => {
  return (
    <Box className={cn("max-w-2xl mx-auto text-center text-inherit mb-20", className)}>
      <Heading level="h1" className="mb-4">
        {data.title}
      </Heading>
      <Typography>{data.subtitle}</Typography>
    </Box>
  );
};

export default HeadBox;
