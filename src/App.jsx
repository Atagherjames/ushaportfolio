
import './App.css'
import Introduction from './Introduction'
import Footer from './Footer'
 import Header from './Header'
import { About } from './About'
import TechStack from './TechStack'
import Portfolio from './Portfolio'
import Animation from './Animation'
import { Copyright} from './Copyright'
import { GiLightningTree,GiLightningTrio,GiLightningStorm,GiLightningShout,GiLightningSlashes,GiHeavyRain,GiFireTail} from 'react-icons/gi'


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
