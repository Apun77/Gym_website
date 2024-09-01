import "./Membership.css"

export default function Membership(){
  return(
    <div className="membership">
      <div className="heading5">
        <h1>Choose Your Best Plan</h1>
          
      </div>
   <div className="bmember">
    <div className="plan">
      <div className="headingg">
        <h1>DISCOVER</h1>
      </div>
      <div className="mid">
        <h3><span>$99</span>/Per Month</h3>
      </div>
      <div className="last">
        <ul>
          <li># 5 classes per month</li>
          <li># 4 group class monthly</li>
          <li># online class access</li>
          <li># E-book fitness guide</li>
          <li># 1 Extra fitness training</li>
        </ul>
      </div>

      <div className="btn6">
        <button className="chooseplan">Choose Plan</button>
      </div>
    </div>
    <div className="plan1">
      <div className="head6">
      <h3 class="bar">Most Popular</h3>
      </div>
      <div className="headingg1">
        <h1>PROFESSIONAL</h1>
      </div>
      <div className="mid1">
        <h3><span>$199</span>/Per Month</h3>
      </div>
      <div className="last1">
        <ul>
          <li># 8 classes per month</li>
          <li># 6 group class monthly</li>
          <li># online class access</li>
          <li># E-book fitness guide</li>
          <li># 3 Extra fitness training</li>
        </ul>
      </div>

      <div className="btn61">
        <button className="chooseplan1">Choose Plan</button>
      </div>
      
    </div>


    <div className="plan">
    <div className="headingg">
        <h1>ENTERPRISE</h1>
      </div>
      <div className="mid">
        <h3><span>$299</span>/Per Month</h3>
      </div>
      <div className="last">
        <ul>
          <li># 10 classes per month</li>
          <li># 8 group class monthly</li>
          <li># online class access</li>
          <li># E-book fitness guide</li>
          <li># 7 Extra fitness training</li>
          <li># Free extra more guide</li>
        </ul>
      </div>

      <div className="btn6">
        <button className="chooseplan">Choose Plan</button>
      </div>
    </div>
   </div>
    </div>
  )
}