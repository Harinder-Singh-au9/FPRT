import React from 'react'

const ReadyCardItems = (props) => {
    return (
        <Link to="/createform">
        <img
          src={props.url}
          className="img-thumbnail"
          style={{ maxWidth: "50%" }}
        />
      </Link>
    )
}

export default ReadyCardItems
