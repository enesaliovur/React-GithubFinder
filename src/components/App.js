import React, {Component, Fragment} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Search from "./Search";
import Users from './Users'
import Alert from "./Alert";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import About from "./About";
import UserDetails from "./UserDetails";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            user:{},
            repos:[],
            alert: null
        }

        this.searchUser = this.searchUser.bind(this)
        this.clearSearch = this.clearSearch.bind(this)
        this.setAlert = this.setAlert.bind(this)
        this.getUser = this.getUser.bind(this)
        this.getUserRepos = this.getUserRepos.bind(this)
    }

    /*
        componentDidMount() {
            this.setState({loading:true})
            setTimeout(()=>{
                axios
                    .get('https://api.github.com/users')
                    .then(res=>this.setState({users:res.data,loading:false}))
            },1000)

        }
    */

    clearSearch() {
        this.setState({users: []})
    }

    setAlert(msg, type) {
        this.setState({alert: {msg, type}})
        setTimeout(() => {
            this.setState({alert: null})
        }, 3000)

    }

    searchUser(keyword) {
        this.setState({loading: true})
        /*
        setTimeout(()=>{
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res=>this.setState({users:res.data.items,loading:false}))
        },1000)
        */
        axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res => this.setState({users: res.data.items, loading: false}))

    }

    getUser(username){
        this.setState({loading:true})
        axios
            .get(`https://api.github.com/users/${username}`)
            .then(res=> this.setState({user:res.data ,loading:false}))
    }

    getUserRepos(username){
        this.setState({loading:true})
        axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(res=> this.setState({repos:res.data ,loading:false}))
    }


    render() {

        return (
            <BrowserRouter>
                <Navbar title="Github" icon="fab fa-github"/>
                <Alert alert={this.state.alert}/>

                <Switch>
                    <Route exact path="/" render={props => (
                        <Fragment>
                            <Search showClearButton={this.state.users.length > 0 ? true : false}
                                    clearSearch={this.clearSearch}
                                    searchUser={this.searchUser} setAlert={this.setAlert}/>
                            <Users users={this.state.users} loading={this.state.loading}/>
                        </Fragment>
                    )}/>
                    <Route path="/about" component={About}/>
                    <Route path="/user/:login" render={props => (
                        <UserDetails {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading}   getUserRepos={this.getUserRepos} repos={this.state.repos}/>
                    )}/>
                </Switch>
            </BrowserRouter>

        )
    }

}


export default App
