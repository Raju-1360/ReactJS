import { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import './style.css';

export const Tabs = ({ content }) => {
    const [currentTab, setCurrentTab] = useState(0);


    function handler(tabindex) {
        setCurrentTab(tabindex);
   
    }

    return (
        <>
            <Container>
                <Typography variant='h1'> Explore Our Services </Typography>
                <div className="tab">
                    <div className="wrapper">
                        {content.map((item, index) => (
                            <div key={index}>
                                <Button onClick={() => handler(index)} variant="contained">
                                    <span className='tabs'>{item.label}</span>
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="contents">
                        {content[currentTab] && content[currentTab].contents}
                    </div>
                </div>
            </Container>
        </>
    );
}





























// import { useState } from 'react';

// export const Tabs = ({ content, onChange }) => {
//     const [currentTab, setCurrentTab] = useState(0);

//     function handleClick(currentIndex) {
//         setCurrentTab(currentIndex);
//         onChange(currentIndex);
//     }

//     return (
//         <>
//             <div className="wrapper">
//                 <div className="heading">
//                     {content.map((item, index) => (
//                         <div 
//                             onClick={() => handleClick(index)}
//                             key={item.label}
//                         >
//                             <span className="label">{item.label}</span>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="content">
//                     {content[currentTab] && content[currentTab].content}
//                 </div>
//             </div>
//         </>
//     );
// };
