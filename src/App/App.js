import React from 'react';
import LandingPage from '../Views/LandingPage/LandingPage';
import Onboarding from '../Views/Onboarding/Onboarding'
import Signup from '../Views/Signup/Signup';
import {BrowserRouter , Route} from 'react-router-dom';
import Onboarding2 from '../Views/Onboarding2/Onboarding2';
import DailyFocus from '../Views/DailyFocus/DailyFocus'
import weekFactory from '../Views/Helper/Helper'



class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state={
      weeks:[weekFactory(), weekFactory()],
      currentWeek: 1,
     }
  }

  setWeek = (week) => {
     console.log(week)
    let copy = [...this.state.weeks] // copied the weeks array from state
    let index = this.state.currentWeek - 1 // identify which index to replace // if week2 -1 = 1 = the second element
    copy[index] = week // replacing week object 
    let currentWeek = this.state.currentWeek + 1 // for week 2
    this.setState({ // replace old week to replace new copy
      weeks: copy,
      currentWeek, 
    })
  }
  
  render() {
    return (
      <BrowserRouter>
     <div className="App">
       <Route exact path="/" component={LandingPage}/>
       <Route exact path="/get-started" component={Signup}/>
       <Route path="/onboarding-1" component={Onboarding}/>
       <Route path="/onboarding-2">
         <Onboarding2 setWeek={this.setWeek} currentWeek={this.state.currentWeek}/>
         </Route>
       <Route path="/daily-focus">
         <DailyFocus weeks={this.state.weeks}/>
       </Route>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;