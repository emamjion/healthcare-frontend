import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Stack direction="row" justifyContent='center' gap={4}>
        <Typography color="#ffff" component={Link} href="/consultation">
          Consultation
        </Typography>
        <Typography color="#ffff" component={Link} href="/health-plans">
          Health Plans
        </Typography>
        <Typography color="#ffff" component={Link} href="/medicine">
          Medicine
        </Typography>
        <Typography color="#ffff" component={Link} href="/diagnostics">
          Diagnostics
        </Typography>
        <Typography color="#ffff" component={Link} href="/ngo">
          NGOs
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
