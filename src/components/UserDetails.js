import React, {useEffect, Fragment} from 'react';
import Loading from "./Loading";
import Repos from "./Repos";

const UserDetails = (props) => {

    useEffect(() => {
        props.getUser(props.match.params.login)
        props.getUserRepos(props.match.params.login)
    },[])


    const {repos} = props

    const {
        login,
        blog,
        id,
        name,
        company,
        location,
        avatar_url,
        html_url,
        bio,
        followers,
        following,
        public_repos
    } = props.user
    if (props.loading) {
        return <Loading/>
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={avatar_url} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <p className="card-text">{name}</p>
                            <p className="card-text">{location}</p>
                            <p className="card-text"><a href={html_url} className="btn btn-primary btn-block btn-sm">Github
                                Profile</a></p>
                        </div>

                    </div>

                </div>

                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            {
                                bio &&
                                <Fragment>
                                    <h3>About</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            {
                                blog &&
                                <Fragment>
                                    <h3>Blog</h3>
                                    <p>{blog}</p>
                                </Fragment>
                            }
                            <div>
                                <span className="badge badge-primary m-1">Followers: {followers}</span>
                                <span className="badge badge-danger m-1">Following: {following}</span>
                                <span className="badge badge-info m-1">Repos: {public_repos}</span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Repos repos={repos}/>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default UserDetails;
