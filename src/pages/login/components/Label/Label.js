import React from 'react'

export default function Label(props) {
    const {text} = props
    return (
        <div>
          <label>{text}</label>
        </div>
    )
}
