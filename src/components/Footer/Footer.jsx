import './Footer.css'
import Instagram from  '../../assets/instagram.png'
import Github from  '../../assets/github.png'
import Linkedin from  '../../assets/linkedin.png'
import Logo from  '../../assets/logo.png'
export default function Footer(){
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Instagram} alt="" />
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

    </div>
  );
}
