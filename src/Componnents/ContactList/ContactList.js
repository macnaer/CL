import React from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList, onBtnFavorite }) => {
    const contactItem = ContactList.map((item) => {
        return <ContactItem key={item.id} name={item.name} description={item.description} avatar={item.avatar} gender={item.gender}
            favorite={item.favorite} onBtnFavorite={() => onBtnFavorite(item.id)} />
    })

    return (
        <div>
            {contactItem}
        </div>

    );
}

export default ContactList;