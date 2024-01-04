import {Component} from 'react'
import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Post Graduation',
    qualificationSource: 'OU- M.SC(Applied Statistics)',
  },
  {
    id: 1,
    qualification: 'Graduation',
    qualificationSource: '-SCWDC College',
  },
  {
    id: 2,
    qualification: 'Intermediate',
    qualificationSource: '-Triveni Jr College',
  },
  {
    id: 3,
    qualification: 'High School',
    qualificationSource: '-St. Mary,s School',
  },
]

class AboutSection extends Component {
  renderEducation = () =>
    educationData.map(data => {
      const {id, qualification, qualificationSource} = data
      return (
        <li key={id}>
          <p>{qualification}</p>
          <p>{qualificationSource}</p>
        </li>
      )
    })

  renderSkills = () =>
    skillsData.map(skill => {
      const {id, name} = skill
      return (
        <li className="list-item" key={id}>
          {name}
        </li>
      )
    })

  render() {
    return (
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="about-description">
          I started my journey in the world of computers from a young age
        </p>
        <div className="about-details">
          <ul className="education">
            <h1>Education</h1>
            {this.renderEducation()}
          </ul>

          <ul className="skills">
            <h1>Skills</h1>
            {this.renderSkills()}
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutSection