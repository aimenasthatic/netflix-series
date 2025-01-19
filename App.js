import React from 'react';
import Cards from "./Netflix series/cards";
import Sdata from './Netflix series/sdata';
// import LockKey from "./LockKey.jpg"; 
// import innocent from "./innocent.jpg"
// import Gentlemen from "./gentlemen.jpg"
// import Manifest from "./Manifest.jpg"
// import Doctor from "./Doctor Stranger.jpg"
// console.log(Sdata[0].title)
function App() {
    return (
        <>
      <h1 className='h1'>Netflix Series</h1>
            <main className='main-card'>
            <Cards
           
                imgsrc={Sdata[0].imgsrc} 
              link={Sdata[0].link}
              title={Sdata[0].title}
             sname={Sdata[0].sname}
            /> 
             <Cards
                imgsrc={Sdata[1].imgsrc} 
              link={Sdata[1].link}
              title={Sdata[1].title}
             sname={Sdata[1].sname}
            /> <Cards
                imgsrc={Sdata[3].imgsrc} 
              link={Sdata[2].link}
              title={Sdata[2].title}
             sname={Sdata[2].sname}
            />
            </main>
            <main className='nd-card'>
            <Cards
                imgsrc={Sdata[3].imgsrc} 
              link={Sdata[3].link}
              title={Sdata[3].title}
             sname={Sdata[3].sname}
            /> <Cards
                imgsrc={Sdata[4].imgsrc} 
              link={Sdata[4].link}
              title={Sdata[4].title}
             sname={Sdata[4].sname}
            />
            </main>
        </>
    );
}

export default App;
