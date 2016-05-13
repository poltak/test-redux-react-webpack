import React                  from 'react';
import NavigationBar          from '../../components/navigation/NavigationBar.jsx';
import navigationModel        from '../../models/navigation.model.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel : navigationModel,
    };
  }

  render() {
    return (
      <div>
        <NavigationBar
          brand={this.state.navModel.brand}
          navModel={this.state.navModel}
        />
      <h1>
      </h1>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  children:   React.PropTypes.node,
  history:    React.PropTypes.object,
  location:   React.PropTypes.object,
  actions:    React.PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    currentView:  state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions,
      },
    dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
