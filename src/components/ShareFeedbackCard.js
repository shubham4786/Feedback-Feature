import { useEffect, useState } from "react";
import styles from "./styles/ReportAnIssueCard.module.css";

const ShareFeedbackCard = ({
  setSubmit,
  setIsOpen,
  setSelectedOption,
  setIsOpenFAB,
  isLoin,
}) => {
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmit("Feedback");
      setSelectedOption(null);
      setIsOpen(false);
      setIsOpenFAB(false);
      setEmail("");
      setDescription("");
    }, 500);
  };

  const handleAttachedButton = () => {
    console.log("handleAttachedButton");
  };

  useEffect(() => {
    if (isLoin) {
      setEmail("abc@gmail.com");
    } else {
      setEmail("");
    }
  }, [isLoin]);

  useEffect(() => {
    if (description && email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [description, email]);

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.headText}>
          Let us know your Feedback
          <br /> about us!
        </p>
      </div>
      <hr />
      <div className={styles.formField}>
        <div className={styles.description}>
          <div className={styles.textarea}>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Write here..."
            />
            <div className={styles.attached}>
              <button
                className={styles.attachedButton}
                onClick={handleAttachedButton}
              >
                Attach
              </button>
            </div>
          </div>

          {!isLoin && (
            <div className={styles.description}>
              <label>Enter your email to receive an update *</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your Email"
              />
            </div>
          )}

          <div className={styles.submitBTN}>
            <button onClick={handleSubmit} disabled={isDisabled}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareFeedbackCard;
