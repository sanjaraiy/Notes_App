import React, { useState } from 'react'
import TagInput from '../../components/TagInput';
import { MdClose } from 'react-icons/md';

function AddEditNotes({noteData, type, onClose}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  
  const [error, setError] = useState(null);

  //Add Note
  const addNewNote = async () => {};

  //Edit Note
  const editNote = async () => {};




  const handleAddNote = () => {
    if(!title){
      setError("Please enter the title");
      return;
    }

    if(!content){
      setError("Please enter the content")
      return;
    }

    setError("");

    if(type === 'edit'){
      editNote();
    }else{
      addNewNote();
    }
  }



  return (
      <div className='relative'>
         <button  className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 -right-5 hover:bg-slate-50' onClick={onClose}>
           <MdClose className='text-xl text-slate-400'></MdClose>
         </button>
         <div className='flex flex-col gap-2'>
            <label htmlFor="" className='input-label text-slate-600 text-xl'>TITLE</label>
            <input 
            type="text" 
            className='text-2xl text-slate-950 outline-none rounded px-2'
            placeholder='Go to Gym at 5'
            value={title}
            onChange={({target}) => setTitle(target.value)}
            />
        </div>
        
        <div className='flex flex-col gap-2 mt-4'>
          <label htmlFor="" className='input-label text-slate-600 text-xl'>CONTENT</label>
          <textarea 
          name="" 
          id="" 
          cols={30} 
          rows="10" 
          type='text' 
          className='text-sm text-slate-950 outline-none p-2 rounded' 
          placeholder='Content' 
          value={content}
          onChange={({target}) => setContent(target.value)}
          ></textarea>
        </div>
        <div className='mt-3'>
          <label className='input-label text-slate-600 text-lg'>TAGS</label>
          <TagInput tags={tags} setTags={setTags}></TagInput>
        </div>

       {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
          ADD
        </button>
    </div>
  )
}

export default AddEditNotes