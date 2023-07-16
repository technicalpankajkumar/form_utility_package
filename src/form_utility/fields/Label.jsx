import React, { memo } from 'react'

function Label({label,id}) {
  return (
      <label htmlFor={id}>{label}</label>
  )
}

export default memo(Label)