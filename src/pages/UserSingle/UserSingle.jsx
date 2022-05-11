import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./userSingl.scss"

const UserSingle = () => {
    const {id} = useParams()
    const [user, setuser] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + "/users/" + id)
        .then((res) => res.json())
        .then((data) => setuser(data))
        .catch(err => console.log(err))

        fetch(process.env.REACT_APP_URL + "/comments?postId=" + id)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch(err => console.log(err))
    }, [id]);
  return (
    <>
      <div className="container">
        <div className="user-single__wrapper">
            <img src="https://picsum.photos/150" alt="" />
            <h3 className="user-single__name">{user.name}</h3>
            <p className="user-single__username">{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <em>{user.website}</em>

            <h2 className="user-single__comments-heading">Comments</h2>

            {comments.length > 0 && <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h4>{comment.name}</h4>
                        <em>{comment.email}</em>
                        <p>{comment.body}</p>
                    </li>
                ))}    
            </ul>}
        </div>
      </div>
    </>
  );
};

export default UserSingle;
