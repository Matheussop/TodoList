
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
  const [isHovered, setIsHovered] = useState(false);

  const handleSelectableItem = () => {
    setIsSelected((prevState) =>  !prevState )
    onSelected(!isSelected)
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={handleSelectableItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          { isSelected ?
            (<CheckCircle className={styles.selectable} size="1.5rem"
              weight="fill" 
              color="#5E60CE"/>)
            :
            ( <Circle className={styles.notSelectable} 
                weight={isHovered ? 'light' : 'duotone'} 
                size="1.5rem" color="#4EA8DE">
              </Circle>)
          }
          <p className={isSelected ? styles.selectable : ''} >{textItem}</p>
        </button>
      </div>

      <button onClick={onClickTrash} className={styles.btnTrash}>
        <Trash size="1.5rem"/>
      </button>
    </div>
  )
}