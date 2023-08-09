import { Grid } from "@mui/material";
import Input from "../../../components/Input/Input";

const FormRegister = ({ register }: any) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Input
          label="Nome completo"
          fullWidth
          margin="normal"
          register={register("name")}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          fullWidth
          label="Email"
          margin="normal"
          register={register("email")}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          fullWidth
          label="Senha"
          margin="normal"
          type="password"
          register={register("password")}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          fullWidth
          label="Confirmação de senha"
          type="password"
          register={register("confirmPassword")}
        />
      </Grid>
    </Grid>
  );
};

export default FormRegister;
