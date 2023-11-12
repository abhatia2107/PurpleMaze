import React, { useState } from "react";
import "./FoldableFAQ.css";
import questionicon from "../images/question_icon.png";
import dompurify from "dompurify";

const FoldableFAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  const sanitizer = dompurify.sanitize;

  return (
    <div className="cursor-pointer flex items-center gap-3" onClick={toggleFAQ}>
      <img src={questionicon} alt="question mark" />
      {isOpen && (
        <div className="flex flex-col space-y-2 pt-8">
          <span className="font-bold">{question}</span>
          <p dangerouslySetInnerHTML={{ __html: sanitizer(answer) }}></p>
        </div>
      )}

      {!isOpen && (
        <div className="flex space-x-2">
          <span className="font-bold">{question}</span>
          <div className="py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill="none"
                stroke="#3652D9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="1"
                strokeWidth="2"
                d="M8 1 8 15M1 8 15 8"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoldableFAQ;
