"use client";
import assets from "@/assets";
import { registerPatient } from "@/services/actions/registerPatient";
import { modifyPayload } from "@/utils/modifyFormData";
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
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const response = await registerPatient(data);
      console.log("Register patient response: ", response);
      if (response?.data?.id) {
        toast.success(response?.message);
        router.push("/login");
      }
    } catch (error: any) {
      console.log("Error in registerPatient: ", error.message);
    }
    console.log(data);
  };

  return (
    <Container
      sx={{
        padding: "50px",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
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
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
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
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Box mt={2} textAlign="center">
                <Button type="submit" fullWidth={true}>
                  Register
                </Button>
                <Typography sx={{ mt: 2 }} component="p" fontWeight={400}>
                  Do you already have an account?{" "}
                  <Link className="text-blue-500 font-medium" href={"/login"}>
                    Login
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

export default RegisterPage;
