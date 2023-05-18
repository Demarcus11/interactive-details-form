import { useForm } from "react-hook-form";
import { useState } from "react";
import { ThankYou } from "./components/ThankYou";
import { Form } from "./components/Form";
import { Cards } from "./components/Cards";

import "./style.css";

export default function App() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCardNumberChange = (label) => {
    let formattedValue = label.replace(/\s+/g, ""); // Remove all existing spaces
    formattedValue = formattedValue.replace(/(\d{4})/g, "$1 "); // Add space after every 4 characters
    return formattedValue;
  };

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      cardNumber: "",
    },
  });
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = () => {
    // Set isSubmitted to true when form is valid
    setIsSubmitted(true);
  };

  return (
    <>
      <main className="interactive-cards | content-grid">
        <Cards
          focusedInput={focusedInput}
          handleCardNumberChange={handleCardNumberChange}
          watch={watch}
        />

        <div className="interactive-details-form | container">
          {isSubmitted ? (
            <ThankYou />
          ) : (
            <Form
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              setFocusedInput={setFocusedInput}
              errors={errors}
            />
          )}
        </div>
      </main>
    </>
  );
}
