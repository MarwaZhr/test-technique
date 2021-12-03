import React from "react";
import Header from "./parts/header.js";
import Sidebar from "./features/sidebar.js";


const Layout = ({ children }) => {
//   const router = useRouter( "" );
//   let scrollTop;
//   useEffect( () => {
//     scrollTop = document.querySelector( '#scroll-top' );
//     window.addEventListener( 'scroll', scrollHandler, false );
// }, [] )

// function toScrollTop () {
//   if ( isSafariBrowser() || isEdgeBrowser() ) {
//       let pos = window.pageYOffset;
//       let timerId = setInterval( () => {
//           if ( pos <= 0 ) clearInterval( timerId );
//           window.scrollBy( 0, -120 );
//           pos -= 120;
//       }, 1 );
//   } else {
//       window.scrollTo( {
//           top: 0,
//           behavior: 'smooth'
//       } );
//   }
// }

// function scrollHandler () {
//   if ( window.pageYOffset >= 400 ) {
//       scrollTop.classList.add( 'show' );
//   } else {
//       scrollTop.classList.remove( 'show' );
//   }
// }
// function hideMobileMenu () {
//   document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
// }

  return (
    <>
    <div>
    <Header />
    <Sidebar/>
      {children}
    </div>
    
          
    {/* <button id="scroll-top" title="Back to top" onClick={ toScrollTop }>
        <i className="icon-arrow-up"></i>
    </button> */}
   </>
  );
};




export default Layout;
