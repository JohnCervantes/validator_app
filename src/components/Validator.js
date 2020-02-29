import React from "react";
import validator from "validator";

const Validator = props => {
  if (props.value.length === 0) {
    return <p style={{ color: "red" }}>Please Enter a value</p>;
  } else {
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>Email checker:</p>
        {validator.isEmail(props.value) ? (
          <span style={{ color: "green" }}>
            {props.value + " is a valid email"}
          </span>
        ) : (
          props.value + " is not a valid email"
        )}
        <br></br>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Credit Card number checker:</p>
        {validator.isCreditCard(props.value) ? (
          <span style={{ color: "green" }}>
            {props.value + " is a valid email"}
          </span>
        ) : (
          props.value + " is not a valid email"
        )}
        <br></br>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Decimal number checker:</p>
        {validator.isDecimal(props.value) ? (
          <span style={{ color: "green" }}>
            {props.value + " is a valid decimal number"}
          </span>
        ) : (
          props.value + " is not a valid decimal number"
        )}
        <br></br>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Decimal number checker:</p>
        {validator.isMACAddress(props.value) ? (
          <span style={{ color: "green" }}>
            {props.value + " is a valid mac address number"}
          </span>
        ) : (
          props.value + " is not a valid mac address number"
        )}
        <br></br>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Decimal number checker:</p>
        {validator.isMobilePhone(props.value) ? (
          <span style={{ color: "green" }}>
            {props.value + " is a valid phone number"}
          </span>
        ) : (
          props.value + " is not a valid phone number"
        )}
        <br></br>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Decimal number checker:</p>
        {validator.isURL(props.value) ? (
          <span style={{ color: "green" }}>
            {props.value + " is a valid URL"}
          </span>
        ) : (
          props.value + " is not a valid URL"
        )}
      </div>
    );
  }
};

export default Validator;
