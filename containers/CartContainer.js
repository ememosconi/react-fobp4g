import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Cart from '../Cart'



const mapStateToProps = state =>({
  items: state
})


export default compose(
withRouter,
connect(mapStateToProps,null)
)(Cart);