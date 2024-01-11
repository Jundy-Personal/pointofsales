import { useEffect, useState } from 'react';

const PrimaryButton = ({ children, size, block = false }) => {
  const sizes = {
    small: 'py-2 text-xs',
    large: 'py-3 text-base',
  };

  if (size && !sizes.hasOwnProperty(size)) {
    return console.error(
      `Property ${size} does not exist in the list of sizes.`
    );
  }

  const [buttonSize, setButtonSize] = useState('');
  const [blockDesign, setBlockDesign] = useState('');

  useEffect(() => {
    if (!size) {
      setButtonSize(sizes.large);
    } else {
      setButtonSize(sizes[size]);
    }
  }, [size]);

  useEffect(() => {
    if (block) {
      setBlockDesign('block w-full');
    }
  }, [block]);

  return (
    <button
      className={`px-4 bg-primary hover:bg-primary-h hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:bg-sky-900 rounded-sm duration-300 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
