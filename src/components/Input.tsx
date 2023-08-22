import { itemListProps } from "../App";

interface InputProps{
  addList: (item: itemListProps) => void;
}
export function Input({addList}: InputProps) { 
  return (
    <div>Just a input</div>
  )
}