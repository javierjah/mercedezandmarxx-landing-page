import tweetsImg from "../../assets/images/Screenshot-tweets.png";

import "./tweets.css";

function TweetsImg() {
  return (
    <div className="tweets-img">
      <img src={tweetsImg} alt="tweets img" />
    </div>
  );
}

export default TweetsImg;
