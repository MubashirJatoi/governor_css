import Link from "next/link";
import logo from "../../public/image/governor logo.png";
import Image from "next/image";

function Navbar() {
    return(
        <div className="navbar">
            <div className="img">
                <Link href="/"><Image src={logo} alt="logo" width={90} height={114}/></Link>
            </div>
            <h3 className="text">Tuition Free Education Program on Latest Technologies</h3>
            <div className="links">
                <Link href={"/"} className="same">Home</Link>
                <Link href={"/apply"} className="same">Apply</Link>
                <Link href={"/jobs"} className="same">Jobs</Link>
                <Link href={"/result"} className="same">Result</Link>
                <Link href={"/courses"} className="same">Courses</Link>
            </div>
        </div>
    );
};

export default Navbar;