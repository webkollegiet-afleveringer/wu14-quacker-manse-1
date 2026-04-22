import React from "react";
import "../scss/home.scss";
import { useNavigate } from "react-router-dom";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaUpload,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    likedBy: "Kieron Dotson and Zack John liked",
    name: "Martha Craig",
    handle: "@craig_love",
    time: "12h",
    content:
      "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
    comments: 28,
    retweets: 5,
    likes: 21,
    thread: true,
  },
  {
    id: 2,
    likedBy: "Zack John liked",
    name: "Maximmilian",
    handle: "@maxjacobson",
    time: "3h",
    content: "Y'all ready for this next post?",
    comments: 46,
    retweets: 18,
    likes: 363,
  },
  {
    id: 3,
    retweetedBy: "Kieron Dotson Requacked",
    name: "Tabitha Potter",
    handle: "@mis_potter",
    time: "14h",
    content:
      "Kobe’s passing is really sticking w/ me in a way I didn't expect.\n\nHe was an icon, the kind of person who wouldn't die this way. My wife compared it to Princess Di’s accident.\n\nBut the end can happen for anyone at any time, & I can’t help but think of anything else lately.",
    comments: 7,
    retweets: 1,
    likes: 11,
  },
  {
    id: 4,
    retweetedBy: "Zack John Requacked",
    name: "Kieron Dotson",
    handle: "@dotson_kieron",
    content:
      "Kobe's passing is really sticking w/ me in a way i didn’t expect. He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.\n\nBut the end can happen for anyone at any time, & I can’t help but think of anything else lately.",
    comments: 0,
    retweets: 0,
    likes: 0,
  },
];

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.likedBy && <div className="meta">{post.likedBy}</div>}
      {post.retweetedBy && <div className="meta">{post.retweetedBy}</div>}

      <div className="post-header">
        <span className="name">{post.name}</span>
        <span className="handle">{post.handle}</span>
        <span className="time">· {post.time}</span>
      </div>

      <div className="content">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="actions">
        <span><FaRegComment /> {post.comments}</span>
        <span><FaRetweet /> {post.retweets}</span>
        <span><FaRegHeart /> {post.likes}</span>
        <span><FaUpload /></span>
      </div>

      {post.thread && <div className="thread">Show this thread</div>}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* LOGIN KNAP */}
      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;