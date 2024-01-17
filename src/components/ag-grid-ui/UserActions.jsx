import { DangerButton, Div, Icon, PrimaryButton, WarningButton } from '../atoms';

const UserActions = (props) => {
  console.log(props);
  return (
    <Div className="">
      <WarningButton size="small">
        <Icon icon="far eye" />
      </WarningButton>
      <PrimaryButton size="medium">
        <Icon icon="far pen-to-square" />
      </PrimaryButton>
      <DangerButton size="medium">
        <Icon icon="far trash-can" />
      </DangerButton>
    </Div>
  );
};

export default UserActions;
