import React from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import './TableBlog.css';
import { make_approve_blog, make_reject_blog } from 'src/api/index';
import { useMutation, useQueryClient } from 'react-query';

const Model = ({
  basicModal,
  toggleOpen,
  setBasicModal,
  handleApprove,
  handleReject,
  lblApprove,
  lblReject,
  lblInactive,
  lblActive,
  handleActive,
  handleInactive,
}) => {
  return (
    <>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <div className='d-flex flex-column mx-5 my-3'>
              <Button
                onClick={
                  handleActive
                    ? () => handleActive()
                    : handleApprove
                    ? () => handleApprove()
                    : console.log('error when click approve or active')
                }
                color='secondary'
                className='bg-primary text-white mx-3 my-1'
              >
                {lblApprove && lblApprove}
                {lblActive && lblActive}
              </Button>
              <Button
                onClick={() => handleReject()}
                color='secondary'
                className='bg-danger text-white mx-3 my-1'
              >
                {lblReject && lblReject}
                {lblInactive && lblInactive}
              </Button>
              <Button
                color='secondary'
                className='bg-white rounded-1 text-black mx-3 my-1'
                onClick={toggleOpen}
              >
                Close
              </Button>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Model;
