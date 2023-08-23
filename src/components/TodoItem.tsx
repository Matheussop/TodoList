
import styles from "./TodoItem.module.css";
import { Trash, Circle } from "@phosphor-icons/react";

interface TodoItemProps {
  textItem: string;
  onClick: () => void;
}

export function TodoItem({textItem, onClick}: TodoItemProps) { 
  return (
    <div className={styles.wrapper}>
      <div>
        <Circle size="1.5rem" color="#4EA8DE"/>
        <p>{textItem}</p>
      </div>

      <button onClick={onClick}>
        <Trash size="1.5rem"/>
      </button>
    </div>
  )
}