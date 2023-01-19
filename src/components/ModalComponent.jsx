import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    < >
    <Button variant="light" onClick={handleShow}>
      Add Actor
    </Button>
    <Modal  size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title >Add Actor</Modal.Title>
      </Modal.Header>
      <Modal.Body ><form>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Actor name"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Picture"
            />
          </div>
          <div className=" mb-3">
          <textarea
              className="form-control "
              placeholder='Bio'
              rows="3"
            ></textarea>
          </div>
          </div>
          </form></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleClose}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalComponent