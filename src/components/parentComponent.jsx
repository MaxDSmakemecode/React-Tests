import React, {Component} from 'react';
import ChildComponent from './childComponent';
import PropTypes from 'prop-types';


// ALL COMMENTED STUFF BELONGS TOGETHER, SO COMMENT THE SIMILAR CODE WHEN TESTING THESE
// const Person = {
//     name: "Bob",
//     age: 30
// }

class ParentComponent extends Component {
    render(){
        return (
                <div>
                    <h1>I'm a parent component</h1>
                    <h3><ChildComponent text="I'm the 1st child."/></h3>
                    <h3><ChildComponent text="I'm the 2nd child."/></h3>
                    <h3><ChildComponent text="I'm the 3rd child."/></h3>
                    <br/><br/>
                    <h3><PersonComponent age={30} /></h3>
                </div>
        );
    }
}

export default ParentComponent;

const PersonComponent = (props) => {
    return (
        <div><p>{props.name} - {props.age}</p></div>
        // <div><p>{props.person.name} - {props.person.age}</p></div>
    )
} 

// PersonComponent.propTypes = {
//     person: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         age: PropTypes.number
//     })
// };

PersonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

PersonComponent.defaultProps = {
    name: "unknown"
};