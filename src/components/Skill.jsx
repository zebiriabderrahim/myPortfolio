import React from 'react'
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Skill({id,inView,name}) {
  return (
    <div id={id} className={inView?"icon-container show":"icon-container hidden"}>
          <img src={require(`../assets/img/${name}`)} alt={name}/>
          <p> {capitalizeFirstLetter(name.slice(0,name.length-4))} </p>
    </div>
  )
}

export default Skill