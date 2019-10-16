import React from 'react';
import Auth from './Auth.js';

 const Logout = props => {

    return (
        <div>
            <button onClick={
                () => {
                    Auth.logout(() => {
                        props.history.push("/");
                    });
                }
            }>Logout</button>
        </div>
    );

}

export default Logout;
