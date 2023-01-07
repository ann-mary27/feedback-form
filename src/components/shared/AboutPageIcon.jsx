import { Link } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";
export default function AboutPageIcon() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaRegQuestionCircle size={30} />
      </Link>
    </div>
  );
}
