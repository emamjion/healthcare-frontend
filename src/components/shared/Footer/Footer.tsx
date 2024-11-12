import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor='rgb(17,26,34)' py={5}>
      <Stack direction='row' gap={4} color= >
          <Typography component={Link} href='/consultation'>Consultation</Typography>
          <Typography component={Link} href='/health-plans'>Health Plans</Typography>
          <Typography component={Link} href='/medicine'>Medicine</Typography>
          <Typography component={Link} href='/diagnostics'>Diagnostics</Typography>
          <Typography component={Link} href='/ngo'>NGOs</Typography>
        </Stack>
    </Box>
  );
};

export default Footer;
