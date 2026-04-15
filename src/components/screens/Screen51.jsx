import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Screen51({ onNext, onBack, isFirst, direction }) {
  const [answer, setAnswer] = useState(null);
  const [showChooseMoment, setShowChooseMoment] = useState(false);

  const handleDeal = () => {
    setAnswer(null);
    setShowChooseMoment(true);
  };

  return (
    <>
      <motion.button
        className="nav-button back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={onBack}
        disabled={isFirst}
      >
        ← Back
      </motion.button>

      <motion.section
        className="screen screen51-final"
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="story-text screen51-text"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {"so…\n\nwhat do you say? 🙂"}
        </motion.p>

        <AnimatePresence mode="wait">
          {showChooseMoment ? (
            <motion.div
              key="choose-moment"
              className="screen51-choose-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <motion.img
                src="/images/chooose.jpeg"
                alt="Choose moment"
                className="screen51-choose-image"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="story-text screen51-response">Yeah i choose you too</p>
              <motion.button
                type="button"
                className="screen51-button screen51-diary"
                onClick={() => onNext?.()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
              >
                Go to diary
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="deal-actions"
              className="screen51-actions-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <motion.div
                className="screen51-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <motion.button
                  type="button"
                  className="screen51-button screen51-deal"
                  onClick={handleDeal}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                >
                  Deal 😌
                </motion.button>

                <motion.button
                  type="button"
                  className="screen51-button screen51-no-deal"
                  onClick={() => setAnswer("no-deal")}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                >
                  No deal 😅
                </motion.button>
              </motion.div>

              {answer === "no-deal" ? (
                <motion.div
                  key={answer}
                  className="screen51-response-wrap"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="story-text screen51-response">Break up??</p>
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
