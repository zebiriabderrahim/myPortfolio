import { useInView } from 'react-intersection-observer';
import languages from '../assets/js/languages';
import Skill from '../components/Skill';
import technologies from "../assets/js/technologies"
import "../assets/css/Skills.css"

function Skills() {
  const options = {
    unobserveOnEnter: true,
    rootMargin: '0px',
    threshold: 1
  }
  const { ref, inView } = useInView(options);
  const { ref:refTech, inView:niViewTech } = useInView(options);
  return (
    <section id="skills" >
      <h1 className="title" > Skills </h1>
      <h2 className={inView?"languages show":"languages hidden"} ref={ref}> Programming Languages </h2>
      <div className="languages-icons">
        {languages.map((item)=>
        <Skill key={item.id}id={item.id} inView={inView} name={item.src}/>
        )}
      </div>
      <h2 ref={refTech}>Technologies</h2>
      <div className="languages-icons">
        {technologies.map((item)=>
          <Skill key={item.id}id={item.id} inView={niViewTech} name={item.src}/>
          )}
      </div>
    </section>
  )
}

export default Skills