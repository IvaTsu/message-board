import React, { Component } from 'react';

export default class RegisterBoard extends Component {
    render () {
        const { title, body, footer } = this.props;
        return (
            <div className="continer">
                <div className="d-flex justify-content-center align-self-center">
                    <div className="card col-sm-6">
                        <div className="card-block">
                            <div className="card-title text-center">
                                {title}
                            </div>
                            <div className="card-body">
                                {body}
                            </div>
                            {this.props.footer && <div className="card-footer">
                                {footer}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}