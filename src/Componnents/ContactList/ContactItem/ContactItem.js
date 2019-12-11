import React from "react";
import "./ContactItem.css";

class ContactItem extends React.Component {

    state = {
        avatar: this.props.avatar,
        description: this.props.description,
        name: this.props.name,
        gender: this.props.gender,
        btnRandom: false,
    }

    onBtnPress = () => {
        const newAvatar = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        this.setState({
            btnRandom: !this.state.btnRandom,
            avatar: newAvatar
        })
    }

    render() {
        const { avatar, description, name, gender } = this.state;

        const URL = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        let btnStyle = "btn btn-success";
        if (this.state.btnRandom) {
            btnStyle = "btn btn-warning";
        }

        let btnFavorite = "fa fa-star-o fa-2x star"
        if (this.props.favorite) {
            btnFavorite = "fa fa-star fa-2x star"
        }

        return (
            <div className="row">
                <div className="col-8 d-block mx-auto">
                    <div className="panel">
                        <div className="panel-body p-t-10">
                            <div className="media-main">
                                <a className="pull-left" href="#">
                                    <img className="thumb-lg img-circle bx-s" src={URL} alt="" />
                                </a>
                                <div className="pull-right btn-group-sm">
                                    <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                        <i className="fa fa-close"></i>
                                    </a>
                                </div>
                                <div className="info">
                                    <h4>{name}</h4>
                                    <p className="text-muted">{description}</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ul className="social-links list-inline p-b-10">
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Facebook"><i className="fa fa-facebook fa-2x"></i></a>
                                </li>
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Twitter"><i className="fa fa-twitter fa-2x"></i></a>
                                </li>

                            </ul>
                            <i className={btnFavorite} onClick={this.props.onBtnFavorite} ></i>
                            <button type="button" className={btnStyle} onClick={this.onBtnPress}>Random  Face</button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactItem;