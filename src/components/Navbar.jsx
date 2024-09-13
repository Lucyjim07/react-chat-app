import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <span className='logo'>Lama Chat</span>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/28302543/pexels-photo-28302543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
            alt=''
          />
          <span>John</span>
          <button>logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
