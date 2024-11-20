import Corecourse1 from "../../public/image/core-course1.jpg"
import Corecourse2 from "../../public/image/core-course2.jpg"
import Corecourse3 from "../../public/image/core-course3.jpg"
import Advcourse1 from "../../public/image/advance-course1.jpg"
import AdvCourse2 from "../../public/image/advance-course2.jpg"
import AdvCourse3 from "../../public/image/advance-course3.jpg"
import AdvCourse4 from "../../public/image/advance-course4.jpg"
import AdvCourse5 from "../../public/image/advance-course5.jpg"
import AdvCourse6 from "../../public/image/advance-course6.jpg"
import Image from "next/image";


function Courses() {
    return(
        <div className="courses">
            <div className="core-courses">
                <h3 className="course-h3">Core Courses Sequence</h3>
                <div className="courses-pic">
                    <div className="font">
                    <Image className="picss" src={Corecourse1} alt="core-course1" width={300} height={200}/>
                    <p>Programming Fundamentals</p>
                    </div>
                    <div className="font">
                    <Image className="picss" src={Corecourse2} alt="core-course2" width={300} height={200}/>
                    <p>Web2 Using NextJS</p>
                    </div>
                    <div className="font">
                    <Image className="picss" src={Corecourse3} alt="core-course3" width={300} height={200}/>
                    <p>Earn as You Learn</p>
                    </div>
                </div>
            </div>
            <div className="advcourse-pic">
                <h3 className="course-h3">Advanced Courses</h3>
                    <div className="courses-pic">
                    <div className="font">
                    <Image className="picss" src={Advcourse1} alt="advance-course1" width={300} height={200}/>
                    <p>Artificial Intelligence</p>
                    </div>
                    <div className="font">
                    <Image className="picss" src={AdvCourse2} alt="advance-course2" width={300} height={200}/>
                    <p>Web 3 and Metaverse</p>
                    </div>
                    <div className="font">
                    <Image className="picss" src={AdvCourse3} alt="advance-course3" width={300} height={200}/>
                    <p>Cloud-Native Computing</p>
                    </div>
                    <div className="font">
                    <Image className="picss" src={AdvCourse4} alt="advance-course4" width={300} height={200}/>
                    <p>Ambient Computing and IoT</p>
                    </div>
                </div>
                <div id="course-tag" className="courses-pic">
                <div className="font">
                    <Image className="picss" src={AdvCourse5} alt="advance-course5" width={300} height={200}/>
                    <p>Genomics and Bioinformatics</p>
                    </div>
                    <div className="font" id="font-p">
                    <Image className="picss" src={AdvCourse6} alt="advance-course6" width={300} height={200}/>
                    <p>Network Programmability and <br/>Automation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;