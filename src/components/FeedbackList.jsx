import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import Spinner from "./shared/Spinner";
import FeedbackContext from "../context/FeedbackContext";
import { AnimatePresence, motion } from "framer-motion";
function FeedbackList() {
  const {isLoading, feedback} = useContext(FeedbackContext);
  

  return isLoading ? <Spinner /> : (!isLoading) && (!feedback || feedback.length === 0) ? 
      
      <div className="feedback-list">
        <p>No list yet</p>
      </div>
    :( <div className="feedback-list">
    <AnimatePresence>
    {feedback.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <FeedbackItem key={item.id} item={item} />
      </motion.div>
    ))}
  </AnimatePresence>
</div>)
}
 


export default FeedbackList;