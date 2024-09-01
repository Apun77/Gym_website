import "./Services.css"
import yoga from "../../assets/yoga.png"
import hand from "../../assets/hand.png"
import run from "../../assets/run.png"
import weightlift from "../../assets/weightlift.png"

export default function Services(){
  return(
    <div className="services">
      <div className="top">
      <div className="heading2">
        <h1>The best Programs<br></br> We Offers For You</h1>
      </div>
      <div className="subhead">
        <h3>Stop searching, start thriving! We've handpicked programs just for you.Unlock your potential,from fitness feats to career climbs.Let's Make magic happen!</h3>
      </div>
      </div>
      
      <div className="bottom">
      <div className="cards">
        <div className="box">
          <div className="one">
          <img src={weightlift} alt=""></img>
          </div>
          <div className="two">
            <h3>Strength Training</h3>
          </div>
          <div className="three">
            <p>Unlock your potential with a dynamic strength training program for lasting fitness gains.</p>
          </div>
        </div>
        <div className="box">
        <div className="one">
         <img src={yoga} alt=""></img>
          </div>
          <div className="two">
            <h3>Basic Yoga</h3>
          </div>
          <div className="three">
            <p>Discover serenity and flexibility through this foundational,beginner-friendly yoga.</p>
          </div>
        </div>
        <div className="box">
        <div className="one">
        <img src={run} alt=""></img>
          </div>
          <div className="two">
            <h3>Weight Loss</h3>
          </div>
          <div className="three">
            <p>Achieve sustainable weight loss through a balanced approach, combining nutrition and mindfulness.</p>
          </div>
        </div>
        <div className="box">
        <div className="one">
        <img src={hand} alt=""></img>
          </div>
          <div className="two">
            <h3>Body Building</h3>
          </div>
          <div className="three">
            <p>Transform your physique with a comprehensive bodybuilding regimen strength,size and defination.</p>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}