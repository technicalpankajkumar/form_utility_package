import React, { memo } from 'react';

 function Radio({ label, options,name,outerClass}) {
    return (
        <div className={outerClass}>
           { label ? <><label >{`${label} :`}</label><br /></>:<></>}
            {
                options.map(({label,value,...rest},index) => {
                    return <span key={index}>
                        <input  type='radio' name={name} id={value} value={value} {...rest} />
                        <label htmlFor={value}>{label}</label> &nbsp;
                    </span>
                })
            }
        </div>
    )
}   

export default memo(Radio)
