import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import "./index.scss"

const Input = ({id, label, value, disabled, error, style, type, placeholder, onChange}) => {

    const [active, setActive] = useState(false)
    
    return <>
        <div className={`field${disabled ? " disabled" : ""}`} style={style}>
          <input
            id={id}
            type={type || "text"}
            disabled={disabled}
            value={value}
            placeholder={placeholder || label}
            onChange={event => onChange(event.target.value)}
            onFocus={() => !disabled && setActive(true)}
            onBlur={() => !disabled && setActive(false)}
            data-label={!!label}
          />
          {
            (label || error) && 
          <label htmlFor={id} className={error ? "error" : undefined}>
            {error || label}
          </label>
          }
        </div>
    </>
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    disabled: false,
    error: false,
    value: ''
}

export default Input;
