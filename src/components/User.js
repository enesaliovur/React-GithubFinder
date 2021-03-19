import React, {Component} from 'react';
import {Link} from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {login, id, name, company, location, avatar_url} = this.props.user
        return (
            <div className="col-md-4 col-sm-6 col-lg-3">
                <div className="card mt-3">
                    <img src={avatar_url} className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{id}</p>
                        <p className="card-text">{login}</p>
                        <p className="card-text">{company}</p>
                        <p className="card-text">{location}</p>
                        <Link to={`/user/${login}`} className="btn btn-sm btn-info">Go Profile</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
