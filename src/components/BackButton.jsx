import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        // navigate("/app/cities");
        navigate(-1);
      }}
    >
      Back &larr;
    </Button>
  );
}

export default BackButton;
