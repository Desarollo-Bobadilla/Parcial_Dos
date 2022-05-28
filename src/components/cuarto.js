/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useState } from "react";

function Post(props) {
  const [name] = useState(props.post.name);
  let [type] = useState(props.post.type);

  type =
    "https://cdn.dribbble.com/users/2400067/screenshots/10126787/media/42f9f8e299e5e8a38d7ad5a8854e8317.png?compress=1&resize=400x300";

  return (
    <div className="col-3">
      <div className="card" onClick={() => props.onDelete(props.post.name)}>
        <div className="card-body">
          <h5 className="card-title name">{name}</h5>
        </div>
        <img className="card-img-top rel" src={type} alt="Card image cap" />
      </div>
    </div>
  );
}

export default Post;
