import Profile from './components/Profile/Profile.jsx';
import userData from './assets/userData.json';
import friends from './assets/friends.json';
import FriendList from './components/FriendList/FriendList.jsx';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
