import React from 'react'
import './DailyFocus.css'
import Nav from '../../components/Nav/Nav'
import DailyFocusHeader from '../../components/DailyFocusHeader/DailyFocusHeader'
import DailyFocusSession from '../../components/DailyFocusSession/DailyFocusSession'
import DailyBreaksSession from '../../components/DailyFocusBreaks/DailyFocusBreaks'
import DailyFocusStreak from '../../components/DailyFocusStreak/DailyFocusStreak'
import Todo from '../../components/Todo/Todo'



export default class DailyFocus extends React.Component {
  render() {
    return (
      <div>
      <main>
        <Nav/>
        <DailyFocusHeader/>
      <section className="streak-section">
        <DailyFocusSession/>
        <DailyBreaksSession/>
        <DailyFocusStreak/>
      </section>
      <div className="container">
        <div className="Morning">
            <h3>Morning</h3>
            <Todo/>
        </div>
        <div ClassName="Afternoon">
            <h3>Upcoming</h3>
        </div>
        <div ClassName="task">            
            <i ClassName="fa fa-check"></i>
        </div>

        <div ClassName="evening">
            <h3>Later</h3>
        </div>

        <div ClassName="task">
            task
            
            <i ClassName="fa fa-check"></i>
        </div>


    </div>
    </main>
      </div>
    )
  }
}
