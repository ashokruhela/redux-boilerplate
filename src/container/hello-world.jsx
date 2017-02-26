import React, {Component} from 'react';
import {connect} from 'react-redux';

class HelloWorld extends Component {
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
            </div>
        )
        
    }
}

const mapStateToProps = ({message}) => {
    return {message}
}

export default connect(mapStateToProps, null)(HelloWorld)