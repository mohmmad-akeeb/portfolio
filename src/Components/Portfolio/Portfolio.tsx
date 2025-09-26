
import './Portfolio.css'
import theam_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.ts'
import arrow_icon from '../../assets/arrow_icon.svg'
export const Portfolio = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
            <img src={theam_pattern} alt="" />
            
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}
