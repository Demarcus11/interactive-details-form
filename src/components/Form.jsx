/* eslint-disable react/prop-types */
export function Form({
  handleSubmit,
  onSubmit,
  register,
  setFocusedInput,
  errors,
}) {
  return (
    <form
      className="form | content-flow"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <fieldset>
        <legend className="visually-hidden">Card Details</legend>
        <div>
          <label className="form-label name-label" htmlFor="cardName">
            Cardholder Name
          </label>
          <input
            className={`form-input name-input ${
              errors.cardName ? "input-error" : ""
            }`}
            type="text"
            placeholder="e.g. Jane Appleseed"
            id="cardName"
            name="cardName"
            {...register("cardName", {
              required: "Can't be blank",
            })}
            onFocus={() => setFocusedInput("cardName")}
            onBlur={() => setFocusedInput(null)}
          />
          <p className="error">{errors.cardName?.message}</p>
        </div>
        <div>
          <label className="form-label number-label" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className={`form-input ${errors.cardNumber ? "input-error" : ""}`}
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            id="cardNumber"
            {...register("cardNumber", {
              required: {
                value: true,
                message: "Can't be blank",
              },
              pattern: {
                value: /^[0-9\s]+$/,
                message: "Wrong format, numbers only",
              },
            })}
            onFocus={() => setFocusedInput("cardNumber")}
            onBlur={() => setFocusedInput(null)}
          />
          <p className="error">{errors.cardNumber?.message}</p>
        </div>
        <div className="exp-cvc-group | flex-group">
          <div className="form-group">
            <label className="form-label" htmlFor="exp">
              Exp. Date (MM/YY)
            </label>
            <div className="exp-date | flex-group">
              <input
                className={`form-input ${
                  errors.cardMonth ? "input-error" : ""
                }`}
                id="exp"
                type="text"
                placeholder="MM"
                {...register("cardMonth", {
                  required: "Can't be blank",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Wrong format, numbers only",
                  },
                })}
                onFocus={() => setFocusedInput("cardMonth")}
                onBlur={() => setFocusedInput(null)}
              />
              <input
                className={`form-input ${errors.cardYear ? "input-error" : ""}`}
                id="exp"
                type="text"
                placeholder="YY"
                {...register("cardYear", {
                  required: "Can't be blank",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Wrong format, numbers only",
                  },
                })}
                onFocus={() => setFocusedInput("cardYear")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <p className="error">
              {errors.cardMonth?.message || errors.cardYear?.message}
            </p>
          </div>

          <div>
            <label className="form-label cvc-label" htmlFor="cvc">
              Cvc
            </label>
            <input
              className={`form-input ${errors.cardCvc ? "input-error" : ""}`}
              type="text"
              placeholder="e.g. 123"
              id="cvc"
              {...register("cardCvc", {
                required: "Can't be blank",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Wrong format, numbers only",
                },
              })}
              onFocus={() => setFocusedInput("cardCvc")}
              onBlur={() => setFocusedInput(null)}
            />
            <p className="error">{errors.cardCvc?.message}</p>
          </div>
        </div>
      </fieldset>
      <button className="button" type="submit">
        Confirm
      </button>
    </form>
  );
}
