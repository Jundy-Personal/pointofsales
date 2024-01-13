import { useEffect, useState } from 'react';

export const useButtonStyles = (size, block) => {
  const sizes = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-5 py-2 text-sm',
  };

  if (size && !sizes.hasOwnProperty(size)) {
    console.error(`Property ${size} does not exist in the list of sizes.`);
  }

  const [buttonSize, setButtonSize] = useState('px-5 py-2.5 text-sm');
  const [blockDesign, setBlockDesign] = useState('');

  useEffect(() => {
    if (size) {
      setButtonSize(sizes[size]);
    }
  }, [size]);

  useEffect(() => {
    if (block) {
      setBlockDesign('block w-full');
    }
  }, [block]);

  return { buttonSize, blockDesign };
};

export const useCommonCss = () => {
  return 'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 rounded-sm duration-300';
};
