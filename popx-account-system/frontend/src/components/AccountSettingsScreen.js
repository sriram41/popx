
// src/components/AccountSettingsScreen.jsx
import React, { useState, useRef } from 'react';

const AccountSettingsScreen = ({ userData, onLogout }) => {
  const [profileImage, setProfileImage] = useState('/assets/profile-img.png');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="screen-container">
      <h1 className="screen-title">Account Settings</h1>
      
      <div className="total-profile-block-11">
        <div className="profile-image-wrapper" onClick={triggerFileInput}>
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/default-profile.png';
              }}
            />
          ) : (
            <div className="profile-image-placeholder">
              {userData?.name?.charAt(0) || 'U'}
            </div>
          )}
          <div className="camera-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        
        <div className="total-profile-block-12">
          <div className="account-name">{userData?.name || 'Marry Doe'}</div>
          <div className="account-email">{userData?.email || 'Marry@Gmail.Com'}</div>
        </div>
      </div>
      
      <div className="account-description">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing<br />
          Eiltr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut<br />
          Labore Et Dolore Magna Aliquyam Erat.Sed Diam
        </p>
      </div>
      
      <button className="btn btn-secondary" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default AccountSettingsScreen;



// // src/components/AccountSettingsScreen.jsx

// src/components/AccountSettingsScreen.jsx
// import React, { useState, useRef } from 'react';

// const AccountSettingsScreen = ({ userData, onLogout }) => {
//   const [profileImage, setProfileImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div className="screen-container">
//       <h1 className="screen-title">Account Settings</h1>
      
//       <div className="profile-image-container total-profile-block-11">
//         <div className="profile-image-wrapper" onClick={triggerFileInput}>
//           {profileImage ? (
//             <img src={profileImage} alt="Profile" className="profile-image" />
//           ) : (
//             <div className="profile-image-placeholder">
//               {userData?.name?.charAt(0) || 'U'}
//             </div>
//           )}
//           <div className="camera-icon">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
//             <img src='' />
//               <path d="M0 0h24v24H0z" fill="none"/>
//               <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
//               <circle cx="12" cy="12" r="3"/>
//             </svg>
//           </div>
//         </div>
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           accept="image/*"
//           style={{ display: 'none' }}
//         />
//         <div className='total-profile-block-12'>
//              <div className="account-name">{userData?.name || 'Marry Doe'}</div>
//         <div className="account-email">{userData?.email || 'Marry@Gmail.Com'}</div>
//         </div>
//       </div>
      
//       <div className="account-info">
//         <div className="account-name">{userData?.name || 'Marry Doe'}</div>
//         <div className="account-email">{userData?.email || 'Marry@Gmail.Com'}</div>
        
//         <p className="account-description">
//           Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing<br />
//           Eiltr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut<br />
//           Labore Et Dolore Magna Aliquyam Erat.Sed Diam
//         </p>
//       </div>
      
//       <button className="btn btn-secondary" onClick={onLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default AccountSettingsScreen;




// const AccountSettingsScreen = ({ userData, onLogout }) => {
//   return (
//     <div className="screen-container">
//       <h1 className="screen-title">Account Settings</h1>
      
//       <div className="account-info">
//         <div className="account-name">{userData?.name || 'User'}</div>
//         <div className="account-email">{userData?.email || 'user@example.com'}</div>
        
//         <p className="account-description">
//           Lorem Ipsum Dolor sit amet. Consectetur Sedipiscing<br />
//           Ettor. Sed Diam Monarur, Empora Tempore invidunt Ut<br />
//           Labore Ei Dolore Magna Aliquyam Erat. Sed Diam
//         </p>
//       </div>
      
//       <button className="btn btn-secondary" onClick={onLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default AccountSettingsScreen;