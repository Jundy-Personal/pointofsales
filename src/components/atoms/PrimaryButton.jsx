import { useButtonStyles } from './commonFunctions/buttons';

const PrimaryButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);

  return (
    <button
      className={`px-4 bg-primary hover:bg-primary-h hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:bg-sky-900 rounded-sm duration-300 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
