import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import {BiMenu , } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";
import {useStateContext} from '../Context/Context'







const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {activeBarre, isHovering ,showIcone ,  showPoint1  , showPoint2  ,showPoint3  , showPoint4  , showButton  , showPoint6  , showPoint7  , showPoint8   , 
    handleMouseMove , handleMouseEnter , handleMouseLeave , handleMouseMovee , handleMouseMovee1 , handleMouseMovee2 ,handleMouseMovee3 , handleMouseMovee4  , 
    handleMouseMovee5 , handleMouseMovee6 , handleMouseMovee7 , handleMouseLeavee , showMenu , 
    handleMouseEntere ,  handleMouseeave , wordRef , wordRef1 , wordRef2 , wordRef3 , wordRef4 , wordRef5 , wordRef6 , wordRef7 , mousePosition , CloseMenu
  } = useStateContext()





  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${ styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >


      <div className='' > 
    {
      activeBarre ? <>
                {
                  !showButton && <div className='absolute flex justify-between items-center  w-full'>
                                      <div className='h-14' onMouseMove={handleMouseMovee4} onMouseLeave={handleMouseLeavee}>
                                            <div   className="hover-container flex font-bold " onMouseEnter={()=>{handleMouseEntere()}}
                                            ref={wordRef4}  onMouseLeave={()=>{handleMouseeave() }}>
                                                      <p className='text-white text-[18px] font-bold cursor-pointer flex mt-2 '>
                                                        Zakariya Zouazou &nbsp;
                                                        <span className='sm:block hidden'> | JavaScript Mastery</span>
                                                      </p> 
                                          </div>
                                      </div>  
                                    <div className='mt-10  flex mr-16'>
                                    <div className="relative w-32 h-20   m-3   cursor-pointer" onMouseMove={handleMouseMovee5} onMouseLeave={handleMouseLeavee}>
                                        <div className='m-3 flex justify-center w-48 h-40'>
                                            <div ref={wordRef5} className="absolute top-0 transition-transform ease-in left-0 p-0 text-xl  flex flex-wrap flex-row justify-center items-center"> <h1 className='text-2xl font-bold'><a href="#work">Work</a></h1> {showPoint6 ? <VscDebugBreakpointData className='Point text-white w-full  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white w-full  mr-1 AnimationPointDrop'/>}</div>  
                                        </div>
                                    </div>
                                    <div className="relative w-32 h-20   m-3   cursor-pointer" onMouseMove={handleMouseMovee6} onMouseLeave={handleMouseLeavee}>
                                        <div className='m-3 flex justify-center w-48 h-40'>
                                            <div ref={wordRef6} className="absolute top-0 transition-transform ease-in left-0 p-0 text-xl  flex flex-wrap flex-row justify-center items-center"> <h1 className='text-2xl font-bold'><a href="#about">About</a></h1> {showPoint7 ? <VscDebugBreakpointData className='Point text-white w-full  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white w-full  mr-1 AnimationPointDrop'/>}</div>  
                                        </div>
                                    </div>
                                    <div className="relative w-32 h-20   m-3  cursor-pointer" onMouseMove={handleMouseMovee7} onMouseLeave={handleMouseLeavee}>
                                              <div className='m-3 flex justify-center w-48 h-40'>
                                              <div ref={wordRef7} className="absolute top-0 transition-transform ease-in left-0 p-0 text-xl  flex flex-wrap flex-row justify-center items-center"> <h1 className='text-2xl font-bold'><a href="#contact">Contact</a></h1> {showPoint8 ? <VscDebugBreakpointData className='Point text-white w-full  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white w-full  mr-1 AnimationPointDrop'/>}</div>  
                                            </div>
                                    </div>
                                    
                                  </div> 
                       </div>
                }
                {
                  showButton && <div
                  className="fixed top-0 right-0 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-black  shine-hover-effect"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ transform: isHovering ? `translate(${mousePosition.x / 2}px, ${mousePosition.y / 2}px)` : "none" }}
                >
                    <div className="shine"></div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full">
                      
                      {
                        showIcone ? <BiMenu
                        style={{ transform: isHovering ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'none' }}
                        className="text-white  text-4xl transition-all" 
                        onClick={showMenu}/> : 
                                    <AiOutlineClose
                                    style={{ transform: isHovering ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'none' }}
                                    className="text-white  text-4xl transition-all" 
                                    onClick={CloseMenu}/>
                      }    
                    </div>
                  </div>
                }

      </> :     
      <div
            className="fixed top-0 right-0 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-black  shine-hover-effect"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transform: isHovering ? `translate(${mousePosition.x / 2}px, ${mousePosition.y / 2}px)` : "none" }}
          >
              <div className="shine"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full">
                
                {
                  showIcone ? <BiMenu
                  style={{ transform: isHovering ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'none' }}
                  className="text-white  text-4xl transition-all" 
                  onClick={showMenu}/> : 
                  <AiOutlineClose
                  style={{ transform: isHovering ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'none' }}
                  className="text-white  text-4xl transition-all" 
                  onClick={CloseMenu}/>
                }    
              </div>
            </div>
    }
    <div className='test w-full flex justify-center'>  
          <div className='mt-10 w-1/2'>
            <div className='mt-14 mb-4 pb-3 w-full '>
                <h1 className='font-bold text-xs pb-4 text-gray-600 border-b-1 border-gray-600'>NAVIGATION</h1>
            </div>
          <div className="container  cursor-pointer flex justify-center" onMouseMove={handleMouseMovee} onMouseLeave={handleMouseLeavee}>
              <div className='m-3 flex justify-center w-48 h-40'>
                    <div ref={wordRef} className="word flex justify-center items-center" onClick={CloseMenu} >{showPoint1 ? <VscDebugBreakpointData className='Point text-white  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white  mr-1 AnimationPointDrop'/>} <h1 className='text-4xl font-bold'><a href="#Main">Home</a></h1></div>  
             </div>
          </div>
          <div className="container  cursor-pointer" onMouseMove={handleMouseMovee1} onMouseLeave={handleMouseLeavee}>
              <div className='m-3 flex justify-center w-48 h-40'>
                  <div ref={wordRef1} className="word flex justify-center items-center" onClick={CloseMenu} >{showPoint2 ? <VscDebugBreakpointData className='Point text-white  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white  mr-1 AnimationPointDrop'/>} <h1 className='text-4xl font-bold'><a href="#work">Work</a></h1> </div>  
              </div>
          </div>
          <div className="container  cursor-pointer" onMouseMove={handleMouseMovee2} onMouseLeave={handleMouseLeavee}>
              <div className='m-3 flex justify-center w-48 h-40'>
                  <div ref={wordRef2} className="word flex justify-center items-center" onClick={CloseMenu} >{showPoint3 ? <VscDebugBreakpointData className='Point text-white  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white  mr-1 AnimationPointDrop'/>} <h1 className='text-4xl font-bold'> <a href="#about">About</a> </h1></div>  
              </div>
          </div>
          <div className="container cursor-pointer" onMouseMove={handleMouseMovee3} onMouseLeave={handleMouseLeavee}>
                    <div className='m-3 flex justify-center w-48 h-40'>
                      <div ref={wordRef3} className="word flex justify-center items-center" onClick={CloseMenu} >{showPoint4 ? <VscDebugBreakpointData className='Point text-white  mr-1 pointAnimation'/> : <VscDebugBreakpointData className='Point text-white  mr-1 AnimationPointDrop'/>} <h1 className='text-4xl font-bold'><a href="#contact">Contact</a></h1> </div>  
                   </div>
          </div>
          <div className='mt-20'> 
            <h1 className='text-gray-600'>Socials</h1>
                <div className='flex justify-center w-full'>
                    <h1 className='font-bold m-3 text-xs pb-4 text-gray-600   transition-colors ease-in-out hover:text-gray-900'><a href="">Linkden</a></h1>
                    <h1 className='font-bold m-3 text-xs pb-4 text-gray-600  transition-colors ease-in-out hover:text-gray-900'><a href="">Instagrame</a></h1>
                    <h1 className='font-bold m-3 text-xs pb-4 text-gray-600  transition-colors ease-in-out hover:text-gray-900'><a href="">Githhub</a></h1>
                </div>
            </div>
        </div> 
    </div>  
  </div>



      
    </nav>
  );
};

export default Navbar;





// <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Zakariya Zouazou &nbsp;
//             <span className='sm:block hidden'> | JavaScript Mastery</span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>