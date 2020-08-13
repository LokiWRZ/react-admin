import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const textAreaFieldGroup = ({
    name,
    type,
    placeholder,
    value,
    error,
    info,
    onChange,
}) => {
    return (
        <div className="form-group">
            <input
                className={classnames('form-control form-control-lg',{
                    'is-invalid':error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    );
}

textAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

textAreaFieldGroup.defaultProps = {
    type:'text'
}

export default TextAreaFieldGroup;