import { useEffect, useState } from 'react';

const WarningButton = ({ children, size }) => {
  const sizes = {
    small: 'text-xs',
    large: 'text-base',
  };

  if (size && !sizes.hasOwnProperty(size)) {
    return console.error(
      `Property ${size} does not exist in the list of sizes.`
    );
  }

  const [buttonSize, setButtonSize] = useState(sizes.large);

  useEffect(() => {
    setButtonSize(sizes[size]);
  }, [size]);

  return (
    <button
      className={`py-2 px-4 bg-yellow-500 hover:bg-yellow-400 rounded-sm duration-300 text-white ${buttonSize}`}
    >
      {children}
    </button>
  );
};

export default WarningButton;
