import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

import style from './Contact.module.css'

const Contact = ({id, name, number, deleteContact}) => {
    return (
        <>
            <p><span className={style.icon}><IoPersonSharp /></span>{name}</p>
            <p><span className={style.icon}><FaPhone /></span>{number}</p>
            <button className={style['delete-btn']} onClick={() => deleteContact(id)}>Delete</button>
        </>
    )
};

export default Contact;