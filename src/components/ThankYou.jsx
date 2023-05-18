import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function ThankYou() {
  return (
    <>
      <div>
        <div className="thank-you | content-flow">
          <div className="check-circle">
            <FontAwesomeIcon className="check" icon={faCheck} />
          </div>

          <h1 className="title">Thank You!</h1>

          <p className="thank-you-details">We've added your card details</p>
        </div>
        <button className="button">Continue</button>
      </div>
    </>
  );
}
