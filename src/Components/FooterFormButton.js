import React from 'react';

const FooterFormButton = (props) => {
    const { submitLabel, otherLabel, goToLink, history } = props;
    return (
        <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">{submitLabel}</button>
            <button type="button" className="btn btn-info" onClick={() => {
                history.push(goToLink )
            }}>{otherLabel}</button>
        </div>
    );
}

export default FooterFormButton;