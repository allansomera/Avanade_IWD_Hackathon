import './Post.scss';

const Post = () => {
  let arr = [1, 2];
  return (
    <>
      <div className="post">
        <div className="post__header">Posts</div>
        <div className="post__post-con">
          {arr.map((i) => {
            return (
              <div className="post__content" key={i + `${i}`}>
                <div className="post__category-con">
                  <div className="post__category">Category</div>
                </div>
                <div className="post__current-emp">Current Employee</div>
                <div className="post__jobtitle-con">
                  <div className="post__jobtitle"> Senior Designer</div>
                  <div className="post__pronouns"> (She/Her)</div>
                </div>
                <div className="post__title">Post Title</div>
                <div className="post__data">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </div>
                <div className="post__metrics-con">
                  <div className="post__likes-wrapper">
                    <div className="post__likes-icon"></div>
                    <div className="post__likes-num">1000</div>
                  </div>
                  <div className="post__dislikes-wrapper">
                    <div className="post__dislikes-icon"></div>
                    <div className="post__dislikes-num">1000</div>
                  </div>
                  <div className="post__replies-wrapper">
                    <div className="post__replies-icon"></div>
                    <div className="post__dislikes-num">1000</div>
                  </div>
                </div>
                <div className="post__readmore-con">
                  <button className="post__readmore-btn">Read More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
