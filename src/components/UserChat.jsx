import './UserChat.css';

const UserChat = ({ src, name, description }) => {
  return (
    <>
      <div className='userChat'>
        <img src={src} alt='' />
        <div className='userChatInfo'>
          <span>{name}</span>
          {description && <p>{description}</p>}
        </div>
      </div>
    </>
  );
};

export default UserChat;
