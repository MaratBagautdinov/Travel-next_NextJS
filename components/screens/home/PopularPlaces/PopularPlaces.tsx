import s from './PopularPlaces.module.css'
import {IPlace} from "@/types/place";
import {FC} from "react";
import PlaceItem from "./PlaceItem/PlaceItem";
import Drag from "../../../Drag";
import useSort from "../../../Drag/useSort";

const PopularPlaces: FC<{ places: IPlace[] }> = ({places}) => {
    const [list, setList] = useSort(places)
    return (
        <div className={s.PopularPlaces}>
            <h2>Popular places</h2>
            <div className={s.list}>
                {
                    list.map(l => (
                        <Drag list={list}
                              setList={()=>setList}
                              key={l.key}>
                            <PlaceItem place={l.content}/>
                        </Drag>
                    ))}
            </div>
        </div>
    );
};

export default PopularPlaces;