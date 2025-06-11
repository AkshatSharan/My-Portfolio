import SectionTitle from '../components/SectionTitle'
import JS from '../assets/JS.svg'
import C from '../assets/C.svg'
import CPP from '../assets/CPP.svg'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'
import Firebase from '../assets/Firebase.svg'
import Tailwind from '../assets/Tailwind.svg'
import Express from '../assets/Express.svg'
import Node from '../assets/Node.svg'
import React from '../assets/React.svg'
import SkillsCard from '../components/SkillsCard'

const Skills = () => {
  const languages = [
    {
      label: 'JavaScript',
      icon: <img src={JS} />,
    },
    {
      label: 'C',
      icon: <img src={C} />,
    },
    {
      label: 'C++',
      icon: <img src={CPP} />,
    },
    {
      label: 'HTML',
      icon: <img src={HTML} />,
    },
    {
      label: 'CSS',
      icon: <img src={CSS} />,
    },
  ]
  const frameworks = [
    {
      label: 'Express.js',
      icon: <img src={Express} />,
    },
    {
      label: 'React.js',
      icon: <img src={React} />,
    },
    {
      label: 'Node.js',
      icon: <img src={Node} />,
    },
    {
      label: 'Axios',
    },
    {
      label: 'Firebase',
      icon: <img src={Firebase} />,
    },
    {
      label: 'TailwindCss',
      icon: <img src={Tailwind} />,
    },
  ]
  const professional = [
    {
      label: 'RESTful API integration',
    },
    {
      label: 'Problem-solving & debugging',
    },
    {
      label: 'Responsive design implementation',
    },
    {
      label: 'UI/UX design integration',
    },
    {
      label: 'Version control',
    },
  ]

  return (
    <section className='site-section' id='skills'>
      <SectionTitle title={"Skills"} />
      <SkillsCard sectionData={languages} sectionTitle={"Languages"} />
      <SkillsCard sectionData={frameworks} sectionTitle={"Frameworks & Libraries"} />
      <SkillsCard sectionData={professional} sectionTitle={"Professional Skills"} />
    </section>
  )
}

export default Skills