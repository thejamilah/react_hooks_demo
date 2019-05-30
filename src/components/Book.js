import React from 'react'

const Book = props => {
  return (
    <div>
      <h3>{props.book.title}</h3>
      <img src={props.book.img} alt={props.book.title} />
    </div>
  )
}

export default Book