import React from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList }) => {
    const contactItem = ContactList.map((item) => {
        return <ContactItem key={item.id} name={item.name} description={item.description} avatar={item.avatar} gender={item.gender} />
    })

    return (
        <div>
            {contactItem}
        </div>

    );
}

export default ContactList;