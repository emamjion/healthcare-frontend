import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        my: 16,
        direction: "row",
      }}
    >
      {/* left content */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Box >
          <Box>
            <Typography variant="h3" component="h1" fontWeight={500}>
              Healthier Hearts
            </Typography>
            <Typography variant="h3" component="h1" fontWeight={500}>
              Come From
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              color="primary.main"
              fontWeight={500}
            >
              Preventive Care
            </Typography>
          </Box>
          <Typography
            variant="h6"
            component="p"
            fontWeight={400}
            sx={{
              my: 4,
            }}
            color="textSecondary"
          >
            Healthier hearts thrive with preventive care—regular check-ups,
            balanced diets, exercise, and stress control. These proactive steps
            build a strong foundation for lasting cardiovascular wellness.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button>Make Appointment</Button>
            <Button variant="outlined">Contact Us</Button>
          </Box>
        </Box>
      </Box>
      {/* Right content */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="Doctor 1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="Doctor 2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "228px",
            left: "155px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor 3"
            width={240}
            height={240}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-35px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="stethoscope"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
