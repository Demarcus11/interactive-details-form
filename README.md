# Frontend Mentor - Interactive card details form

![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this interactive card details form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Expected behaviour

- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Desktop](https://drive.google.com/uc?export=view&id=1Gs8Etq7kIapyq-fthMWd1ZtJS_sbxa9D)
![Mobile](https://drive.google.com/uc?export=view&id=1q5aFQyxuI9NpjQxgE43beqDC_3QFFsTp)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/interactive-details-form.git)
- Live Site URL: [Live](https://demarcus11.github.io/interactive-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Using useForm to handle forms in React and passing the input field data between components

```jsx
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
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)
