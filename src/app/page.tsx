import Image from "next/image";
import pic from "../../public/image/governor pic.png";
import Home_content from "../components/homeContent";
import Slider from "@/components/slider";
import Courses from "@/components/courses";

export default function Home() {
  return(
    <div>
    <div className="main">
        <div className="left-side">
          <h1>Governor Sindh</h1> 
          <h2>Kamran Khan Tessori</h2>
          <h3>Certified Cloud <br />Applied Generative AI <br />Engineer (GenEng)</h3>
          <p className="first">Earn up to $5,000 / month</p>
          <p className="second">Now admissions are open in<br/> Hyderabad</p>
          <div className="button-thing">
            <button className="button">APPLY NOW</button>
            <div className="pp">
              <p className="number">562,143</p>
              <p className="accept">Accepted Applications</p>
            </div>
          </div>
      </div>
      <div className="right-side">
        <Image src={pic} alt="pic" width={900} height={680} className="pic"/>
      </div>
    </div>
    <Home_content/>
    <Slider/>
    <Courses/>
    </div>
  );
};