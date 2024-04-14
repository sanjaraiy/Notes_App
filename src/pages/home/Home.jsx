import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import NoteCard from '../../components/NoteCard'
import {MdAdd} from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal'

function Home() {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown:false,
    type:'add',
    data:null,
  })

  return (
    <>
      <NavBar></NavBar>

      <div className='container mx-auto'>
       <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title="Meeting on 7th Apirl" 
            date='3rd Apr 2024'
            content='Meeting on 7th Apirl Meetin on 7th April'
            tags='#Meeting'
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
          ></NoteCard>
       </div>
      </div>
      <button className='w-16 h-16  flex hover:shodow-lg items-center justify-center rounded-full bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={()=>{setOpenAddEditModal({isShown:true, type:"add", date:null})}}>
         <MdAdd className='text-[32px] text-white'></MdAdd>
      </button>
      <Modal 
       isOpen = {openAddEditModal.isShown}
       onRequestClose= {()=>{}}
       style={{
        overlay:{
          backgroundColor:"rgba(0,0,0,0.4)",
        },
       }}
       contentLabel = ""
       className = "w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll" 
      >
     <AddEditNotes
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({ isShown : false, type:"add", data:null });
        }}
      ></AddEditNotes>
      </Modal>

    </>
  )
}

export default Home