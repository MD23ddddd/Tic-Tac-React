import React, { Component } from 'react';
import {Link, Route, BrowserRouter, Switch } from 'react-router-dom';
const topics=[ {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React.",
        url: 'https://tylermcginnis.com/react-aha-moments/'
      }
    ]
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
    description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description: 'A guide to understanding the difference between Imperative and Declarative programming.',
        url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
      },
      {
        name: 'Building User Interfaces with Pure Functions and Function Composition',
        id: 'fn-composition',
        description: 'A guide to building UI with pure functions and function composition in React',
        url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
      }
    ]
  }
]
function Resource ({match}) {
   const topic=topics.find(t => t.id===match.params.topicId)
   const ans=topic.resources.find(t => t.id===match.params.subId);
   return (
     <div>
      <h3>{ans.name}</h3>
      <p>{ans.description}</p>
      <a href="/home">{ans.url}</a>
   </div>
  );
}
function Topic({match}){

  const topic = topics.find(({ id }) => id === match.params.topicId)
  return(
    <BrowserRouter>
        <div>
          <h2>{topic.name}</h2>
          <p>{topic.description}</p>

          <ul>
            {topic.resources.map((sub) => (
              <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>

          <hr />

          <Route exact path={`${match.path}/:subId`} component={Resource} />
      </div>
    </BrowserRouter>
    );
}

function Topics({match}){
  console.log(match.path)
    return (
      <BrowserRouter>
        <div>
        <ul>
           {topics.map(({name,id}) => (
               <li key={id}>
           <Link to={`${match.url}/${id}`}>{name}</Link>
           
           </li>
           ))}
        </ul>

           <Route exact path={`${match.path}/:topicId`} component={Topic}/>
        </div>
        </BrowserRouter>
    );
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
class App extends Component{
    
    render() {
        return (
          <BrowserRouter>
            <div style={{width: 1000, margin: '0 auto'}}>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
              </ul>
    
              <hr />
    
              <Route exact path='/' component={Home} />
              <Route path='/topics' component={Topics} />
            </div>
          </BrowserRouter>
        )
      }
    
}

export default App;