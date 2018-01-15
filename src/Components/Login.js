import React, { Component } from 'react';
import RegisterBoard from './RegisterBoard';
import InputField from './InputField';
import FooterFormButton from './FooterFormButton';
import { login, getUser } from './../Actions/UserActions';
import { connect } from 'react-redux';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.login(this.state.email, this.state.password).catch(err => { console.log(err); });
    }

    renderBody() {
        return (
            <form onSubmit={event => {this.submitLogin(event)}}>
                <div>
                    <InputField id="email" type="text" label="Email" inputAction={(event) => this.setState({
                        email: event.target.value
                    })} />
                    <InputField id="password" type="password" label="Password" inputAction={(event) => this.setState({
                        password: event.target.value
                    })} />
                    <FooterFormButton submitLabel="Sign In" otherLabel="CreateAccount" goToLink="/CreateAccount" {...this.props} />
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

export default connect(mapStateToProps, { login, getUser })(Login);