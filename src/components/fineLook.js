import React from 'react';
import Popular from "./Popular";
import New from "./New";

const fineLook = (newPost, popularPost) => Component => class extends React.Component {
    render() {
      return this.props.views > popularPost ? <Popular><Component {...this.props} /></Popular> :
      this.props.views < newPost ? <New><Component {...this.props} /></New> : <Component {...this.props} />
    }
}

export default fineLook;