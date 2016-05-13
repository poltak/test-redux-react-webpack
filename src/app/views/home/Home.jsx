import {
  Jumbotron,
  Button,
  Modal,
}                     from 'react-bootstrap';
import React          from 'react';
import classNames     from 'classnames';
import { Link }       from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animated:   true,
      viewEnters: false,
      showModal:  false,
    };
  }

  componentWillMount() {
    this.props.actions.enterHome();

    this.state = {
      viewEnters  : true,
    };
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>
            Test
          </h1>
          <h2>
            with react-bootstrap
          </h2>
          <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>
            Show modal
          </Button>
          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/about'}>
              <i className="fa fa-info"></i>
              &nbsp;
              about test
            </Link>
          </p>
        </Jumbotron>

       <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Modal test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Good test
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews': this.state.animated,
      'view-enter':    this.state.viewEnters,
    });
    return homeViewClasses;
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

}

Home.propTypes = {
  actions: React.PropTypes.object,
};

export default Home;
