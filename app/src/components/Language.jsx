
// // import React, { useState } from "react";

// const languageOptions = [ 
//     {
//       id: "en",
//       name: "English",
//       flagimg:
//         "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
//     },
//     {
//       id: "it",
//       name: "Italian",
//       flagimg: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
//     },
//   ];

// const defaultLangFlag = <img src={languageOptions[0].flagimg} height="30" width="30" alt="nope" />;

// const [langFlag, setLangFlag] = useState(defaultLangFlag)

// const Example = () => {
//     const [cssDisplay, setCssDisplay] = useState('none');
//     const [langFlag, setLangFlag] = useState(defaultLangFlag)

//   const showDropdown = () => {
//     if (cssDisplay === 'none'){
//       setCssDisplay('block');
//     } else {
//       setCssDisplay('none');
//     }
//   };
  
//   const selectListItem = (event) => {
//     handleLanguageChange(event);
//     setCssDisplay('none');
//     setLangFlag(<img src={event.target.src} height="30" width="30" alt="nope" />)
//   };
  
//     const handleLanguageChange = (event) => userLanguageChange(event);
//     const userLanguageChange = (event) => {
//         console.log("Here grab event.target.id and propagate lang change to app");
//     }
  
//     return (
//      <div>
//       <button onClick={showDropdown} >{langFlag}</button>
//        <ul style={{ display: cssDisplay }}>
//         {languageOptions.map((lang) => (
//           <li id={lang.id} key={lang.id} disabled>
//              <img onClick={selectListItem} src={lang.flagimg} height="30" width="30" alt="flagpic" id={lang.id} />
//              {lang.name}
//            </li>
//         ))}
//       </ul>
//      </div>
//     );
// };
