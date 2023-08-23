import { useState } from 'react'
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css'
import { Header } from './components/Header'
import { EmptyList } from './components/EmptyList'
import { InputText } from './components/Input'
import { Button } from './components/Button'
import { TodoItem } from './components/TodoItem';

export interface ItemListProps {
  id: string
  text: string
}
function App() {
  const [todoList, setTodoList] = useState<ItemListProps[]>([] as ItemListProps[])
  const [valueInput, setValueInput] = useState("")


  const handleAddList = () => {
    if (valueInput == "") {
      alert("Pf escreva algo no campo")
      return 
    }
    
    const newItemList = { id: uuidv4(), text: valueInput }
    setTodoList(prevList => [...prevList, newItemList])
  }

  const handleChangeText = (value: any) => {
    setValueInput(value.target.value)
  }
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <InputText value={valueInput} onChange={handleChangeText}/>
          <Button text="Criar" onClick={handleAddList} icon={<PlusCircle />}/>
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
              (<div className={styles.list}>
                { todoList.map((item) => {
                    return (
                      <TodoItem key={item.id} text={item.text}/>
                    )
                  })
                }
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
