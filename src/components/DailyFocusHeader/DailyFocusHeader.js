import React from 'react'
import './DailyFocusHeader.css'



export default class DailyFocusHeader extends React.Component {
  render() {
    return (
      <div>
        <header className="daily_view_header">
           <i className="fas fa-arrow-circle-right"></i>
        <h2>Daily Focus</h2>
          <i className="fas fa-arrow-circle-left"></i>
        </header>
         
       
      </div>
    )
  }
}



