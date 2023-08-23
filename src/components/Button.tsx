import styles from "./Button.module.css";
import React, { cloneElement} from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: JSX.Element;
}

export function Button({ text, onClick, icon }: ButtonProps) { 
  return (
    <div className={styles.wrapper}>
      <button onClick={onClick}>{text}
        {icon && cloneElement(icon, { size: '1.5rem'})}
      </button>
    </div>
  )
}