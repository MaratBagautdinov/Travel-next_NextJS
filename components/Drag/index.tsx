import {FC, useState} from "react";
import {IDrag} from "./types";

const Drag:FC<IDrag> = ({children, list, setList}) => {
    const [current, setCurrent] =useState(null)
    const dragStart =(e, list)=> setCurrent(list)
    const dragLeave =(e)=> e.target.style.opacity = 1
    const dragEnd =(e)=> e.target.style.opacity = 1
    const dragOver =(e)=> {
        e.target.style.opacity = .3
        e.preventDefault()
    }
    const drop =(e, list)=> {
        e.preventDefault()
    }
    return (
        <div
            draggable={true}
            onDragStart={e => dragStart(e, list)}
            onDragLeave={e => dragLeave(e)}
            onDragEnd={e => dragEnd(e)}
            onDragOver={e => dragOver(e)}
            onDrop={e => drop(e, list)}
        >
            {children}
        </div>
    )
}

export default Drag