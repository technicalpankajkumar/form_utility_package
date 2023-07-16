import React,{memo} from 'react';

function Input({name,label,type,outerClass,...rest} ){

  return (
    <>
    <div className={outerClass}>
    { label ? <><label htmlFor={name} >{`${label} :`}</label><br/> </>:<span></span>}
        <input type={type} name={name} id={name} {...rest}/>
    </div>
    </>
  )
} 

export default memo(Input)