/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useState } from "react";

function Post(props) {
  const [name] = useState(props.post.name);
  const [address] = useState(props.post.address);
  let [type] = useState(props.post.type);

  type =
    "https://img.freepik.com/free-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg?w=2000";

  return (
    <div className="col-3">
      <div className="card" onClick={() => props.onDelete(props.post.id)}>
        <img className="card-img-top rel" src={type} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title name">{name}</h5>
          <p className="card-text city">{address}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
