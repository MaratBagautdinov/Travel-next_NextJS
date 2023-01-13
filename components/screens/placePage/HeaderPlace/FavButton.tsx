import s from './HeaderPlace.module.css'
import {addPlace, delPlace, getLogin} from "@api/sanity/queries";
import {FC, useState} from "react";

const FavButton:FC<{placeID, subscribers}> = ({placeID, subscribers}) => {
    const login = getLogin()
    const [radioFav, setRadio] = useState(!!subscribers.find(user => user === login))
    const switchFav = () => {
        setRadio(!radioFav)
        radioFav ? delPlace(placeID, login, subscribers) : addPlace(placeID, login, subscribers)
    }
    return (
            <button
                onClick={switchFav}
                className={radioFav ? s.active : ''}>
                <span className="material-icons-outlined">bookmark_border</span>
            </button>
    );
};

export default FavButton;