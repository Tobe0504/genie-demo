import classes from "./Card.module.css";

type CardTypes = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardTypes) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};

export default Card;
