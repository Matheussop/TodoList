
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
}

export function TodoItem({text}: TodoItemProps) { 
  return (
    <div className={styles.wrapper}>
      <p>{text}</p>
    </div>
  )
}