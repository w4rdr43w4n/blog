import "./styles/components.css"
import { ReactNode } from "react"

export default function Header({children}:{children:ReactNode}){
  return (
    <header>
      {children}
    </header>
  )
}