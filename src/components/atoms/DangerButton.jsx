import { useButtonStyles } from './commonFunctions/buttons';

const DangerButton = ({ children, size, block = false }) => {
  const { buttonSize, blockDesign } = useButtonStyles(size, block);

  return (
    <button
      className={`px-4 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:bg-red-700 bg-red-500 hover:bg-red-400 rounded-sm duration-300 text-white ${buttonSize} ${blockDesign}`}
    >
      {children}
    </button>
  );
};

export default DangerButton;
