import { useEffect, useState } from "react";
import styles from "./styles/ReportAnIssueCard.module.css";

const ContactUsCard = ({
  setSubmit,
  setIsOpen,
  setSelectedOption,
  setIsOpenFAB,
  isLoin,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmit("contact");
      setSelectedOption(null);
      setIsOpen(false);
      setIsOpenFAB(false);
      setName("");
      setDescription("");
      setNumber("");
      setEmail("");
    }, 500);
  };

  const handleAttachedButton = () => {
    console.log("handleAttachedButton");
  };

  useEffect(() => {
    if (isLoin) {
      setEmail("abc@gmail.com");
      setNumber(6853268532);
    } else {
      setEmail("");
      setNumber("");
    }
  }, [isLoin]);

  useEffect(() => {
    if (name && description && email && number) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, description, email, number]);

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.headText}>
          Let us know what your queries
          <br /> are!
        </p>
      </div>
      <hr />
      <div className={styles.formField}>
        <div className={styles.description}>
          <div className={styles.description}>
            <label>Your Name *</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your Name"
            />
          </div>

          {!isLoin && (
            <>
              <div className={styles.description}>
                <label>Your Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your Email"
                />
              </div>
              <div className={styles.description}>
                <label>Your Mobile number *</label>
                <input
                  type="number"
                  value={number}
                  onChange={handleNumberChange}
                  placeholder="Enter your Number"
                />
              </div>
            </>
          )}

          <label>What would you like to ask? *</label>
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

export default ContactUsCard;
