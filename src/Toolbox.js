import React, {Component} from 'react';
import {Link} from 'react-foundation';

function Button(props){
    return(
        <div className="button-basic">
            <Link>{props.name}</Link>
        </div>
    );
}

export { Button };