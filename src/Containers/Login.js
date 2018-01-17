import React, { Component } from 'react';
import RegisterBoard from '../Components/RegisterBoard';
import InputField from '../Components/InputField';
import FooterFormButton from '../Components/FooterFormButton';
import { login, getUser, googleLogin, twitterLogin } from '../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../Components/ErrorAlert';
import SocialMediaLogin from '../Components/SocialMediaLogin';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    componentWillMount() {
        this.props.getUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.email !== undefined) {
            this.props.history.push('/');
        }
    }

    submitLogin(event) {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password).catch(err => {
            this.setState({
                error: err
            });
         });
    }

    renderBody() {

        const errStyle = {
            backgroundColor: 'red'
        }

        return (
            <form onSubmit={event => {this.submitLogin(event)}}>
                <div>
                    <InputField id="email" type="text" label="Email" inputAction={(event) => this.setState({
                        email: event.target.value
                    })} style={this.state.error ? errStyle : null} />
                    <InputField id="password" type="password" label="Password" inputAction={(event) => this.setState({
                        password: event.target.value
                    })} style={this.state.error ? errStyle : null} />
                    {this.state.error && <ErrorAlert>Your email/password is incorrect!</ErrorAlert>}
                    <FooterFormButton submitLabel="Sign In" otherLabel="CreateAccount" goToLink="/CreateAccount" {...this.props} />
                    <SocialMediaLogin {...this.props} />
                </div>
            </form>
        );
    }

    render () {
        return (
            <RegisterBoard title="Sign In" body={this.renderBody()}/>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser, googleLogin, twitterLogin })(Login);