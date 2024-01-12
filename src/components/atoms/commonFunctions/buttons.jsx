import { useEffect, useState } from 'react';

export const useButtonStyles = (size, block) => {
  const sizes = {
    small: 'py-2 text-xs',
    large: 'py-3 text-sm',
  };

  if (size && !sizes.hasOwnProperty(size)) {
    console.error(`Property ${size} does not exist in the list of sizes.`);
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

  return { buttonSize, blockDesign };
};

export const useCommonCss = () => {
  return 'px-4 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 rounded-sm duration-300';
};
