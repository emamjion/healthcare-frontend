import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container
      sx={{
        padding: "50px",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              boxShadow: 1,
              borderRadius: 1,
              p: 4,
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image src={assets.svgs.logo} alt="logo" />
              </Box>
              <Box mt={1}>
                <Typography variant="h6" fontWeight={600}>
                  Patient Register
                </Typography>
              </Box>
            </Stack>
            <Box>
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    // sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    // sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    // sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    // sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    // sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
              <Box mt={2} textAlign="center">
                <Button fullWidth={true}>Register</Button>
                <Typography sx={{mt: 2}} component="p" fontWeight={400}>
                  Do you already have an account?{" "}
                  <Link href={"/login"}>Login</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </form>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
