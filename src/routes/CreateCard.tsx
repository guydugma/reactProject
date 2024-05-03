import { useNavigate } from "react-router-dom";
import { CardType, RegisterUser } from "../@types/types";
import { useForm } from "react-hook-form";
import { registerMock } from "../mocks/register";
import { useEffect, useState } from "react";
import auth from "../services/auth";
import { createCard } from '../services/cards';
import dialogs from "../ui/dialogs";

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
    <div className="register-container">
      <h2>Create Card</h2>
      <form noValidate onSubmit={handleSubmit(onCardCreation)}>
        {/* firstName */}
          <input
            placeholder="title"
            type="text"
            {...register("title", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title?.message}</p>
        )}
        
        <input
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
        
        <textarea
          placeholder="description"
          {...register("description", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 1023, message: "Too long" },
          })}></textarea>
        
        <input
          placeholder="phone"
          type="text"
          {...register("phone", {
            required: "This field is mandatory",
            minLength: { value: 9, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />

        <input 
          placeholder="email"
          type="text"
          {...register("email", {
            required: "This field is mandatory",
            minLength: { value: 5, message: "Too short" },
          })}
        />

        <input
          placeholder="web"
          type="text"
          {...register("web", {
            minLength: { value: 14, message: "Too short" },
          })}
        />

        <input
          placeholder="image url"
          type="url"
          {...register("image.url", {
            required: "This field is mandatory",
            minLength: { value: 14, message: "Too short" },
          })}
        />

        <input
          placeholder="image alt"
          type="text"
          {...register("image.alt", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />

        <input
          placeholder="state"
          type="text"
          {...register("address.state", {})}
        />

        <input 
          placeholder="country"
          type="text"
          {...register("address.country", {
            required: "This field is mandatory",
          })}
        />

        <input 
          placeholder="city"
          type="text"
          {...register("address.city", {
            required: "This field is mandatory",
          })}
        />

        <input 
          placeholder="street"
          type="text"
          {...register("address.street", {
            required: "This field is mandatory",
          })}
        />

        <input 
          placeholder="house number"
          type="number"
          {...register("address.houseNumber", {
            required: "This field is mandatory",
          })}
        />

        <input 
          placeholder="zip"
          type="number"
          {...register("address.zip", {})}
        />

        <button type="submit">Create</button>

        </form>
      </div>
  )
}

export default CreateCard;