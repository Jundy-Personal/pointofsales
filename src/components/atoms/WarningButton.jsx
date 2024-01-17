import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const WarningButton = ({ children, size, block = false, onClick, circle }) => {
  const { buttonSize, blockDesign, circleCss } = useButtonStyles(size, block, circle);

  return (
    <button
      onClick={onClick}
      className={`${useCommonCss} ${circleCss} active:bg-yellow-600 bg-yellow-500 hover:bg-yellow-400 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default WarningButton;
