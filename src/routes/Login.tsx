import { useForm } from "react-hook-form";
import { LoginUser } from "../@types/types";
import patterns from "../validation/patterns";
import auth from "../services/auth";
import dialogs, { showSuccessDialog } from "../ui/dialogs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = (data: LoginUser) => {
    auth
      .login(data)
      .then((res) => {
        showSuccessDialog("Login", "Logged in").then(() => {
          login(res.data);
          // send the user to home page
          navigate("/cards");
        });
      })
      .catch((e) => {
        dialogs.error("Login Error", e.response.data);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  return (
    <Container>

      <Typography variant="h4" sx={{ mb: 2 }}>Login Page</Typography>
      <form noValidate onSubmit={handleSubmit(onLogin)}>
        {/* email */}
        <Stack sx={{ gap: 2, width: "50%" }}>
          <TextField
            placeholder="Email"
            autoCapitalize="true"
            autoCorrect="false"
            autoComplete="email"
            type="email"
            {...register("email", {
              required: "This field is mandatory",
              pattern: patterns.email,
            })}
          />
          {errors.email && <p>{errors.email?.message}</p>}


          {/* password */}

          <TextField
            autoComplete="current-password"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "This field is mandatory",
              pattern: patterns.password,
            })}
          />
          {errors.password && <p>{errors.password?.message}</p>}


          <button>Login</button>
        </Stack>
      </form>

    </Container>
  );
};

export default Login;
