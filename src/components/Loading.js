import React, {Component} from 'react';
import loading from './loading.gif'

const Loading = () => {
    return (
       <React.Fragment>
           <img src={`/${loading}`} alt="" className="m-auto d-block"/>
       </React.Fragment>
    )
}

export default Loading;
