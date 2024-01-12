import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const SecondaryButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);
  const commonCss = useCommonCss();

  return (
    <button
      className={`${commonCss} active:bg-gray-400 bg-secondary hover:bg-secondary-h  text-gray-800 ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
