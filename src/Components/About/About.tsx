import React from 'react'
import './About.css'
import theam_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

export const About: React.FC = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theam_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I’m Mohammad Akeeb, a Computer Science Engineering student with a strong passion for Data Science and Artificial Intelligence/Machine Learning. Over the past three years of my B.Tech journey, I’ve built a solid foundation in Python and SQL, applying them to projects that combine data analysis, predictive modeling, and problem-solving.</p>
                    <p>Alongside my academic work, I’m actively upgrading my skills in Big Data tools to broaden my expertise in handling large-scale datasets and advanced analytics. I enjoy experimenting with new technologies and dedicating my free time to hands-on projects, online courses, and exploring cutting-edge tools. My long-term goal is to build impactful data-driven solutions and contribute to real-world projects that merge innovation with practical value.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p> <hr style={{width:'80%'}} /></div>
                    <div className="about-skill"><p>SQL</p> <hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>Power BI</p> <hr style={{width:'65%'}} /></div>
                    <div className="about-skill"><p>Docker</p> <hr style={{width:'50%'}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <div className="about-achievement">
                <h1>1+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

