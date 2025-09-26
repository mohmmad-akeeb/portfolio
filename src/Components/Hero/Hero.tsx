import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Mohmmad Akeeb,</span> Data Scientist
      </h1>
      <p>
        I am a Computer Science Engineering student from Kashmir, India with 2
        years of experience in data visualization and ML model building.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
