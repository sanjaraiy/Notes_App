import React from 'react'
import {MdAdd, MdClose } from 'react-icons/md';
import { useState } from 'react';

function TagInput({tags, setTags}) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


   const addNewTage = () => {
    if(inputValue.trim() !== ""){
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
    }
   };

   const handleKeyDown = (e) => {
    if(e.key === "Enter"){
        addNewTage();
    }
   };

   const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag)=> tag !== tagToRemove));
   }

  return (
     
     <div>

       

       {tags?.length > 0 && (
          <div className='flex items-center gap-2 flex-wrap mt-2'>
            {tags.map((tag,index) => (<span key={index} className='flex items-center gap-2 text-sm text-slate-900 bg-slate-300 px-3 py-1 rounded'>
                # {tag}
                <button onClick={()=>{handleRemoveTag(tag)}}>
                    <MdClose></MdClose>
                </button>
            </span>))}
          </div>
       )}



        <div  className='flex items-center gap-4 mt-3'>
            <input 
                type="text" 
                value={inputValue}
                className='text-sm  border  text-slate-950 px-3 py-2 rounded outline-none' 
                placeholder='Add tags' 
                onChange={handleInputChange} 
                onKeyDown = {handleKeyDown}    
            />
            <button 
                className='w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700'
                onClick={()=>{
                    addNewTage();
                }}
            >
                <MdAdd className='text-2xl text-blue-700 hover:text-white'></MdAdd>
            </button>
        </div>
    </div>
  )
}

export default TagInput