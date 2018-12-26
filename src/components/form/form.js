import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormContext } from './form-context';

export default class Form extends Component {
  render() {
    return (
      <FormContext.Consumer>
        {( { open, toggleOpen } ) => (
          <Dialog
            open={open} 
            onClose={toggleOpen}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send
                updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleOpen} color="primary">
                Cancel
              </Button>
              <Button onClick={toggleOpen} color="primary">
                Order
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </FormContext.Consumer>
    );
  }
}