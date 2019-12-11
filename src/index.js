import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./Componnents/Search/Search";
import ContactList from "./Componnents/ContactList/ContactList";

const App = () => {

    const List = [
        { id: 1, name: "Jack Sparrow", description: "Captain Jack Sparrow", avatar: 32, gender: "men" },
        { id: 2, name: "Terminator", description: "Test ", avatar: 54, gender: "men" },
        { id: 3, name: "Camilla Terry", description: "Super girl", avatar: 87, gender: "women" },
    ]

    return (
        <div className="container bootstrap snippet">
            <Search />
            <ContactList ContactList={List} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

