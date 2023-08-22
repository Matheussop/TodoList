import styles from './EmptyList.module.css'
import { ClipboardText } from '@phosphor-icons/react';

export function EmptyList() {
  return (
    <div className={styles.wrapper}>
      <ClipboardText size={56} />
      <p className={styles.title}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}