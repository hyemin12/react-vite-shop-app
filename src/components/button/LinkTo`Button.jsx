import { Link } from "react-router-dom";

const LinkButton = ({ path, text }) => {
  return <Link to={path}>{text}</Link>;
};
