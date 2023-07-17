import React, { memo } from 'react';

function Select({ options, onChange, outerClass, name, label, ...rest }) {
    return (
        <div className={outerClass}>
            {label ? <> <label htmlFor={name}>{`${label} :`}</label><br /> </> : <></>}
            <select onChange={onChange} name={name} id={name} {...rest} >
                {
                    options.map(({value,label,...rest},index) => {
                        return <option value={value} key={index} {...rest}>{label}</option>
                    })
                }
            </select>
        </div>
    )
}

export default memo(Select)
