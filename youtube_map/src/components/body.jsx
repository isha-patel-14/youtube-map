// import './body.css'
// import i1 from '../assets/Thumbnail-8.png'
// import i2 from '../assets/Thumbnail-9.png'
// import i3 from '../assets/Thumbnail-10.png'
// import i4 from '../assets/Thumbnail-11.png'
// import i5 from '../assets/Thumbnail-4.png'
// import i6 from '../assets/Thumbnail-5.png'
// import i7 from '../assets/Thumbnail-6.png'
// import i8 from '../assets/Thumbnail-7.png'
// import i9 from '../assets/Thumbnail.png'
// import i10 from '../assets/Thumbnail-1.png'
// import i11 from '../assets/Thumbnail-2.png'
// import i12 from '../assets/Thumbnail-3.png'
// import tick from '../assets/verified.png'
// import p1 from '../assets/Ellipse 4 (1).png'
// import p2 from '../assets/Ellipse 4 (2).png'
// import p3 from '../assets/Ellipse 4 (3).png'
// import p4 from '../assets/Ellipse 4 (4).png'
// import p5 from '../assets/Ellipse 4 (5).png'
// import p6 from '../assets/Ellipse 4 (6).png'
// import p from '../assets/Ellipse 4-1.png'
// import React,{useState,useEffect} from 'react'

// function Body() {

//     const [ video , setVideo ] = useState([])
//     const [ video1 , setVideo1 ] = useState([])
//     const [ video2 , setVideo2 ] = useState([])


//     useEffect(() => {
//         fetch('https://api-youtube-js-01.onrender.com/m_data1')
//       .then(response => response.json())
//       .then(m_data1 => {
//         console.log(m_data1); 
//         setVideo(m_data1);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });

//       },[]);

//       useEffect(() => {
//         fetch('https://api-youtube-js-01.onrender.com/m_data2')
//       .then(response => response.json())
//       .then(m_data2 => {
//         console.log(m_data2); 
//         setVideo1(m_data2);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });

//       },[]);


//       useEffect(() => {
//         fetch('https://api-youtube-js-01.onrender.com/m_data3')
//       .then(response => response.json())
//       .then(m_data3 => {
//         console.log(m_data3); 
//         setVideo2(m_data3);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });

//       },[]);


//     const m_data1 = [
//         {
//             src:i1,
//             profile: p1,
//             heading1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
//             heading2: {
//                 h2: "Coke Studio Bangla",
//                 views: "1.5M views - 2 days ago",
//                 verify: tick, 
//             },
//         },
//         {
//             src:i2,
//             profile: p2,
//             heading1: ["Infinix Note 12:", "AMOLED Helio G88 Soc!"],
//             heading2: {
//                 h2: "ATC Android ToTo Company",
//                 views: "4.2M views - 2 days ago",
//                 verify: tick, 
//             },
//         },
//         {
//             src:i3,
//             profile: p3,
//             heading1: ["My first UX Design case study-", "This got me my first job."],
//             heading2: {
//                 h2: "Saptarshi Prakash",
//                 views: "4.8K views - 1 year ago",

//             },
//         },
//         {
//             src:i4,
//             profile: p,
//             heading1: ["My Mix", "Songs"],
//             heading2: {
//                 h2: "Lopamudra Mitra,Anupam Roy",
//                 views: "1.5M views - 2 days ago",

//             },
//         },

//     ];

//     const m_data2 = [
//         {
//             src:i5,
//             profile: p4,
//             heading1: ["UX Design - What is it?(From AJ", "&Smart)"],
//             heading2: {
//                 h2: "AJ&Smar",
//                 views: "150K views - 3 years ago",
//                 verify: tick, 
//             },
//         },
//         {
//             src:i6,
//             profile: p,
//             heading1: ["Mix-Mombati|Mohon Sharif|Dhakaiya", "Dose|Mahib Ahsan ft Anika"],
//             heading2: {
//                 h2: "Mohon Sharif,Odd Signature,Shayan",
//                 views: "Chowdhury Arnob, and more",

//             },
//         },
//         {
//             src:i7,
//             profile: p5,
//             heading1: ["Passport", "|48 - VISA FREE"],
//             heading2: {
//                 h2: "Nadir On The Go",
//                 views: "1.7M views - 1 year ago",

//             },
//         },
//         {
//             src:i8,
//             profile: p6,
//             heading1: ["14 Advanced Tips to Design", "FASTER in Figma"],
//             heading2: {
//                 h2: "Miziko",
//                 views: "53K views - 1 year ago" ,
//                 verify: tick, 
//             },
//         },

//     ];

//     const m_data3 = [
//         {
//             src:i9,
//             profile: p5,
//             heading1: ["Visiting Thar Desert | ", "Hotest Desert"],
//             heading2: {
//                 h2: "Nadir On The Go",
//                 views: "1.5M views - 2 days ago", 
//             },
//         },
//         {
//             src:i10,
//             profile: p2,
//             heading1: ["Tech Skills |Figma|", "UI / UX Design"],
//             heading2: {
//                 h2: "Tech Company",
//                 views: "4.2M views - 2 days ago",
//                 verify: tick, 
//             },
//         },
//         {
//             src:i11,
//             profile: p3,
//             heading1: ["My first visit to Google", "First dream job place."],
//             heading2: {
//                 h2: "Saptarshi Prakash",
//                 views: "4.8K views - 1 year ago", 
//             },
//         },
//         {
//             src:i12,
//             profile: p,
//             heading1: ["Microsoft 1st interview", "Reviews and experience"],
//             heading2: {
//                 h2: "Lopamudra Mitra,Anupam Roy",
//                 views: "1.5M views - 2 days ago",
//                 verify: tick, 
//             },
//         },

//     ];

//     return (
//         <>
//             <div className='mainbody'>

//                 <div className='main1'>
//                 {video.map((line)=>
//                 (
//                 <div className="one">
//                     <div>
//                         <img src={line.src} className="card_pic"  />
//                     </div>
//                     <div>
//                         <img src={line.profile} className="p_icon" />
//                     </div>
//                     <div className="heading1">
//                         <div>{line.heading1[0]}</div>
//                         <div>{line.heading1[1]}</div>
//                     </div>
//                     <div className="heading2">
//                         <div className="h2">
//                             {line.heading2.h2}
//                             <div className="tick">
//                                 <img src={line.heading2.verify} />
//                             </div>
//                         </div>
//                         <div className="h2_1">{line.heading2.views}</div>
//                     </div>
//                 </div>
//                 ))
//                 }
//                 </div>

//                 <div className='main1'>
//                 {video1.map((line)=>
//                 (
//                 <div className="one">
//                     <div>
//                         <img src={line.src} className="card_pic"  />
//                     </div>
//                     <div>
//                         <img src={line.profile} className="p_icon" />
//                     </div>
//                     <div className="heading1">
//                         <div>{line.heading1[0]}</div>
//                         <div>{line.heading1[1]}</div>
//                     </div>
//                     <div className="heading2">
//                         <div className="h2">
//                             {line.heading2.h2}
//                             <div className="tick">
//                                 <img src={line.heading2.verify} />
//                             </div>
//                         </div>
//                         <div className="h2_1">{line.heading2.views}</div>
//                     </div>
//                 </div>
//                 ))
//                 }
//                 </div>

//                 <div className='main1'>
//                 {video2.map((line)=>
//                 (
//                 <div className="one">
//                     <div>
//                         <img src={line.src} className="card_pic"  />
//                     </div>
//                     <div>
//                         <img src={line.profile} className="p_icon" />
//                     </div>
//                     <div className="heading1">
//                         <div>{line.heading1[0]}</div>
//                         <div>{line.heading1[1]}</div>
//                     </div>
//                     <div className="heading2">
//                         <div className="h2">
//                             {line.heading2.h2}
//                             <div className="tick">
//                                 <img src={line.heading2.verify} />
//                             </div>
//                         </div>
//                         <div className="h2_1">{line.heading2.views}</div>
//                     </div>
//                 </div>
//                 ))
//                 }
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Body





// import './body.css';
// import React, { useState, useEffect } from 'react';

// function Body() {
//   const [video, setVideo] = useState([]);
//   const [video1, setVideo1] = useState([]);
//   const [video2, setVideo2] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredVideos, setFilteredVideos] = useState([]); // To store filtered results

//   const apiKey = 'AIzaSyD7UOvuFNnA8zwkRi9icRoVN_bE40XaNwk'; // Replace this with your actual API key

//   // Fetch video data with API key
//   useEffect(() => {
//     fetch(`https://api-youtube-js-01.onrender.com/m_data1?apiKey=${apiKey}`)
//       .then(response => response.json())
//       .then(m_data1 => {
//         console.log(m_data1);
//         setVideo(m_data1);
//         setFilteredVideos(m_data1); // Set filtered videos initially as all
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []);

//   useEffect(() => {
//     fetch(`https://api-youtube-js-01.onrender.com/m_data2?apiKey=${apiKey}`)
//       .then(response => response.json())
//       .then(m_data2 => {
//         console.log(m_data2);
//         setVideo1(m_data2);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []);

//   useEffect(() => {
//     fetch(`https://api-youtube-js-01.onrender.com/m_data3?apiKey=${apiKey}`)
//       .then(response => response.json())
//       .then(m_data3 => {
//         console.log(m_data3);
//         setVideo2(m_data3);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []);

//   // Handle search query change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search click to filter videos
//   const handleSearch = () => {
//     const filtered = [
//       ...video.filter((item) =>
//         item.heading1.some((heading) =>
//           heading.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       ),
//       ...video1.filter((item) =>
//         item.heading1.some((heading) =>
//           heading.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       ),
//       ...video2.filter((item) =>
//         item.heading1.some((heading) =>
//           heading.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       ),
//     ];
//     setFilteredVideos(filtered); // Set the filtered videos
//   };

//   return (
//     <>
//       <div className='search-container'>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search videos..."
//         />
//         <button onClick={handleSearch}>Search</button> {/* Trigger search */}
//       </div>

//       <div className='mainbody'>
//         {/* Display filtered videos */}
//         <div className='main1'>
//           {filteredVideos.map((line, index) => (
//             <div className="one" key={index}>
//               <div>
//                 <img src={line.src} className="card_pic" alt="Thumbnail" />
//               </div>
//               <div>
//                 <img src={line.profile} className="p_icon" alt="Profile" />
//               </div>
//               <div className="heading1">
//                 <div>{line.heading1[0]}</div>
//                 <div>{line.heading1[1]}</div>
//               </div>
//               <div className="heading2">
//                 <div className="h2">
//                   {line.heading2.h2}
//                   <div className="tick">
//                     <img src={line.heading2.verify} alt="Verified" />
//                   </div>
//                 </div>
//                 <div className="h2_1">{line.heading2.views}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Body;





// import React, { useState, useEffect } from 'react';
// import './body.css';

// function Body() {
//     const [query, setQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedVideoId, setSelectedVideoId] = useState(null); // Store the ID of the selected video
//     const [videoCount, setVideoCount] = useState(12);

//     const apiKey = 'AIzaSyA1BF3ZBY9qfljfxvFETNJ4Ek7cDxBnLgQ'; // Replace this with your new API key

//     // Function to fetch search results
//     const fetchVideos = (searchQuery) => {
//         const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}&maxResults=${videoCount}`;

//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log('API response:', data);
//                 if (data.items) {
//                     setSearchResults(data.items);
//                 } else {
//                     console.error('No items returned from API');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching search results:', error);
//             });
//     };

//     // Call this function when the search button is clicked
//     const handleSearch = () => {
//         if (query.trim() !== '') {
//             fetchVideos(query);
//         }
//     };

//     // Use useEffect to load trending videos when the component mounts
//     useEffect(() => {
//         const defaultQuery = 'Trending videos';
//         fetchVideos(defaultQuery);
//     }, [videoCount]);


//     // Handle click on a video to play it
//     const handleVideoClick = (videoId) => {
//         if (videoId) {
//             setSelectedVideoId(videoId);
//         }
//     };

//     const handleVideoCountChange = (count) => {
//         setVideoCount(count);
//       };

//     return (
//         <div className="mainbody">
//             <div className="search-bar">
//                 <input
//                     className='searchbar'
//                     type="text"
//                     placeholder="Search YouTube"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <button className='search_button' onClick={handleSearch}>Search</button>

//                 <div className="count-buttons">
//                     <button
//                         className="count-btn"
//                         onClick={() => handleVideoCountChange(4)}
//                     >
//                         4
//                     </button>
//                     <button
//                         className="count-btn"
//                         onClick={() => handleVideoCountChange(8)}
//                     >
//                         8
//                     </button>
//                     <button
//                         className="count-btn"
//                         onClick={() => handleVideoCountChange(12)}
//                     >
//                         12
//                     </button>
//                 </div>
//             </div>


//             {/* Video Player - Placed at the top of the results */}
//             {selectedVideoId && (
//                 <div className="video-player">
//                     <iframe
//                         width="100%"
//                         height="480"
//                         src={`https://www.youtube.com/embed/${selectedVideoId}`}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         title="YouTube Video Player"
//                     ></iframe>
//                 </div>
//             )}


//             <div className="results">
//                 {searchResults.length === 0 ? (
//                     <div className="no-results">
//                         <p>Start by searching for a video or check out the trending videos below!</p>
//                     </div>
//                 ) : (
//                     searchResults
//                         .filter(video => video.id.kind === 'youtube#video') // Only videos
//                         .map((video) => (
//                             <div
//                                 className="one"
//                                 key={video.id.videoId}
//                                 onClick={() => handleVideoClick(video.id.videoId)}
//                             >
//                                 <div>
//                                     <img
//                                         src={video.snippet.thumbnails.high.url}
//                                         className="card_pic"
//                                         alt={video.snippet.title}
//                                     />
//                                 </div>
//                                 <div className="heading1">
//                                     <div>{video.snippet.title}</div>
//                                 </div>
//                                 <div className="heading2">
//                                     <div className="h2">{video.snippet.channelTitle}</div>
//                                 </div>
//                             </div>
//                         ))
//                 )}
//             </div>
//         </div>
//     );
// }
// export default Body;



import React, { useState, useEffect } from 'react';
import './body.css';

function Body() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null); // Store the ID of the selected video
    const [videoCount, setVideoCount] = useState(12);

    const apiKey = 'AIzaSyA1BF3ZBY9qfljfxvFETNJ4Ek7cDxBnLgQ'; // Replace this with your new API key

    // Function to fetch search results
    const fetchVideos = (searchQuery) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}&maxResults=${videoCount}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('API response:', data);
                if (data.items) {
                    setSearchResults(data.items);
                } else {
                    console.error('No items returned from API');
                }
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

    // Call this function when the search button is clicked
    const handleSearch = () => {
        if (query.trim() !== '') {
            fetchVideos(query);
        }
    };

    // Use useEffect to load trending videos when the component mounts
    useEffect(() => {
        const defaultQuery = 'Trending videos';
        fetchVideos(defaultQuery);
    }, [videoCount]);

    // Handle click on a video to play it
    const handleVideoClick = (videoId) => {
        if (videoId) {
            setSelectedVideoId(videoId);
        }
    };

    // Function to handle video count change
    const handleVideoCountChange = (count) => {
        setVideoCount(count);
    };

    // Function to close the video player
    const handleCloseVideo = () => {
        setSelectedVideoId(null);
    };

    return (
        <div className="mainbody">
            <div className="search-bar">
                <input
                    className='searchbar'
                    type="text"
                    placeholder="Search YouTube"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='search_button' onClick={handleSearch}>Search</button>

                <div className="count-buttons">
                    <button 
                        className="count-btn" 
                        onClick={() => handleVideoCountChange(4)}
                    >
                        4
                    </button>
                    <button 
                        className="count-btn" 
                        onClick={() => handleVideoCountChange(8)}
                    >
                        8
                    </button>
                    <button 
                        className="count-btn" 
                        onClick={() => handleVideoCountChange(12)}
                    >
                        12
                    </button>
                </div>
            </div>

            {/* Video Player - Placed at the top of the results */}
            {selectedVideoId && (
                <div className="video-player">
                    {/* Close Button */}
                    <button className="close-button" onClick={handleCloseVideo}>×</button>
                    
                    <iframe
                        width="100%"
                        height="480"
                        src={`https://www.youtube.com/embed/${selectedVideoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube Video Player"
                    ></iframe>
                </div>
            )}

            <div className="results">
                {searchResults.length === 0 ? (
                    <div className="no-results">
                        <p>Start by searching for a video or check out the trending videos below!</p>
                    </div>
                ) : (
                    searchResults
                        .filter(video => video.id.kind === 'youtube#video') // Only videos
                        .map((video) => (
                            <div 
                                className="one" 
                                key={video.id.videoId} 
                                onClick={() => handleVideoClick(video.id.videoId)}
                            >
                                <div>
                                    <img 
                                        src={video.snippet.thumbnails.high.url} 
                                        className="card_pic" 
                                        alt={video.snippet.title} 
                                    />
                                </div>
                                <div className="heading1">
                                    <div>{video.snippet.title}</div>
                                </div>
                                <div className="heading2">
                                    <div className="h2">{video.snippet.channelTitle}</div>
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
}

export default Body;
