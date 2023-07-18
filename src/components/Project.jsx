import React from 'react';
import '../assets/css/Project.css';

export default function Project({ name, githubLink, imageUrl, technologies }) {
  const openLinkInNewTab = () => {
    window.open(githubLink, '_blank');
  };

  const openLinkOnThumbnailClick = (event) => {
    event.stopPropagation();
    openLinkInNewTab();
  };

  return (
    <div className='container' >
      <img
        src={imageUrl}
        alt={name}
        className='thumb'
        onClick={openLinkOnThumbnailClick}
        title='GitHub'
      />
      <h2 className='nonClickable project-name'>{name}
      <div className='projectInfo'>
        <div className='technologies'>
          {technologies.map((technology) => (
            <div key={technology.id} className='technology'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='technologyIcon nonClickable'
                width={55}
              />
            </div>
          ))}
        </div>
      </div>
      </h2>
    </div>
  );
}
