import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const DangerButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);
  const commonCss = useCommonCss();

  return (
    <button
      className={`${commonCss} active:bg-red-700 bg-red-500 hover:bg-red-400 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default DangerButton;
