import './Search.css';
import UserChat from './UserChat';

const Search = () => {
  return (
    <>
      <div className='search'>
        <div className='searchForm'>
          <input type='text' placeholder='Find a user' />
        </div>
        <UserChat
          src={
            'https://images.pexels.com/photos/28302543/pexels-photo-28302543.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
          }
          name={'Jane'}
        />
      </div>
    </>
  );
};

export default Search;
