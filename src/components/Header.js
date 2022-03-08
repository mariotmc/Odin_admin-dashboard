import userLogo from "../media/user-logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <svg viewBox="0 0 24 24">
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
        <input type="search" name="search-bar" id="search-bar" />
        <svg viewBox="0 0 24 24">
          <path d="M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z" />
        </svg>
        <img src={userLogo} alt="User Logo" />
        <span className="small-username">Morgan Oakley</span>
      </div>

      <div className="header-bottom">
        <img src={userLogo} alt="User Logo" />
        <div className="user-greeting">
          <p>Hi there,</p>
          <p>Morgan Oakley (@morgan)</p>
        </div>
        <button className="header-button">New</button>
        <button className="header-button">Upload</button>
        <button className="header-button">Share</button>
      </div>
    </header>
  );
};

export default Header;
