import { useNavigate } from "react-router-dom";
import { CardType } from "../@types/types";
import { useForm } from "react-hook-form";
import { createCard } from '../services/cards';
import dialogs from "../ui/dialogs";
import { Stack, TextField, Typography } from "@mui/material";

const CreateCard = () => {

  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CardType>({
  });


  const onCardCreation = (data: CardType) => {

    createCard(data) //request
      .then((res) => {
        //201 response
        dialogs.success("Success", "Card created").then(() => {
          navigate("/cards");
        });
      })
      .catch((e) => {
        dialogs.error("Error", e.response.data);

      });
  };
  return (
    <Stack className="register-container" direction={"column"} width={"100%"}>
      <Typography variant="h3" color={"primary"}>Create New Card</Typography>
      <form noValidate onSubmit={handleSubmit(onCardCreation)}>
        {/* firstName */}
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4, marginTop: 4 }} overflow={"auto"}>
          <Stack direction={"column"} spacing={2} sx={{ marginBottom: 4, marginTop: 4, width: "50%" }} overflow={"auto"}>
            <TextField
              placeholder="title"
              type="text"
              {...register("title", {
                required: "This field is mandatory",
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
              fullWidth
            />
            {errors.title && (
              <p className="text-red-500">{errors.title?.message}</p>
            )}

            <TextField
              placeholder="subtitle"
              type="text"
              {...register("subtitle", {
                required: "This field is mandatory",
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
            />
            {errors.subtitle && (
              <p className="text-red-500">{errors.subtitle?.message}</p>)}

            <TextField
              placeholder="description"
              {...register("description", {
                required: "This field is mandatory",
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 1023, message: "Too long" },
              })} />

            <TextField
              placeholder="phone"
              type="text"
              {...register("phone", {
                required: "This field is mandatory",
                minLength: { value: 9, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
            />

            <TextField
              placeholder="email"
              type="text"
              {...register("email", {
                required: "This field is mandatory",
                minLength: { value: 5, message: "Too short" },
              })}
            />

            <TextField
              placeholder="web"
              type="text"
              {...register("web", {
                minLength: { value: 14, message: "Too short" },
              })}
            />

            <TextField
              placeholder="image url"
              type="url"
              {...register("image.url", {
                required: "This field is mandatory",
                minLength: { value: 14, message: "Too short" },
              })}
            />
          </Stack>
          <Stack spacing={2} sx={{ marginBottom: 4, marginTop: 4, width: "50%" }} overflow={"auto"} >

            <TextField
              placeholder="image alt"
              type="text"
              {...register("image.alt", {
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 255, message: "Too long" },
              })}
            />

            <TextField
              placeholder="state"
              type="text"
              {...register("address.state", {})}
            />

            <TextField
              placeholder="country"
              type="text"
              {...register("address.country", {
                required: "This field is mandatory",
              })}
            />

            <TextField
              placeholder="city"
              type="text"
              {...register("address.city", {
                required: "This field is mandatory",
              })}
            />

            <TextField
              placeholder="street"
              type="text"
              {...register("address.street", {
                required: "This field is mandatory",
              })}
            />

            <TextField
              placeholder="house number"
              type="number"
              {...register("address.houseNumber", {
                required: "This field is mandatory",
              })}
            />

            <TextField
              placeholder="zip"
              type="number"
              {...register("address.zip", {})}
            />

            <button type="submit">Create</button>
          </Stack>
        </Stack>
      </form>
    </Stack>

  )
}

export default CreateCard;