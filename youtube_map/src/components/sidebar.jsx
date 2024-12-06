import './sidebar.css'
import threeLine from '../assets/hambarger.png'
import logo from '../assets/Youtube logo.png'
import home from '../assets/home.png'
import explore from '../assets/explore.png'
import shorts from '../assets/shorts.png'
import sub from '../assets/subscription.png'
import lib from '../assets/library.png'
import history from '../assets/history.png'
import vid from '../assets/your_video.png'
import later from '../assets/watch_later.png'
import liked from '../assets/liked.png'
import more from '../assets/down_arrow.png'
import s1 from '../assets/Ellipse 1.png'
import s2 from '../assets/Ellipse 1 (1).png'
import s3 from '../assets/Ellipse 1 (2).png'
import s4 from '../assets/Ellipse 1 (3).png'
import s5 from '../assets/Ellipse 1 (4).png'
import s6 from '../assets/Ellipse 1 (5).png'

function Sidebar() {

    const data1 = [
        { src: home, text: "Home" },
        { src: explore, text: "Explores" },
        { src: shorts, text: "Shorts" },
        { src: sub, text: "Subscriptions" },
    ];

    const data2 = [
        { src: lib, text: "Library" },
        { src: history, text: "History" },
        { src: vid, text: "Your videos" },
        { src: later, text: "Watch later" },
        { src: liked, text: "Liked videos" },
        { src: more, text: "Show more" },
    ];

    const data3 = [
        { src: s1, text: "Nadir On The Go" },
        { src: s2, text: "Coke Studio Bangla" },
        { src: s3, text: "MKBHD"},
        { src: s4, text: "Figma" },
        { src: s5, text: "ATC Android ToTo" },
        { src: s6, text: "Alux.com" },
    ];

    return (
        <>
            <div className='navbar'>

                <div className='bar1'>
                    <div><img src={threeLine} className="side1" /></div>
                    <div><img src={logo} className='side1' /></div>
                </div>


                <div className='w_box'></div>
                <div className='nav-2'>
                    <div className='bar2'>
                        {data1.map((detail) =>
                        (
                            <div className='side2'>
                                <img src={detail.src} />
                                <div>{detail.text}</div>
                            </div>
                        )
                        )}

                        {/* <div className='side2'>
                            <img src={home} />
                            <div>Home</div>
                        </div>
                        <div className='side2'>
                            <img src={explore} />
                            <div>Explores</div>
                        </div>
                        <div className='side2'><img src={shorts} />
                            <div>Shorts</div>
                        </div>
                        <div className='side2'><img src={sub} />
                            <div>Subscriptions</div>
                        </div> */}
                    </div>

                    <div className='line'></div>

                    <div className='bar2'>

                        {data2.map((detail) =>
                        (
                            <div className='side2'>
                                <img src={detail.src} />
                                <div>{detail.text}</div>
                            </div>
                        )
                        )}

                        {/* <div className='side2'><img src={lib} />
                            <div>Library</div>
                        </div>
                        <div className='side2'><img src={history} />
                            <div>History</div>
                        </div>
                        <div className='side2'><img src={vid} />
                            <div>Your videos</div>
                        </div>
                        <div className='side2'><img src={later} />
                            <div>Watch later</div>
                        </div>
                        <div className='side2'><img src={liked} />
                            <div>Liked videos</div>
                        </div>
                        <div className='side2'><img src={more} />
                            <div>Show more</div>
                        </div> */}
                    </div>

                    <div className='line'></div>


                    <div className='bar2'>
                        <div className='sub'>SUBSCRIPTIONS</div>

                        {data3.map((detail) =>
                        (
                            <div className='side2'>
                                <img src={detail.src} />
                                <div>{detail.text}</div>
                            </div>
                        )
                        )}

                        {/* <div className='bar2'>
                        <div className='side2'><img src={s1} />
                            <div>Nadir On The go</div>
                        </div>
                        <div className='side2'><img src={s2} />
                            <div>Coke Studio Bangla</div>
                        </div>
                        <div className='side2'><img src={s3} />
                            <div>MKBHD</div>
                        </div>
                        <div className='side2'><img src={s4} />
                            <div>Figma</div>
                        </div>
                        <div className='side2'><img src={s5} />
                            <div>ATC Android ToTo</div>
                        </div>
                        <div className='side2'><img src={s6} />
                            <div>Alux.com</div>
                        </div> */}

                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar