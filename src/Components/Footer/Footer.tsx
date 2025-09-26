import { FC } from "react";
import "./Footer.css";

import theam_pattern from "../../assets/theme_pattern.svg";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="logo">
            <h1>Akeeb</h1>
            <img src={theam_pattern} alt="Theme pattern" />
          </div>
          <p>
            I am a data scientist enthusiast from India with 3 years of
            experience.
          </p>
        </div>

        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscrib">Subscribe</div>
        </div> */}
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Mohammad Akeeb. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
