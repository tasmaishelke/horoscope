import './about.css'
import React, { useState, useEffect } from 'react';
import Database from './database';
import { useLocation } from 'react-router-dom';


function About()
{

  const locations = useLocation();
  const { name, gender,  birthday, location} = locations.state;

    return(
      <>
      <div className='userdetails'>
        <h3>User Details</h3>
        <p>Name: {name}</p>
        <p>gender: {gender}</p>
        <p>birthday: {birthday}</p>
        <p>location: {location}</p>      
    </div>

    <div>
        <svg width="350" height="350" id="chartSvg">
          <g>
          <path d="M0,0L175,0L87.5,87.5L0,0" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M175,0L350,0L262.5,87.5L175,0" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M0,0L87.5,87.5L0,175L0,0" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M175,0L87.5,87.5L175,175L262.5,87.5L175,0" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M350,0L262.5,87.5L350,175L350,0" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M0,175L87.5,87.5L175,175L87.5,262.5L0,175" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M175,175L262.5,87.5L350,175L262.5,262.5L175,175" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M0,175L87.5,262.5L0,350L0,175" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M87.5,262.5L175,175L262.5,262.5L175,350L87.5,262.5" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M262.5,262.5L350,175L350,350L262.5,262.5" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M0,350L87.5,262.5L175,350L0,350" stroke="#666" stroke-width="2" fill="none"></path>
          <path d="M175,350L262.5,262.5L350,350L175,350" stroke="#666" stroke-width="2" fill="none"></path>
          <text font-size="20px">Sun</text><text font-size="12.5px">11</text>
          <text font-size="12.5px" x="168.5078125" y="140" >6</text>
          <text font-size="12.5px" x="81.0078125" y="52.5" >7</text>
          <text font-size="12.5px" x="52.5" y="80.5" >8</text>
          <text font-size="12.5px" x="81.0078125" y="227.5" >9</text>
          <text font-size="12.5px" x="52.5" y="255.5" >10</text>
          <text font-size="12.5px" x="81.0078125" y="297.5" >11</text>
          <text font-size="12.5px" x="168.5078125" y="210" >12</text>
          <text font-size="12.5px" x="256.0078125" y="297.5" >1</text>
          <text font-size="12.5px" x="288.75" y="255.5" >2</text>
          <text font-size="12.5px" x="256.0078125" y="227.5" >3</text>
          <text font-size="12.5px" x="288.75" y="80.5" >4</text>
          <text font-size="12.5px" x="256.0078125" y="52.5" >5</text>
          <text font-size="11.666666666666666px"></text><text font-size="11.666666666666666px">Su </text>
          <text font-size="11.666666666666666px" x="167.61144256591797" y="87.5" >Su </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px"> </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px"> </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px"> </text>
          <text font-size="11.666666666666666px">Me Ve </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px" x="70.71456909179688" y="17.5" >Me Ve </text>
          <text font-size="11.666666666666666px">Ma </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px" x="254.14356994628906" y="17.5" >Ma </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px"> </text>
          <text font-size="11.666666666666666px"></text>
          <text font-size="11.666666666666666px"> </text>
          <text font-size="11.666666666666666px">Mo </text>
          <text font-size="11.666666666666666px" x="8.75" y="72.5" >Mo </text>
          <text font-size="11.666666666666666px" x="8.75" y="92.5" ></text>
          <text font-size="11.666666666666666px" x="8.75" y="112.5" ></text>
          <text font-size="11.666666666666666px" x="8.75" y="52.5" ></text>
          <text font-size="11.666666666666666px">Ke </text>
          <text font-size="11.666666666666666px" x="8.75" y="247.5" >Ke </text>
          <text font-size="11.666666666666666px" x="8.75" y="267.5" ></text>
          <text font-size="11.666666666666666px" x="8.75" y="287.5" ></text>
          <text font-size="11.666666666666666px" x="8.75" y="227.5" ></text>
          <text font-size="11.666666666666666px">Ra </text>
          <text font-size="11.666666666666666px" x="341.25" y="72.5" text-anchor="end" >Ra </text>
          <text font-size="11.666666666666666px" x="341.25" y="92.5" text-anchor="end" ></text>
          <text font-size="11.666666666666666px" x="341.25" y="112.5" text-anchor="end" ></text>
          <text font-size="11.666666666666666px" x="341.25" y="52.5" text-anchor="end" ></text>
          <text font-size="11.666666666666666px">Ju Sa </text>
          <text font-size="11.666666666666666px" x="341.25" y="247.5" text-anchor="end" >Ju Sa </text>
          <text font-size="11.666666666666666px" x="341.25" y="267.5" text-anchor="end" ></text>
          <text font-size="11.666666666666666px" x="341.25" y="287.5" text-anchor="end" ></text>
          <text font-size="11.666666666666666px" x="341.25" y="227.5" text-anchor="end" ></text>
          </g>
        </svg>
    </div>
    

      </>
    
    )
}



export default About