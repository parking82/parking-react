import { Grid } from "@mui/material";
import Input from "../../../components/Input/Input";
import ErrorMessage from "../../../components/ErrorMessage";

const FormLogin = ({ register, errors }: any) => {
  return (
    <Grid>
      <Input
        margin="normal"
        required
        fullWidth
        label="Email"
        register={register("email")}
      />
      <ErrorMessage message={errors.email?.message} />
      <Input
        margin="normal"
        required
        fullWidth
        label="Senha"
        type="password"
        register={register("password")}
      />
      <ErrorMessage message={errors.password?.message} />
    </Grid>
  );
};

export default FormLogin;
