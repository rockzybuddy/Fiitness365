import "./static/success.css";
import { motion } from "framer-motion";
import success from "./static/images/success.png";
import { Link } from "react-router-dom";
const Success = () => {
    return (
        <div className="all">
            <div className="box">
                <motion.div
                    initial={{scale:0}}
                    animate={{scale:1}}
                    transition={{duration:0.2}}
                className="white">
                    <motion.div
                        initial={{scale:0}}
                        animate={{scale:1}}
                        transition={{duration:0.4}}
                    className="success">
                        <h1 className="text-white text-5xl font-bold my-5">Enrolled Successfully!</h1>
                        <p className="text-white text-xl">Please verify your payment details by physically visiting the gym.</p>
                        <button className="home_btn rounded-full p-2 mr-5 mb-5"><Link to={'/'}> Return to Home </Link></button>
                        <button className="re_btn rounded-full p-2"><Link to={'/subscribe'}> Fill Another Entry </Link></button>
                    </motion.div>
                    <motion.img
                    initial={{scale:0}}
                    animate={{scale:0.8}}
                    transition={{duration:0.4}}
                    src={success} alt="" />
                </motion.div>
            </div>
        </div>
    )
}
 
export default Success;