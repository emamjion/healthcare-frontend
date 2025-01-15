import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngo">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Link href={"#"}>
            <Image
              src={facebookIcon}
              width={30}
              height={30}
              alt="facebook icon"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={instagramIcon}
              width={30}
              height={30}
              alt="facebook icon"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={twitterIcon}
              width={30}
              height={30}
              alt="facebook icon"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={linkedinIcon}
              width={30}
              height={30}
              alt="facebook icon"
            />
          </Link>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          py={3}
        >
          <Typography component="p" color="white">
            &copy; 2024 Healthcare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            color="white"
            href="/"
            fontWeight={600}
          >
            Health
            <Box component="span" color="primary.main">
              care
            </Box>{" "}
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy | Terms & Condition
          </Typography>
        </Stack>
      </Container>
  );
};

export default Footer;
