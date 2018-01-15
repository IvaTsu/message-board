import React, { Component } from 'react';
import InputField from './../Components/InputField';
import FooterFormButton from './../Components/FooterFormButton';
import RegisterBoard from './../Components/RegisterBoard';

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    renderBody() {
        return (
            <div>
                <InputField id="email" type="text" label="Email" inputAction={(event) => this.setState({
                    email: event.target.value
                })} />
                <InputField id="password" type="password" label="Password" inputAction={(event) => this.setState({
                    password: event.target.value
                })} />
                <InputField id="confirm-password" type="password" label="Confirm Password" inputAction={(event) => this.setState({
                    confirmPassword: event.target.value
                })} />
                <FooterFormButton submitLabel="Create Account" otherLabel="Go Back" goToLink="/Login" {...this.props} />
            </div>
        );
    }

    render () {
        return (
            <RegisterBoard body={this.renderBody()} title="Create Account" />
        );
    }
}