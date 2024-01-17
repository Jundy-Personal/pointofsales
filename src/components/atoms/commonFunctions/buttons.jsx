import { useEffect, useState } from 'react';

export const useButtonStyles = (size, block, circle) => {
  const sizes = {
    small: `${!circle ? 'px-4 py-2' : 'p-2.65 leading-none'} text-xs`,
    medium: `${!circle ? 'px-5 py-2' : 'p-2.75 leading-none'} text-sm`,
  };

  if (size && !sizes.hasOwnProperty(size)) {
    console.error(`Property ${size} does not exist in the list of sizes.`);
  }

  if (block && circle) {
    console.error('Block cannot be associated with circle prop');
  }

  const getButtonSize = () =>
    size ? sizes[size] : `${!circle ? 'px-5 py-2.5' : 'p-3.25 leading-none'} text-sm`;
  const getBlockDesign = () => (block && !circle ? 'block w-full' : '');
  const getCircleCss = () => (circle ? 'rounded-full' : 'rounded');

  const [buttonSize, setButtonSize] = useState(getButtonSize());
  const [blockDesign, setBlockDesign] = useState(getBlockDesign());
  const [circleCss, setCircleCss] = useState(getCircleCss());

  useEffect(() => {
    setButtonSize(getButtonSize());
  }, [size]);

  useEffect(() => {
    setBlockDesign(getBlockDesign());
  }, [block, circle]);

  useEffect(() => {
    setCircleCss(getCircleCss());
  }, [circle]);

  return { buttonSize, blockDesign, circleCss };
};

export const useCommonCss =
  'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 duration-300';
