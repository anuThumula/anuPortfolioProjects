import {Component} from 'react'
import './index.css'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Anudeepthi</h1>
        <p>Full Stack Developer</p>
        <p className="skills">
          I am good in HTML,
          CSS, JavaScript, Bootstrap, ReactJS, SQL, Python.
        </p>
        <button className="resume-button" type="button">
          View Resume
        </button>
      </div>
    )
  }
}

export default HomeSection