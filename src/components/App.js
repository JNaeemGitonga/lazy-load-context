import React, { Component, Suspense } from 'react';
import styles from './App.module.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FormContext } from './form/form-context';

const Form = React.lazy(() => import('./form/form'));

class App extends Component {
  state = {
    open: false,
  }
  
  handleClick = () => {
    this.setState({ open: true });
  }
  
  toggleOpen = () => {
    this.state.open ? this.setState({ open: false }) : this.setState({ open: true });
  };

  render() {
    return (
      <Grid
        container
        className={styles.App}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <FormContext.Provider
          value={{
            open: this.state.open,
            toggleOpen: this.toggleOpen,
          }}
        >
        < Button 
          onClick={ () => this.handleClick() }
          variant="contained"
          color="primary"
        >Click Me</Button>
        {
          this.state.open && (
            <Suspense fallback={<CircularProgress />}>
              <Form/>
            </Suspense>
          )
        }
        </FormContext.Provider>
      </Grid>
    );
  }
}

export default App;