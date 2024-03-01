"use client";
import { useEffect, useState } from "react";
import styles from "./styles/FeedbackFAB.module.css";
import Image from "next/image";
import img1 from "../assets/Frame 2330.png";
import img2 from "../assets/Vector (1).png";
import img3 from "../assets/feedback 2.png";
import img4 from "../assets/Vector.png";
import img5 from "../assets/like 1.png";
import img6 from "../assets/Group.png";
import ReportAnIssueCard from "./ReportAnIssueCard";
import ShareFeedbackCard from "./ShareFeedbackCard";
import GiveSuggestionCard from "./GiveSuggestionCard";
import ContactUsCard from "./ContactUsCard";
import MessageWithArrow from "./MessageWithArrow";

const FeedbackFAB = ({ isLoin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFAB, setIsOpenFAB] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submit, setSubmit] = useState(null);

  const textReport =
    "Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!";
  const textFeedback = "Thanks for your valuable feedback!";
  const textSuggestion = "Thanks for your valuable suggestion!";
  const textContact = "We will get back to you as soon as possible!";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsOpenFAB(false);
      setSelectedOption(null);
    }
  };

  const handleFAB = (option) => {
    setIsOpenFAB(true);
    setSelectedOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      setSubmit(null);
    }, 5000);
  }, [submit]);

  return (
    <div className={styles.fabContainer}>
      <button className={`${styles.fabButton} `} onClick={toggleMenu}>
        {isOpen ? (
          <Image className={styles.BtnImg} src={img2} alt="" />
        ) : (
          <Image className={styles.BtnImg} src={img1} alt="" />
        )}
      </button>
      {isOpen && (
        <div
          className={`${styles.optionsContainer} ${
            isOpenFAB ? styles.openFAB : ""
          }`}
        >
          <div
            className={`${styles.option} ${isOpenFAB ? styles.optionFAB : ""}`}
          >
            <span
              className={`${styles.optionsText} ${
                isOpenFAB ? styles.hideText : ""
              }`}
              onClick={() => handleFAB("report")}
            >
              Report an Issue
            </span>

            <button
              className={`${styles.fabButton} ${
                selectedOption === "report" ? styles.selectedOption : ""
              } `}
              onClick={() => handleFAB("report")}
            >
              <Image className={styles.BtnImg} src={img6} alt="" />
            </button>
          </div>
          <div
            className={`${styles.option} ${isOpenFAB ? styles.optionFAB : ""}`}
          >
            <span
              className={`${styles.optionsText} ${
                isOpenFAB ? styles.hideText : ""
              }`}
              onClick={() => handleFAB("Feedback")}
            >
              Share Feedback
            </span>

            <button
              className={`${styles.fabButton} ${
                selectedOption === "Feedback" ? styles.selectedOption : ""
              } `}
              onClick={() => handleFAB("Feedback")}
            >
              <Image className={styles.BtnImg} src={img5} alt="" />
            </button>
          </div>
          <div
            className={`${styles.option} ${isOpenFAB ? styles.optionFAB : ""}`}
          >
            <span
              className={`${styles.optionsText} ${
                isOpenFAB ? styles.hideText : ""
              }`}
              onClick={() => handleFAB("Suggestion")}
            >
              Give Suggestion
            </span>

            <button
              className={`${styles.fabButton} ${
                selectedOption === "Suggestion" ? styles.selectedOption : ""
              } `}
              onClick={() => handleFAB("Suggestion")}
            >
              <Image className={styles.BtnImg} src={img4} alt="" />
            </button>
          </div>
          <div
            className={`${styles.option} ${isOpenFAB ? styles.optionFAB : ""}`}
          >
            <span
              className={`${styles.optionsText} ${
                isOpenFAB ? styles.hideText : ""
              }`}
              onClick={() => handleFAB("contact")}
            >
              Contact Us
            </span>

            <button
              className={`${styles.fabButton} ${
                selectedOption === "contact" ? styles.selectedOption : ""
              } `}
              onClick={() => handleFAB("contact")}
            >
              <Image className={styles.BtnImg} src={img3} alt="" />
            </button>
          </div>
        </div>
      )}
      {selectedOption === "report" ? (
        <ReportAnIssueCard
          setSubmit={setSubmit}
          setIsOpen={setIsOpen}
          setSelectedOption={setSelectedOption}
          setIsOpenFAB={setIsOpenFAB}
          isLoin={isLoin}
        />
      ) : (
        ""
      )}
      {selectedOption === "Feedback" ? (
        <ShareFeedbackCard
          setSubmit={setSubmit}
          setIsOpen={setIsOpen}
          setSelectedOption={setSelectedOption}
          setIsOpenFAB={setIsOpenFAB}
          isLoin={isLoin}
        />
      ) : (
        ""
      )}
      {selectedOption === "Suggestion" ? (
        <GiveSuggestionCard
          setSubmit={setSubmit}
          setIsOpen={setIsOpen}
          setSelectedOption={setSelectedOption}
          setIsOpenFAB={setIsOpenFAB}
          isLoin={isLoin}
        />
      ) : (
        ""
      )}
      {selectedOption === "contact" ? (
        <ContactUsCard
          setSubmit={setSubmit}
          setIsOpen={setIsOpen}
          setSelectedOption={setSelectedOption}
          setIsOpenFAB={setIsOpenFAB}
          isLoin={isLoin}
        />
      ) : (
        ""
      )}

      {submit === "report" ? <MessageWithArrow text={textReport} /> : ""}
      {submit === "Feedback" ? <MessageWithArrow text={textFeedback} /> : ""}
      {submit === "Suggestion" ? (
        <MessageWithArrow text={textSuggestion} />
      ) : (
        ""
      )}
      {submit === "contact" ? <MessageWithArrow text={textContact} /> : ""}
    </div>
  );
};

export default FeedbackFAB;
