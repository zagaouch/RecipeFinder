import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ links , close }) {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <a className='sidebar-link' href={link.path} key={link.name}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </a>
      ))}
    </div>
  );
}
