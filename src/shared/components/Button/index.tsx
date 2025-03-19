import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = "primary", className }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]} ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
