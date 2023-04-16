import React , {createContext , useEffect , useContext , useState , useRef} from 'react';
const StateContext = createContext() ; 



export const ContextProvider = ({children})=>{
    const [ShowMenu , SetshowMenu] = useState(false)
    const [ActiveMenu , SetActiveMenu] = useState(false)
    const [activeBarre,setactiveBarre] = useState(true)
    const [screensize , Setscreensize] = useState(undefined)

    ///////////////////////////////////////////////////



    useEffect(() => {
        const handleresize = () => {
             Setscreensize(window.innerWidth)
        }
  
        window.addEventListener("resize", handleresize)  //besh kol mayesghare lwidth yetbadel lwidth fe weset Setscreensize
  
        handleresize()
  
        return()=> window.removeEventListener('resize' , handleresize) // besh tarazanesh lpage
    }, [])
  
  
    useEffect(() => {
         if(screensize <= 700){
          setactiveBarre(false); 
         }else{
           setactiveBarre(true)
         }
    }, [screensize])


    ////////////////////////////////////////////////////////////////////////////

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showIcone , setShowIcone] = useState(true);
  const [showPoint1 , setShowPoint1] = useState(false);
  const [showPoint2 , setShowPoint2] = useState(false);
  const [showPoint3 , setShowPoint3] = useState(false);
  const [showPoint4 , setShowPoint4] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showPoint5 , setShowPoint5] = useState(false);
  const [showPoint6 , setShowPoint6] = useState(false);
  const [showPoint7 , setShowPoint7] = useState(false);
  const [showPoint8 , setShowPoint8] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const movingText = document.querySelector('.moving-text');
      const rect = movingText.getBoundingClientRect();
      const visible = (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
      setIsVisible(visible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animationClass = isVisible ? 'move-left-to-right' : 'move-right-to-left';


  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  

  
  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = event;
    const position = {
      x: clientX - left - width / 2,
      y: clientY - top - height / 2,
    };
    setMousePosition(position);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };



  const wordRef = useRef(null);

  const handleMouseMovee = (event) => {
    const word = wordRef.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint1(true)

  };


  const wordRef1 = useRef(null);

  const handleMouseMovee1 = (event) => {
    const word = wordRef1.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint2(true)

  };

  const wordRef2 = useRef(null);

  const handleMouseMovee2 = (event) => {
    const word = wordRef2.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint3(true)


  };


  const wordRef3 = useRef(null);

  const handleMouseMovee3 = (event) => {
    const word = wordRef3.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint4(true);


  };



  const wordRef4 = useRef(null);

  const handleMouseMovee4 = (event) => {
    const word = wordRef4.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint5(true);
  };


  const wordRef5 = useRef(null);

  const handleMouseMovee5 = (event) => {
    const word = wordRef5.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint6(true);


  };


  const wordRef6 = useRef(null);

  const handleMouseMovee6 = (event) => {
    const word = wordRef6.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint7(true);


  };


  const wordRef7 = useRef(null);

  const handleMouseMovee7 = (event) => {
    const word = wordRef7.current;
    const container = word.parentElement;
    const containerRect = container.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    const x = event.clientX - containerRect.left - word.offsetWidth / 2;
    const y = event.clientY - containerRect.top - word.offsetHeight / 2;
    const maxX = container.offsetWidth - word.offsetWidth - 4; // Limit horizontal movement to 30px less than container width
    const maxY = container.offsetHeight - word.offsetHeight - 7; // Limit vertical movement to 60px less than container height
    word.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    setShowPoint8(true);
  };











  // Helper function to clamp a value between a minimum and maximum
  const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  };


  const handleMouseLeavee = () => {
    const word = wordRef.current;
    const word1 = wordRef1.current;
    const word2 = wordRef2.current;
    const word3 = wordRef3.current;
    const word4 = wordRef4.current;
    const word5 = wordRef5.current;
    const word6 = wordRef6.current;
    const word7 = wordRef7.current;

    word.style.transform = 'translate(0, 0)';
    word1.style.transform = 'translate(0, 0)';
    word2.style.transform = 'translate(0, 0)';
    word3.style.transform = 'translate(0, 0)';
    word4.style.transform = 'translate(0, 0)';
    word5.style.transform = 'translate(0, 0)';
    word6.style.transform = 'translate(0, 0)';
    word7.style.transform = 'translate(0, 0)';

    setShowPoint1(false);
    setShowPoint2(false);
    setShowPoint3(false);
    setShowPoint4(false);
    setShowPoint5(false);
    setShowPoint6(false);
    setShowPoint7(false);
    setShowPoint8(false);
   
  };
 
   const showMenu=() =>{
         const test = document.querySelector('.test')
         test.classList.add('add')
         setShowIcone(false)
   }
   const CloseMenu=()=>{
    const test = document.querySelector('.test')
    test.classList.remove('add')
    setShowIcone(true)

}

const [showTitle, setShowTitle] = useState(false);

const handleMouseEntere = () => {
  setShowTitle(true);
  const Copy = document.querySelector('.Copy')
  Copy.classList.add('rotation')
};

const handleMouseeave = () => {
  setShowTitle(false);
  const Copy = document.querySelector('.Copy')
  Copy.classList.remove('rotation')

};


      

    
     return (
          <StateContext.Provider  value={{ActiveMenu , SetActiveMenu , activeBarre,setactiveBarre , isHovering, setIsHovering ,showIcone , setShowIcone ,  showPoint1 , setShowPoint1 , showPoint2 , setShowPoint2  , 
               showPoint3 , setShowPoint3 , showPoint4 , setShowPoint4 , showButton, setShowButton , showPoint5 , setShowPoint5 , showPoint6 , setShowPoint6  , showPoint7 , setShowPoint7 , showPoint8 , setShowPoint8 , isVisible, setIsVisible , handleClick , 
               handleMouseMove , handleMouseEnter , handleMouseLeave , handleMouseMovee , handleMouseMovee1 , handleMouseMovee2 ,handleMouseMovee3 , handleMouseMovee4  , handleMouseMovee5 ,  handleMouseMovee6 , handleMouseMovee7 , clamp  , handleMouseLeavee , showMenu , 
               handleMouseEntere ,   showTitle, setShowTitle , handleMouseeave ,
               wordRef , wordRef1 , wordRef2 , wordRef3 , wordRef4 , wordRef4 , wordRef5 , wordRef6 , wordRef7 , mousePosition , CloseMenu
             }}>
              {children}
          </StateContext.Provider>
     )
}



export const useStateContext = () => useContext(StateContext)


