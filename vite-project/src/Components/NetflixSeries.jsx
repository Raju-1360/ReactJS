import React from 'react';
import seriesData from '../api/seriesData.json';
import styled from 'styled-components';

import styles from "../Components/series.module.css"

// import "../Components/net.css"
import Child from './Props/Child';

export const Netflixseries = () => {

  const Btn = styled.button`
  color: white;
  border: 1px solid white;
`;
  return (
    <> 
    <h1 id={styles.list}> List of Best Nefliex Show</h1>
      <div className={styles.grid}> 

      { 
  

        seriesData.map(series => (
          <div key={series.id}> {/* Assuming each series has a unique id */}
            <div className={styles.child}> 
            
            <img 
              src={series.img_url} 
              alt={series.name}
              height="40%"
              width="40%" 
            />
            <h1>Name: {series.name}</h1>
            <h3>Rating: <span className={series.rating > 8.5 ? styles.super : styles.average}>{series.rating}</span></h3>

            <p>Summary: {series.description}</p>
            <p>Cast: {series.cast}</p>
            <Btn>
              <a href={series.watch_url} target="_blank" rel="noopener noreferrer">Watch Now</a>
            </Btn>
          </div>
          </div>





        ))
        
      }
       </div>
      
    </>
  );
}




{
  seriesData.map(series=>(
    <div key={series.id}> {/* Assuming each series has a unique id */}
    <img 
      src={series.img_url} 
      alt={series.name}
      height="40%"
      width="40%" 
    />
    <h1>Name: {series.name}</h1>
    <h3>Rating: {series.rating}</h3> 
    <p>Summary: {series.description}</p>
    <p>Cast: {series.cast}</p>
    <button>
      <a href={series.watch_url} target="_blank" rel="noopener noreferrer">Watch Now🔥</a>
    </button>
  </div>

  ))
}


// style components

// const Button =style.button`color :red`;
// const Button = styled.button({
//color:gray;})