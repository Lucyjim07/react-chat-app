import './Message.css';

const Message = () => {
  return (
    <>
      <div className='message owner'>
        <div className='messageInfo'>
          <img
            src='https://images.pexels.com/photos/27815893/pexels-photo-27815893/free-photo-of-moda-gente-mujer-sentado.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
          />
          <span>just now</span>
        </div>
        <div className='messageContent'>
          <p>Hello</p>
          <img
            src='https://images.pexels.com/photos/27815893/pexels-photo-27815893/free-photo-of-moda-gente-mujer-sentado.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default Message;
