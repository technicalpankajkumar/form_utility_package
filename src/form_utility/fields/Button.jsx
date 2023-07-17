import React, { memo } from 'react';


 function Button({type,label,...rest}){

    return (
        <>
         <button type={type} {...rest}>{label}</button>
        </>
    )
}
export default memo(Button)