import Image from "next/image";
import Facebook from "../../public/image/facebook-logo.webp"
import Youtube from "../../public/image/youtube-logo.png"
import Twitter from "../../public/image/twitter-logo.webp"
import Instagram from "../../public/image/instagram-logo.png"
import Tiktok from "../../public/image/tiktok-logo.png"
import Email from "../../public/image/email-logo.png"
import Link from "next/link";


function Footer() {
    return(
        <div className="footer-f">
            <div className="first">
                <h3>Core Courses</h3>
                <p>Programming Fundamentals</p>
                <p>Web2 Using NextJS</p>
                <p>Earn as You Learn</p>
            </div>
            <div className="second">
                <h3>Advanced Courses</h3>
                <p>Web 3 and Metaverse</p>
                <p>Cloud-Native Computing</p>
                <p>Artificial Intelligence (AI) and Deep Learning</p>
                <p>Ambient Computing and IoT</p>
                <p>Genomics and Bioinformatics</p>
                <p>Network Programmablility and Automation</p>
            </div>
            <div className="third">
                <h3>Social Links</h3>
                <div className="logos">
                    <Link target="_blank" href="https://www.facebook.com/TeamKTessori"><Image src={Facebook} alt="facebook" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://www.youtube.com/@KamranTessorikk"><Image src={Youtube} alt="youtube" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://twitter.com/KamranTessoriPk"><Image src={Twitter} alt="twitter" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://www.instagram.com/KamranTessoriPk/"><Image src={Instagram} alt="instagram" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://www.instagram.com/KamranTessoriPk/"><Image src={Tiktok} alt="tiktok" width={33} height={33}/></Link>
                </div>
                <div className="email-section">
                <a className="etxt" target="_blank" href="mailto:education@governorsindh.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body."><Image className="email-logo" src={Email} alt="email" width={20} height={17}/></a>
                <a className="etxt" target="_blank" href="mailto:education@governorsindh.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body.">education@governorsindh.com</a>
                </div>
            </div>
        </div>
    );
  };
  
export default Footer;