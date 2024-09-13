import UserChat from './UserChat';

const Chats = () => {
  return (
    <>
      <div className='chats'>
        <UserChat
          src={
            'https://images.pexels.com/photos/28302543/pexels-photo-28302543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
          }
          name={'Jane'}
          description={'Hello'}
        />
        <UserChat
          src={
            'https://images.pexels.com/photos/28302543/pexels-photo-28302543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
          }
          name={'Jane'}
          description={'Hello'}
        />
        <UserChat
          src={
            'https://images.pexels.com/photos/28302543/pexels-photo-28302543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
          }
          name={'Jane'}
          description={'Hello'}
        />
        <UserChat
          src={
            'https://images.pexels.com/photos/28302543/pexels-photo-28302543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
          }
          name={'Jane'}
          description={'Hello'}
        />
      </div>
    </>
  );
};

export default Chats;
