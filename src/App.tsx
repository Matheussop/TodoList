import styles from './App.module.css'
import { Header } from './components/Header'


function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.inputSimulation}>
          <div>Just a input</div>
        </div>

        <div className={styles.todoList}>
          <div className={styles.listHeader}>
            <div className={styles.todoCreated}>
              <text>
                Tarefas criadas
              </text>
              <span>
                0
              </span>
            </div>
            <div className={styles.todoDone}>
              <text>
                Concluídas
              </text>
              <span>
                0
              </span>
            </div>
          </div>
          <div className={styles.container}>
            <div>Just a body</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
