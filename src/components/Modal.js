import React, {useState }from 'react';
import MyModal from './ShowModal';

const Modal = () => {
    const [showModal , setShowModal] = useState (false);

    const closeModal = () => setShowModal(false);

    const handelCloseButton = (
        <button className="model-btn" onClick={closeModal }>Add Task</button>
        
    );

    const mainModal = (
        <MyModal closeModal={closeModal} handelCloseButton={handelCloseButton}>
                
             <p>Add TODO</p>
                <form>
            <label>Title</label><br/>
            <input type="text" /><br/>
            <label>Status</label><br/>
                    <select class="btn btn-secondary dropdown-toggle" >
                        <option value="All">All</option>
                        <option value="Incompleted">Incompleted</option>
                        <option value="Completed">Completed</option>
                    </select>
                 </form><br/>
           {/* <button className="model-btn" onClick={closeModal }>Submit</button> */}
        </MyModal>
    )

  return (
  <>
  <div>
  <p className="title">TODO LIST</p>
  </div>

  <button className="model-btn" onClick ={()=> setShowModal(true)} >Add Task</button>
  {showModal &&  mainModal }
   


  </>
  );
};

export default Modal