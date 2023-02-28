import {useState} from "react";
import {IItem} from "./types";

function useSort (initList: any[]){
    let key = 0
    const init: IItem[] = initList.map(p => {
        return {
            key: key++,
            content: {
                ...p
            }
        }
    })
    const [list, setList] = useState(init);
    list.sort((p1, p2) => p1.key - p2.key)
    return [list, setList]
}
export default useSort