import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <Card>
      <p>This is a react app created to collect feedbacks.</p>
      <p>
        {" "}
        Inspired by projects in <i>Brad Traversy's ReactJS Course 2022</i>
      </p>
      <p> Version: 1.0.0 </p>
      <br />
      <Link to="/">
        <h5>Go back to Home</h5>
      </Link>
    </Card>
  );
}
