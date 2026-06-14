import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryBurron";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
export const Top = () => {
  const navgate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navgate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navgate("/users");
  };
  return (
    <SContainer>
      <h1>TOPページです</h1>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
