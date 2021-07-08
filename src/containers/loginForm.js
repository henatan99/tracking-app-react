import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

const LoginForm = ( {changeUsername} ) => {
    const [username, setUsername] = useState(' ');

    const handleChange = (event) => {
        event.preventDefault();
    }

    const handleSubmit = () => {
        changeUsername(username);
        setUsername('');
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

LoginForm.defaultProps = {
    changeUsername: null,
}

LoginForm.propTypes = {
    changeUsername: PropTypes.func,
}

const maspDispatchToProps = (dispatch) => ({
    changeUsername: (username) => dispatch(changeUsername(username)),
})

export default connect(null, maspDispatchToProps)(LoginForm)