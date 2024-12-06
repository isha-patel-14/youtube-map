import './body.css'
import i1 from '../assets/Thumbnail-8.png'
import i2 from '../assets/Thumbnail-9.png'
import i3 from '../assets/Thumbnail-10.png'
import i4 from '../assets/Thumbnail-11.png'
import i5 from '../assets/Thumbnail-4.png'
import i6 from '../assets/Thumbnail-5.png'
import i7 from '../assets/Thumbnail-6.png'
import i8 from '../assets/Thumbnail-7.png'
import i9 from '../assets/Thumbnail.png'
import i10 from '../assets/Thumbnail-1.png'
import i11 from '../assets/Thumbnail-2.png'
import i12 from '../assets/Thumbnail-3.png'
import tick from '../assets/verified.png'
import p1 from '../assets/Ellipse 4 (1).png'
import p2 from '../assets/Ellipse 4 (2).png'
import p3 from '../assets/Ellipse 4 (3).png'
import p4 from '../assets/Ellipse 4 (4).png'
import p5 from '../assets/Ellipse 4 (5).png'
import p6 from '../assets/Ellipse 4 (6).png'
import p from '../assets/Ellipse 4-1.png'

function Body() {

    const m_data1 = [
        {
            src:i1,
            profile: p1,
            heading1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
            heading2: {
                h2: "Coke Studio Bangla",
                views: "1.5M views - 2 days ago",
                verify: tick, 
            },
        },
        {
            src:i2,
            profile: p2,
            heading1: ["Infinix Note 12:", "AMOLED Helio G88 Soc!"],
            heading2: {
                h2: "ATC Android ToTo Company",
                views: "4.2M views - 2 days ago",
                verify: tick, 
            },
        },
        {
            src:i3,
            profile: p3,
            heading1: ["My first UX Design case study-", "This got me my first job."],
            heading2: {
                h2: "Saptarshi Prakash",
                views: "4.8K views - 1 year ago",
                 
            },
        },
        {
            src:i4,
            profile: p,
            heading1: ["My Mix", "Songs"],
            heading2: {
                h2: "Lopamudra Mitra,Anupam Roy",
                views: "1.5M views - 2 days ago",
                 
            },
        },
        
    ];

    const m_data2 = [
        {
            src:i5,
            profile: p4,
            heading1: ["UX Design - What is it?(From AJ", "&Smart)"],
            heading2: {
                h2: "AJ&Smar",
                views: "150K views - 3 years ago",
                verify: tick, 
            },
        },
        {
            src:i6,
            profile: p,
            heading1: ["Mix-Mombati|Mohon Sharif|Dhakaiya", "Dose|Mahib Ahsan ft Anika"],
            heading2: {
                h2: "Mohon Sharif,Odd Signature,Shayan",
                views: "Chowdhury Arnob, and more",
                
            },
        },
        {
            src:i7,
            profile: p5,
            heading1: ["Passport", "|48 - VISA FREE"],
            heading2: {
                h2: "Nadir On The Go",
                views: "1.7M views - 1 year ago",
                
            },
        },
        {
            src:i8,
            profile: p6,
            heading1: ["14 Advanced Tips to Design", "FASTER in Figma"],
            heading2: {
                h2: "Miziko",
                views: "53K views - 1 year ago" ,
                verify: tick, 
            },
        },
        
    ];

    const m_data3 = [
        {
            src:i9,
            profile: p5,
            heading1: ["Visiting Thar Desert | ", "Hotest Desert"],
            heading2: {
                h2: "Nadir On The Go",
                views: "1.5M views - 2 days ago", 
            },
        },
        {
            src:i10,
            profile: p2,
            heading1: ["Tech Skills |Figma|", "UI / UX Design"],
            heading2: {
                h2: "Tech Company",
                views: "4.2M views - 2 days ago",
                verify: tick, 
            },
        },
        {
            src:i11,
            profile: p3,
            heading1: ["My first visit to Google", "First dream job place."],
            heading2: {
                h2: "Saptarshi Prakash",
                views: "4.8K views - 1 year ago", 
            },
        },
        {
            src:i12,
            profile: p,
            heading1: ["Microsoft 1st interview", "Reviews and experience"],
            heading2: {
                h2: "Lopamudra Mitra,Anupam Roy",
                views: "1.5M views - 2 days ago",
                verify: tick, 
            },
        },
        
    ];

    return (
        <>
            <div className='mainbody'>

                <div className='main1'>
                {m_data1.map((line)=>
                (
                <div className="one">
                    <div>
                        <img src={line.src} className="card_pic"  />
                    </div>
                    <div>
                        <img src={line.profile} className="p_icon" />
                    </div>
                    <div className="heading1">
                        <div>{line.heading1[0]}</div>
                        <div>{line.heading1[1]}</div>
                    </div>
                    <div className="heading2">
                        <div className="h2">
                            {line.heading2.h2}
                            <div className="tick">
                                <img src={line.heading2.verify} />
                            </div>
                        </div>
                        <div className="h2_1">{line.heading2.views}</div>
                    </div>
                </div>
                ))
                }
                </div>

                <div className='main1'>
                {m_data2.map((line)=>
                (
                <div className="one">
                    <div>
                        <img src={line.src} className="card_pic"  />
                    </div>
                    <div>
                        <img src={line.profile} className="p_icon" />
                    </div>
                    <div className="heading1">
                        <div>{line.heading1[0]}</div>
                        <div>{line.heading1[1]}</div>
                    </div>
                    <div className="heading2">
                        <div className="h2">
                            {line.heading2.h2}
                            <div className="tick">
                                <img src={line.heading2.verify} />
                            </div>
                        </div>
                        <div className="h2_1">{line.heading2.views}</div>
                    </div>
                </div>
                ))
                }
                </div>


                <div className='main1'>
                {m_data3.map((line)=>
                (
                <div className="one">
                    <div>
                        <img src={line.src} className="card_pic"  />
                    </div>
                    <div>
                        <img src={line.profile} className="p_icon" />
                    </div>
                    <div className="heading1">
                        <div>{line.heading1[0]}</div>
                        <div>{line.heading1[1]}</div>
                    </div>
                    <div className="heading2">
                        <div className="h2">
                            {line.heading2.h2}
                            <div className="tick">
                                <img src={line.heading2.verify} />
                            </div>
                        </div>
                        <div className="h2_1">{line.heading2.views}</div>
                    </div>
                </div>
                ))
                }
                </div>
            </div>
        </>
    )
}
export default Body