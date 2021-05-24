import React from 'react';

import { Menubar } from 'primereact/menubar';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import styled from 'styled-components'

const BackGround = styled.div`
      display: flex;
      width: 100%;
      background-color: white;
   `

const TopBar = styled.div`
      display: grid;
      grid-template-columns: 10fr 1fr;
      background-color: white;
   `

function Nav() {

   
   const items = [
      {label: 'WhoDeliv', icon: 'pi pi-fw pi-chart-bar', command:()=>{ window.location="/whoDeliv"; }},
      {label: 'WhatDeliv', icon: 'pi pi-fw pi-map', command:()=>{ window.location="/whatDeliv"; }}
   ];


  return (
      <div className = "card">
         <TopBar>
         <Menubar model={items} />
         </TopBar>   
      </div>          
  );
}

export default Nav;
