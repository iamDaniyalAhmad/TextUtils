import React from "react";

function Alert(prop) {
    const capatalize = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'40px'}}>
      {prop.alert && <div class={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capatalize(prop.alert.type)}</strong> : {prop.alert.msg}
  </div>}
    </div>
  );
}

export default Alert;
