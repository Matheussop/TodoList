
import styles from "./Input.module.css";

export function InputText(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) { 
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" {...props} />
    </div>
  )
}