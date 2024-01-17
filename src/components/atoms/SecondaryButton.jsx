import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const SecondaryButton = ({ children, size, block = false, onClick, circle }) => {
  const { buttonSize, blockDesign, circleCss } = useButtonStyles(size, block, circle);

  return (
    <button
      onClick={onClick}
      className={`${useCommonCss} ${circleCss} active:bg-gray-400 bg-secondary hover:bg-secondary-h text-gray-800 ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
