import {IPlace} from "@/types/place";
import {ReactNode} from "react";
export interface IItem {
    key: number
    content: IPlace
}
export interface IDrag{
    list: IItem[]
    setList: (item)=>void
    children?: ReactNode
}
