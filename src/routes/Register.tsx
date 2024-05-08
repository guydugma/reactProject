import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";
import patterns from "../validation/patterns";
import "./Register.scss";
import { DevTool } from "@hookform/devtools";
import { BsEye, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { registerMock } from "../mocks/register";
import auth from "../services/auth";
import dialogs from "../ui/dialogs";
import { useNavigate } from "react-router-dom";
import { Button, Divider, FormControl, FormControlLabel, IconButton, Input, InputAdornment, OutlinedInput, Stack, TextField } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({
    defaultValues: registerMock,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const onRegister = (data: RegisterUser) => {
    auth
      .register(data) //request
      .then((res) => {
        //201 response
        localStorage.setItem("user_id", res.data._id);
        dialogs.success("Success", "Register").then(() => {
          navigate("/login");
        });
      })
      .catch((e) => {
        dialogs.error("Error", e.response.data);
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onRegister)}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} overflow={"auto"}
          divider={<Divider orientation="vertical" flexItem />}>
          {/* firstName */}

          <TextField
            placeholder="First Name"
            type="text"
            {...register("name.first", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
            fullWidth
          />
          {errors.name?.first && (
            <p className="text-red-500">{errors.name?.first?.message}</p>
          )}


          {/* middle */}

          <TextField
            placeholder="Middle Name"
            type="text"
            {...register("name.middle", {
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
            fullWidth />
          {errors.name?.middle && (
            <p className="text-red-500">{errors.name?.middle?.message}</p>
          )}


          {/* last */}

          <TextField
            placeholder="Last Name"
            type="text"
            {...register("name.last", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
            fullWidth />
          {errors.name?.last && (
            <p className="text-red-500">{errors.name?.last?.message}</p>
          )}

        </Stack>
        <Divider variant="middle" component={"div"} />
        {/* phone */}
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4, marginTop: 4 }} overflow={"auto"}>
          <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }} overflow={"auto"}>

            <TextField
              placeholder="Phone"
              type="tel"
              {...register("phone", {
                required: "This field is mandatory",
                minLength: { value: 9, message: "Too short" },
                maxLength: { value: 14, message: "Too long" },
              })}
              fullWidth />
            {errors.phone && (
              <p className="text-red-500">{errors.phone?.message}</p>
            )}


            {/* email */}

            <TextField
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "This field is mandatory",
                pattern: {
                  value: patterns.email,
                  message: "Invalid email",
                },
              })}
              fullWidth />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}


            {/* password */}

            <div className="password-container">
              <OutlinedInput
                placeholder="Password"
                type={showPassword ? `text` : `password`}
                endAdornment={<InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>}
                {...register("password", {
                  required: "This field is mandatory",
                  pattern: {
                    value: patterns.password,
                    message:
                      "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
                  },
                })}
                fullWidth
              />

              {/* <button
                type="button"
                onClick={() => {
                  setShowPassword((s) => !s);
                }}
              >
                {showPassword ? <BsEyeSlashFill /> : <BsEye />}
              </button> */}
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}


            {/* image.url */}

            <TextField
              placeholder="Image URL"
              type="url"
              {...register("image.url", {
                pattern: {
                  value: patterns.url,
                  message: "Invalid image URL",
                },
              })}
              fullWidth />
            {errors.image?.url && (
              <p className="text-red-500">{errors.image?.url?.message}</p>
            )}


            {/* image.alt */}

            <TextField
              placeholder="Image Description"
              type="text"
              {...register("image.alt", {
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
              fullWidth />
            {errors.image?.alt && (
              <p className="text-red-500">{errors.image?.alt?.message}</p>
            )}

            {/* isBusiness */}
            <FormControl>
              <FormControlLabel control={<Checkbox {...register("isBusiness")} />} label="Buisness" />
              {errors.isBusiness && (
                <p className="text-red-500">{errors.isBusiness?.message}</p>
              )}
            </FormControl>

          </Stack>
          {/* address.state */}
          <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }} overflow={"auto"}>

            <TextField
              placeholder="State"
              type="text"
              {...register("address.state", {
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
              fullWidth />
            {errors.address?.state && (
              <p className="text-red-500">{errors.address?.state?.message}</p>
            )}


            {/* address.country */}

            <TextField
              placeholder="Country"
              type="text"
              {...register("address.country", {
                required: "This field is mandatory",
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
            />
            {errors.address?.country && (
              <p className="text-red-500">{errors.address?.country?.message}</p>
            )}


            {/* address.city */}

            <TextField
              placeholder="City"
              type="text"
              {...register("address.city", {
                required: "This field is mandatory",
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
            />
            {errors.address?.city && (
              <p className="text-red-500">{errors.address?.city?.message}</p>
            )}


            {/* address.street */}

            <TextField
              placeholder="Street"
              type="text"
              {...register("address.street", {
                required: "This field is mandatory",
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
            />
            {errors.address?.street && (
              <p className="text-red-500">{errors.address?.street?.message}</p>
            )}


            {/* address.houseNumber */}

            <TextField
              placeholder="House Number"
              type="number"
              {...register("address.houseNumber", {
                required: "This field is mandatory",
                min: { value: 2, message: "Too small" },
                max: { value: 256, message: "Too big" },
              })}
            />
            {errors.address?.houseNumber && (
              <p className="text-red-500">
                {errors.address?.houseNumber?.message}
              </p>
            )}


            {/* address.zip */}

            <TextField
              placeholder="Zip"
              type="number"
              {...register("address.zip", {
                required: "This field is mandatory",
                min: { value: 2, message: "Too small" },
                max: { value: 256, message: "Too big" },
              })}
            />
            {errors.address?.zip && (
              <p className="text-red-500">{errors.address?.zip?.message}</p>
            )}



          </Stack>
        </Stack>
        <Button type="submit">Register</Button>

      </form>
      {/* <DevTool control={control} /> */}
    </div >
  );
};

export default Register;
