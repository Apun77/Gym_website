import "./HeroSection.css"
import girl2 from "../../assets/girl2.jpg"

export default function HeroSection(){
  return(
    <div className="herosection">
      <div className="left">
      <div className="heading">
        <h1>Buid Your Body <br></br><span>Transform</span> Your <br></br>Life</h1>
      </div>
      <div className="description">
        <h3>Enpower your journey to peak fitness.Build a stronger body<br></br> and transform your life with our expert guidance and support.</h3>
      </div>

      <div className="herobutton">
        <button className="getstarted">Get Started</button>
      </div>
      </div>

      <div className="right">
        <div className="frontimg">
          <img src={girl2} alt="" className="fimg"></img>
        </div>
      </div>
    </div>
  )
}