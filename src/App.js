import logo from './logo.svg';
import './App.css';
import {Header}  from './components/header';
import {Content} from './components/Content'
import {Footer} from './components/footer'

import './components/Content.css'
import './components/header_footer.css'

import React, {useState} from 'react';




function App() {

  const [data,setData] = useState({
    my_name: 'Bruno Monteiro',
    Project_name: 'League of Heroes',
  })

  const [heroisinfo,setheroisinfo] = useState([{
        hero_name: 'Batman',
        hero_img:'https://sm.ign.com/ign_pt/news/k/keanu-reev/keanu-reeves-revealed-as-batman-in-new-dc-league-of-super-pe_9pdn.jpg',
    },
    {
        hero_name: 'Batman',
        hero_img:'https://sm.ign.com/ign_pt/news/k/keanu-reev/keanu-reeves-revealed-as-batman-in-new-dc-league-of-super-pe_9pdn.jpg',
    },
    {
        hero_name: 'Batman',
        hero_img:'https://sm.ign.com/ign_pt/news/k/keanu-reev/keanu-reeves-revealed-as-batman-in-new-dc-league-of-super-pe_9pdn.jpg',
    }
    ]    
    )

  

  
  return (
    <div className="App">
      <Header info={data}></Header>
      <Content info={heroisinfo}></Content>
      <Footer info={data}></Footer>
    </div>
  );
  
}

export default App;
