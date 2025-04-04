import useUserContext from '../context/UserContext';

const Header = () => {
  const { user } = useUserContext();
  console.log(user);

  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://tse2.mm.bing.net/th?id=OIP.9hl54qFeHA_2o_PIo3JhswAAAA&pid=Api&P=0&h=180'
          alt='logo'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
