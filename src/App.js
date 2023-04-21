import Profile from "./components/Profile";
import profile from "./user.json";

export default function App() {
  return <div>
    <Profile
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatar={profile.avatar}
      stats={profile.stats}
    />
  </div>;
}
