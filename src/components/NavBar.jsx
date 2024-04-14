import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileInfo from './ProfileInfo';
import SearchBar from './SearchBar';

function NavBar() {
const [searchQuery, setSearchQuery] = useState("");

const navigate = useNavigate;

  const onLogout = () => {
     navigate('/login');
  }
  const handleSearch = () => {

  }
  const onClearSearch = () => {
    setSearchQuery("");
  }
  return (
    
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow-lg'>
          <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
           <SearchBar
             value={searchQuery}
             onChange={({target})=> setSearchQuery(target.value)}
             handleSearch={handleSearch}
             onClearSearch={onClearSearch}
           ></SearchBar>
          <ProfileInfo onLogout={()=>onLogout()}></ProfileInfo>
        </div>
    
  )
}

export default NavBar