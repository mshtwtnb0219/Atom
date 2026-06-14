import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryBurron";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin});

  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `masa-${val}`,
      image: "../../../../public/dmytro-koplyk-O46tiYBL9yM-unsplash.jpg",
      email: "test.gmial.com",
      phone: "0120-111-2222",
      company: {
        name: "シマエナガ株式会社",
      },
      website: "google.com",
    };
  });

  return (
    <SContainer>
      <h1>ユーザー一覧</h1>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
