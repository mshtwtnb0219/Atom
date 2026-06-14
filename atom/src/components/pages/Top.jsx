import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryBurron";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
import axios from "axios";
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

  // axiosの実行確認
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SContainer>
      <h1>TOPページです</h1>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUsers}>axios検証 users</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUser1}>
        axios検証 id=1のuser
      </SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
