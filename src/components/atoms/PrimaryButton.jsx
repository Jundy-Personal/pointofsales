import { useButtonStyles, useCommonCss } from './commonFunctions/buttons';

const PrimaryButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);
  const commonCss = useCommonCss();

  return (
    <button
      className={`${commonCss} bg-primary hover:bg-primary-h active:bg-sky-900 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
