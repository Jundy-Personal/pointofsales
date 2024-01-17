import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const DangerButton = ({ children, size, block = false, onClick, circle }) => {
  const { buttonSize, blockDesign, circleCss } = useButtonStyles(size, block, circle);

  return (
    <button
      onClick={onClick}
      className={`${useCommonCss} ${circleCss} active:bg-red-700 bg-red-500 hover:bg-red-400 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default DangerButton;
