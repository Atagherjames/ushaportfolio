
import './App.css'
import Introduction from './Introduction'
import Footer from './Footer'
 import Header from './Header'
import { About } from './About'
import TechStack from './TechStack'
import Portfolio from './Portfolio'
import Animation from './Animation'
import { Copyright } from './Copyright'
import { GiLightningTree } from 'react-icons/gi'
import { GiLightningTrio } from 'react-icons/gi'
import { GiLightningStorm } from 'react-icons/gi'
import { GiLightningShout} from 'react-icons/gi'
import { GiLightningSlashes } from 'react-icons/gi'
import { GiHeavyRain } from 'react-icons/gi'
import {GiFireTail} from 'react-icons/gi'

function App() {


return(
    <>
    <Header id='home'/>
    <Animation FirstIcon={GiLightningTree} SecondIcon={GiLightningTrio}/>
    <Introduction />
    <Animation FirstIcon={GiLightningStorm} SecondIcon={GiLightningShout} />

<About id='about'/>
<Animation FirstIcon={GiLightningSlashes } SecondIcon={GiLightningTrio} />
<Portfolio id='portfolio'/>
<Animation FirstIcon={GiHeavyRain} SecondIcon={GiFireTail} />

     <Footer id='contact'/> 
    
     <Animation FirstIcon={GiLightningTree} SecondIcon={GiLightningShout} />
     <Copyright />
    </>
)

  
  
}

export default App
