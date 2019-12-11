import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div className="row">
            <div className="col-8 d-block mx-auto">
                <div className="panel panel-default">
                    <div className="panel-body p-t-0">
                        <div className="input-group">
                            <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-effect-ripple btn-primary"><i className="fa fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search; 