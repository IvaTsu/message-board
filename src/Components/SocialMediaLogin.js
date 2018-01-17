import React from 'react';
import '../Styles/bootstrap-social.css';

const SocialMediaLogin = (props) => {
    const { googleLogin, twitterLogin, facebookLogin } = props;

    return(
        <div className="d-flex justify-content-between mt-1">
            <a href="#" className="btn btn-social btn-google" onClick={googleLogin}>
                <span className="fa fa-google" />Sign In with Google
            </a>
            <a href="#" className="btn btn-social btn-twitter" onClick={twitterLogin}>
                <span className="fa fa-twitter" />Sign In with Twitter
            </a>
            <a href="#" className="btn btn-social btn-facebook" onClick={facebookLogin}>
                <span className="fa fa-facebook" />Sign In with Facebook
            </a>
        </div>
    )
}

export default SocialMediaLogin;