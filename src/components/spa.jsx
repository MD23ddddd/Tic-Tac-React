import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route , Switch } from 'react-router-dom'
class Main extends Component{
    render(){
        return(
        <main>
               <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
             
        </main>
        );
    }
}
class Home extends Component{
    render(){
        return(
            <div>
            
              Home!!!
            </div>
            
        );
    }
}
class Profile extends Component{
    render(){
        return(<div>
          Your Profile!!!
        </div>);
    }
}
const About = ({ match }) => {
  
       return(
        
           <div>
          
           <Link to={`${match.url}/html`}>click here</Link>
           <main>
           <Route path={`${match.path}/html`} render={()=> { return <h1>Your Profile Dude!!!</h1>}}/>
           </main>
        
           About!!!
           </div>
          
        
      );
   }


class Navbar extends Component{
    render(){
        return(
         <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
            </header>
            <Main />
                 
               
            </div>
           
       );
    }
}


export default Navbar;