
import { useState } from "react";
import styles from "./TodoItem.module.css";
import { Trash, Circle, CheckCircle } from "@phosphor-icons/react";

interface TodoItemProps {
  textItem: string;
  onClickTrash: () => void;
  onSelected: (isSelected: boolean) => void;
}



export function TodoItem({textItem, onClickTrash, onSelected}: TodoItemProps) { 
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelectableItem = () => {
    setIsSelected((prevState) =>  !prevState )
    onSelected(!isSelected)
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={handleSelectableItem}>
          { isSelected ?
            (<CheckCircle size="1.5rem" weight="fill" color="#5E60CE"/>)
            :
            (<Circle size="1.5rem" color="#4EA8DE"/>)
          }
        </button>
        <p className={isSelected ? styles.selectable : ''} >{textItem}</p>
      </div>

      <button onClick={onClickTrash}>
        <Trash size="1.5rem"/>
      </button>
    </div>
  )
}