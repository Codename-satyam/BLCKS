import "./About.css"
import { useEffect, useState } from "react"
import profile0 from "../../Content/images/10.png"
import profile1 from "../../Content/images/11.png"
import profile2 from "../../Content/images/12.png"
import profile3 from "../../Content/images/13.png"
import profile4 from "../../Content/images/14.png"
import profile5 from "../../Content/images/15.png"


const images = [
    profile0,
    profile1,
    profile2,
    profile3,
    profile4,
    profile5
]

function About() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="about-section">
            <div className="about-container">
                
                <div className="image-wrapper">
                    <img src={images[index]} alt="profile" />
                </div>

                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Satyam Anand, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, and CSS, I strive to build user-friendly interfaces that provide seamless experiences across all devices.
                    </p>
                    <p>
                        When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and honing my skills through continuous learning.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About
