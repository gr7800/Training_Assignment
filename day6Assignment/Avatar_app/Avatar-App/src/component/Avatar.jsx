/* eslint-disable react/prop-types */
import "./Avatar.css"

const Avatar = ({Name,setAvatarList}) => {

  return (
    <div className="avatar">
        <span onClick={setAvatarList}>x</span>
        <p>{Name[0].toUpperCase()}</p>
    </div>
  )
}

export default Avatar