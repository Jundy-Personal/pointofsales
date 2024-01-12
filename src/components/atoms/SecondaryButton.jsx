import { useButtonStyles } from './commonFunctions/buttons';

const SecondaryButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);

  return (
    <button
      className={`px-4 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:bg-gray-400 bg-secondary hover:bg-secondary-h rounded-sm duration-300 text-gray-800 ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
