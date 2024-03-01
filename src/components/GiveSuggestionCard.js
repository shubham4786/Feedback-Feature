import { useEffect, useState } from "react";
import styles from "./styles/ReportAnIssueCard.module.css";

const GiveSuggestionCard = ({
  setSubmit,
  setIsOpen,
  setSelectedOption,
  setIsOpenFAB,
  isLoin,
}) => {
  const [section, setSection] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmit("Suggestion");
      setSelectedOption(null);
      setIsOpen(false);
      setIsOpenFAB(false);
      setSection("");
      setDescription("");
      setEmail("");
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
  }, [section, description, email]);

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.headText}>
          Share your Suggestions with us
          <br /> for a chance to earn rewards!
        </p>
      </div>
      <hr />
      <div className={styles.formField}>
        <label>Choose a section</label>
        <select value={section} onChange={handleSectionChange}>
          <option value="interview">Interview Questions</option>
          <option value="concept">Concept</option>
          <option value="landing">Landing</option>
        </select>
        <label>Describe the suggestion in detail *</label>
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

export default GiveSuggestionCard;
