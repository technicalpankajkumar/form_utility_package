import React, { memo } from 'react';

export default memo(function Select({ options, onChange, outerClass, name, label, ...rest }) {
    return (
        <div className={outerClass}>
            {label ? <> <label htmlFor={name}>{`${label} :`}</label><br /> </> : <span></span>}
            <select onChange={onChange} id={name} {...rest} >
                {
                    options.map((opt) => {
                        return <option name={opt.value} value={opt.value} key={opt.value}>{opt.key}</option>
                    })
                }
            </select>
        </div>
    )
})
