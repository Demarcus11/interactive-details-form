import cardFront from "../../images/bg-card-front.png";
import cardBack from "../../images/bg-card-back.png";
import cardLogo from "../../images/card-logo.svg";

// eslint-disable-next-line react/prop-types
export function Cards({ focusedInput, handleCardNumberChange, watch }) {
  return (
    <div className="card-previews">
      <div className="card-front">
        <img
          className="card-front-bg"
          src={cardFront}
          alt="Credit Card Front"
        />
        <img className="card-front-logo" src={cardLogo} alt="" />
        <span
          className={`card-front-number ${
            focusedInput === "cardNumber" ? "input-focused" : ""
          }`}
        >
          {handleCardNumberChange(watch("cardNumber")) || "0000 0000 0000 0000"}
        </span>
        <span
          className={`card-front-name ${
            focusedInput === "cardName" ? "input-focused" : ""
          }`}
        >
          {watch("cardName") || "Jane Appleseed"}
        </span>
        <span className="card-front-exp">
          <span
            className={`month ${
              focusedInput === "cardMonth" ? "input-focused" : ""
            }`}
          >
            {watch("cardMonth") || "00"}
          </span>
          /
          <span
            className={`year ${
              focusedInput === "cardYear" ? "input-focused" : ""
            }`}
          >
            {watch("cardYear") || "00"}
          </span>
        </span>
      </div>

      <div className="card-back">
        <img className="card-back-bg" src={cardBack} alt="Credit Card Back" />
        <span
          className={`card-back-cvc ${
            focusedInput === "cardCvc" ? "input-focused" : ""
          }`}
        >
          {watch("cardCvc") || "000"}
        </span>
      </div>
    </div>
  );
}
