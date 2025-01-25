"use client";
import assets from "@/assets";
import { userLogin } from "@/services/actions/userLogin";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type InputFieldValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputFieldValues>();
  const onSubmit: SubmitHandler<InputFieldValues> = async (values) => {
    try {
      const response = await userLogin(values);
      console.log(response);
      if(response?.data?.accessToken){
        toast.success(response?.message);
      }
    } catch (error: any) {
      console.log("Error in Login: ", error.message);
    }
  };

  return (
    <Container sx={{}}>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  Patient Login
                </Typography>
              </Box>
            </Stack>
            <Box>
              <Grid container spacing={3} my={1}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  textAlign: "end",
                }}
              >
                <Typography sx={{ mt: 2 }} component="p" fontWeight={400}>
                  <Link href={"#"}>Forgot Password?</Link>
                </Typography>
              </Box>
              <Box mt={2} textAlign="center">
                <Button type="submit" fullWidth={true}>
                  Login
                </Button>
                <Typography sx={{ mt: 2 }} component="p" fontWeight={400}>
                  Don&apos;t have an account?{" "}
                  <Link
                    className="text-blue-500 font-medium"
                    href={"/register"}
                  >
                    Create an account
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </form>
      </Stack>
    </Container>
  );
};

export default LoginPage;
