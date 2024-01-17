import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const PrimaryButton = ({ children, size, block = false, onClick, circle }) => {
  const { buttonSize, blockDesign, circleCss } = useButtonStyles(size, block, circle);

  return (
    <button
      onClick={onClick}
      className={`${useCommonCss} ${circleCss} bg-primary hover:bg-primary-h active:bg-sky-900 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
