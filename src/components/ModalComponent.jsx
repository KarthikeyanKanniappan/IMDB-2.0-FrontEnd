import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createActor } from '../redux/actorSlice';

const ModalComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let formik = useFormik({
    initialValues: {
      name:"",
      gender:"",
     biography:"",
      dateOfBirth:"",
      movie:[],
      picture:"",
    },
    onSubmit:  (values) => { 
      console.log(values)
      if(values.name && values.gender && values.biography && values.picture){
        dispatch(createActor({values,navigate}))
      }
    //   let updatedValue ={ ...values , actors:member,producer:member1[0],allActors:"",
    //   allProducer:""}
    //  
    },
  });

  return (
    < >
    <Button variant="light" onClick={handleShow}>
      Add Actor
    </Button>
    <Modal  size="lg" show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title >Add Actor</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Actor name"
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="date"
              className="form-control"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              name="dateOfBirth"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Picture"
              value={formik.values.picture}
              onChange={formik.handleChange}
              name="picture"
            />
          </div>
          <div className=" mb-3">
          <textarea
              className="form-control "
              placeholder='Bio'
              rows="3"
              value={formik.values.biography}
              onChange={formik.handleChange}
              name="biography"
            ></textarea>
          </div>
          </div>
        <Button  type="submit" variant="dark" >
          Add
        </Button>
          </form></Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalComponent