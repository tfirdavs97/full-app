import React from "react";
import { useEffect, useState } from "react";
import "./posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("all");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setAllPosts(data);
      })
      .catch((err) => console.log(err));

    fetch(process.env.REACT_APP_URL + "/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (userId === "all") {
      return setPosts(allPosts);
    }

    const filteredPosts = allPosts.filter((post) => post.userId === userId - 0);
    setPosts(filteredPosts);
  }, [userId, allPosts]);

  const handleChangeSelect = (evt) => {
    setUserId(evt.target.value);
  };
  return (
    <>
      <div className="container">
        <select className="posts__select form-select"
              aria-label="Default select example" onChange={handleChangeSelect}>
          <option value="all">All</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <h1 className="posts__heading">Posts</h1>

        {posts.length > 0 && (
          <ul className="posts__list">
            {posts.map((post) => (
              <li key={post.id} className="posts__item">
                <h4 className="posts__title">{post.title}</h4>
                <p className="posts__body">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Posts;
