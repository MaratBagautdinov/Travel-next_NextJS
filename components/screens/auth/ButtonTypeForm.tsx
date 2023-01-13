import {FC} from "react";
import s from "./LogIn.module.css";
import Button from "@/common/Button/Button";

const ButtonTypeForm:FC<{typeForm, setTypeForm}> = ({typeForm, setTypeForm}) => {
    return (
        <div className={s.typeForm}>
            {typeForm ?
                <Button
                    key={'register'}
                    icon={'toggle_off'}
                    title={'I want register'}
                    onClick={()=>setTypeForm(!typeForm)}
                />
                :
                <Button
                    key={'auth'}
                    icon={'toggle_off'}
                    title={'I want auth'}
                    onClick={()=>setTypeForm(!typeForm)}
                />
            }
        </div>
    )
}
export default ButtonTypeForm