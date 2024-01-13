import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const Icon = ({ icon }) => {
  const [faIcon, setFaIcon] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const formattedIconName = convertToCamelCase(icon);

    getDynamicFALibrary(icon).then((module) => {
      if (isMounted) {
        if (module[formattedIconName] !== undefined) {
          setFaIcon(module[formattedIconName]);
        } else {
          throw new Error(`${icon} does not exist.`);
        }
      }
    });

    // Cleanup function to handle component unmounting
    return () => {
      isMounted = false;
    };
  }, [icon]);

  if (!faIcon) {
    return null; // Or you can render a fallback icon
  }

  return <FontAwesomeIcon icon={faIcon} />;
};

const convertToCamelCase = (str) => {
  const icon = str.split(' ')[1];
  const newIcon = `fa-${icon}`;
  return newIcon.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
};

const getDynamicFALibrary = (icon) => {
  const allowedPrefix = ['fas', 'far', 'fab'];
  const iconPrefix = icon.split(' ')[0];

  if (!allowedPrefix.includes(iconPrefix)) {
    throw new Error(`${iconPrefix} prefix does not exist.`);
  }

  switch (iconPrefix) {
    case 'fas':
      return import(`../../../node_modules/@fortawesome/free-solid-svg-icons`);
    case 'far':
      return import(`../../../node_modules/@fortawesome/free-regular-svg-icons`);
    case 'fab':
      return import(`../../../node_modules/@fortawesome/free-brands-svg-icons`);
  }
};

export default Icon;
