import "./About.css"
import girl3 from "../../assets/girl3.jpg"

export default function About(){

  return(
    <div className="about">
      <div className="left1">
      <div className="image1">
        <img src={girl3} alt="" className="leftimage"></img>
      </div>
</div>
      <div className="right1">
        <div className="heading1">
          <h1>Get Ready To Reach<br></br> Your Fitness Goal</h1>
        </div>

        <div className="para">
          <h3>Ditch the excuses,grab your motivation backpack! "Get Ready To Reach Your Fitness Goals" isn't just a title,it's a battle cry.We'll break down your aspirations into bite-sized.</h3>
        </div>
        <div className="para">
          <h3>
            Get ready to conquere your doubts,rewrite your limits and finally claim the healthier,happier you!
          </h3>
        </div>

        <div className="trailbtn">
          <button className="button">Free Trail Today</button>
        </div>
      </div>
    </div>
  )
}