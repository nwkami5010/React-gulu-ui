import React from 'react';
import './importIcons';
import './icon.scss';
interface  IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className="hu-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};
export default Icon;
