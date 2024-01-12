import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const WarningButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);
  const commonCss = useCommonCss();

  return (
    <button
      className={`${commonCss} active:bg-yellow-600 bg-yellow-500 hover:bg-yellow-400  text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default WarningButton;
