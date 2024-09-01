import "./Contact.css"

export default function Contact(){
  return(
    <div className="foot">
    <div className="contact">
     
     <div className="group">
        <div className="head7">
          <h2>Company</h2>
        </div>
        <div className="details">
          <ul>
            <li>About Us</li>
            <li>Why us</li>
            <li>Security</li>
            <li>Patnership</li>
          </ul>
        </div>
      </div>

      <div className="group">
        <div className="head7">
          <h2>Categories</h2>
        </div>
        <div className="details">
          <ul>
            <li>Basic Yoga</li>
            <li>Strength Training</li>
            <li>Body Building</li>
            <li>Weight Loss</li>
          </ul>
        </div>
      </div>

      <div className="group">
        <div className="head7">
          <h2>Help</h2>
        </div>
        <div className="details">
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
      </div>

      <div className="group">
        <div className="head7">
          <h2>Contact Us</h2>
        </div>
        <div className="details">
          <ul>
            <li>+91 8390382932</li>
            <li>apun93@gmail.com</li>
            <li>420 Powder Gali<br></br>Gowkuldham,Mumbai</li>
        
          </ul>
        </div>
      </div>

      <div className="group">
        <div className="head7">
          <h2>Our Newsletter</h2>
        </div>
        <div className="email">
          <input type="email" placeholder="Enter your email"></input>
          <button className="send">Send</button>
          <h4>Never miss on updates &  news to your email.</h4>

        </div>
      </div>

    </div>

<div className="footer">
<div className="logo1">
  <h2>Apun<span> Fitness</span></h2>
</div>
<div className="copyright">
  <h2>@2024(WalleedCodes). All Copyright reserved.</h2>
</div>
<div className="social">
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin"></i>
</div>
</div>

</div>
  )
}