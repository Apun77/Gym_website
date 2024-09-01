import "./Gallery.css"
import pic1 from "../../assets/pic1.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic4 from "../../assets/pic4.jpg"


export default function Gallery(){
  return(
    <div className="gallery">
    <div className="heading4">
      <h1>MEET OUR<span> TRAINERS</span></h1>
    </div>
   <div className="bottom2">
    <div className="card2">
      <img src={pic1} alt="" className="cardpic"></img>
      <div className="cardbody">
        <h1 className="title"> MISS VICTORIA</h1>
        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>

        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>
      </div>
    </div>

   <div className="card2">
   <img src={pic2} alt="" className="cardpic"></img>
   <div className="cardbody">
   <h1 className="title">RYAN RENOLDS</h1>
        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>

        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>
   </div>
   </div>


   <div className="card2">
   <img src={pic3} alt="" className="cardpic"></img>
   <div className="cardbody">
   <h1 className="title">MISS SARA</h1>
        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>

        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>
   </div>
   </div>


   <div className="card2">
   <img src={pic4} alt="" className="cardpic"></img>
   <div className="cardbody">
   <h1 className="title">MR.ADAM</h1>
        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>

        <p className="subpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia eius ullam accusantium. Ullam, in magni expedita quibusdam consequuntur iste tempora quasi atque eligendi dolorum autem laudantium rerum, vero hic.</p>
   </div>
   </div>
    
   </div>

    </div>
  )
}