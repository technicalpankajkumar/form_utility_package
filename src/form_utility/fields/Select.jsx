import React, { memo } from 'react';

export default memo(function Select({ options, onChange, outerClass, name, label, ...rest }) {
    return (
        <div className={outerClass}>
            {label ? <> <label htmlFor={name}>{`${label} :`}</label><br /> </> : <span></span>}
            <select onChange={onChange} id={name} {...rest} >
                {
                    options.map(({value,key,selected=false,...rest}) => {
                        return <option name={value} value={value} key={value} selected={selected} {...rest}>{key}</option>
                    })
                }
            </select>
        </div>
    )
})
