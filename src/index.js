import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./Componnents/Search/Search";
import ContactList from "./Componnents/ContactList/ContactList";


class App extends React.Component {

    state = {
        List: [
            { id: 1, name: "Jack Sparrow", description: "Captain Jack Sparrow", avatar: 32, gender: "men", favorite: false },
            { id: 2, name: "Terminator", description: "Test ", avatar: 54, gender: "men", favorite: true },
            { id: 3, name: "Camilla Terry", description: "Super girl", avatar: 87, gender: "women", favorite: true },
            { id: 4, name: "Jasica Spinner", description: "Super girl2", avatar: 17, gender: "women", favorite: true },
            { id: 5, name: "Rodney Scinner", description: "Inisible man", avatar: 8, gender: "men", favorite: false }
        ]
    }

    onBtnFavorite = (id) => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        const newFavorite = this.state.List.slice();
        newFavorite[index].favorite = !newFavorite[index].favorite;
        this.setState(() => {
            return {
                favorite: !this.newFavorite
            };
        });
    }

    render() {
        return (
            <div className="container bootstrap snippet">
                <Search />
                <ContactList ContactList={this.state.List} onBtnFavorite={this.onBtnFavorite} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

