import "./closefriends.css"

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} alt="" className="sidebarFriendimg" />
    <span className="sidebarFriendName">{user.username}</span>
  </li>
  )
}
