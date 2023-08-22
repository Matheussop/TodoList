import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { EmptyList } from './components/EmptyList'
import { Input } from './components/Input'

export interface itemListProps {
  id: string
  name: string
}
function App() {
  const [todoList, setTodoList] = useState<itemListProps[]>([] as itemListProps[])

  const handleAddList = (newItem: itemListProps) => {
    setTodoList(prevList => [...prevList, newItem])
  }

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.inputSimulation}>
          <Input addList={handleAddList}/>
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
            { todoList.length > 0 ? 
              (<div className={styles.emptyList}>
                <p>
                  Tarefas Criadas
                </p>
              </div>)
              :
              (<div className={styles.emptyList}>
                <EmptyList/>
              </div>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
