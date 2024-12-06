import './navbar.css'
import search from '../assets/search.png'
import mic from '../assets/mic.png'
import create from '../assets/create.png'
import more from '../assets/more.png'
import bell from '../assets/bell.png'
import profile from '../assets/Ellipse 1 (2).png'
import arrowLeft from '../assets/leftBottom.png'

function Navbar(){
    const navIcons = [
        { src: create },
        { src: more},
        { src: bell},
        { src: profile},
    ];

    const navName=[
        {text:"All"},
        {text:"Cook Studio"},
        {text:"UX"},
        {text:"Case Study"},
        {text:"Music"},
        {text:"Bangla Lofi"},
        {text:"Tour"},
        {text:"Saintmartin"},
        {text:"Tech"},
        {text:"iPhone 13"},
        {text:"User Interface Design"},
        {text:"Computer"},
    ];

    return(
        <>
        <div className='n_bar1'>
            <div className='n1'>
            <input type="text" placeholder='Search' />
            <div><img src={search} className='search'/></div>
            <div><img src={mic}/></div>
            </div>

            <div className='n2'>
            {navIcons.map((icons) =>
                        (
                            <div className='n2_icon'>
                                <img src={icons.src} />
                            </div>
                        )
                        )}
            </div>
        </div>

        <div className='n_bar2'>
        {navName.map((names) =>
                        (
                            <div className='n2_name'>
                                {names.text}
                            </div>
                        )
                        )}
                        <div><img src={arrowLeft} className='leftArr'/></div>
        </div>
        <div className='line1'></div>

        </>
    )
}
export default Navbar