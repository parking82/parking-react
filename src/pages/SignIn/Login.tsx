import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../../components/Copyright";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useForm } from "react-hook-form";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar, Stack } from "@mui/material";
import Usuario from "../../interfaces/Usuario";
import FormLogin from "./FormLogin/FormLogin";
import { useState } from "react";
import { useFetch } from "use-http";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>();

  const { post } = useFetch("http://localhost:8080");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    console.log(data);

    try {
      const response = await post(
        `/logar?email=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`,
        data
      );

      if (response.ok) {
        console.log("Login realizado com sucesso!");
        setLoginError(false);
        setLoginSuccess(true);
        setOpen(true);
      } else {
        console.log("Erro ao realizar login!");
        setLoginSuccess(false);
        setLoginError(true);
        setOpen(true);
      }
    } catch (error) {
      console.error("Erro ao enviar a requisição:", error);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {loginError && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Snackbar
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert severity="error" sx={{ width: "100%" }}>
                Login ou senha incorretos!
              </Alert>
            </Snackbar>
          </Stack>
        )}
        {loginSuccess && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Snackbar
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                Login realizado com sucesso!
              </Alert>
            </Snackbar>
          </Stack>
        )}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <DirectionsCarIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormLogin register={register} errors={errors} />
            <FormControlLabel
              style={{ display: "flex" }}
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registrar" variant="body2">
                  {"Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}
