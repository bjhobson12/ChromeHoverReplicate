import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import "./index.scss"
import { useNavigate } from 'react-router'

const Button = ({label, disabled, shadow, onClick, to, style}) => {

    const nav = () => {}//useNavigate();


    return <>
        <a 
        className="button" 
        disabled={disabled}
        data-shadow={shadow}
        style={style}
        onClick={disabled ? null : (onClick ? onClick : ()=>{nav(to)})}>{
          label
        }</a>
    </>
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    disabled: false,
    error: false
}

export default Button;
