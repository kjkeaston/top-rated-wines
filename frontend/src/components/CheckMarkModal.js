import React, { Component } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const parents = ["Parent 1", "Parent 2", "Parent 3", "Parent 4", "Parent 5", "Parent 6", "Parent 7", "Parent 8", "Parent 9", "Parent 10"];

const children = ["Child 1", "Child 2", "Child 3"];

class CheckMarkModal extends Component {
  constructor() {
    super();
    this.state = {
      parentChildNodes:[],
      checked: [],
      expanded: [],
    }
  }

  componentDidMount() {
    let parentChildArr = parents.map((eachParent) => {
      return {
        value: eachParent,
        label: eachParent,
        children: children.map((oneChild) => {
          return {
            value: `${eachParent}-${oneChild}`,
            label: oneChild
          }
        })
      }
    });
    this.setState({
      parentChildNodes: parentChildArr
    });
  }

  render() {
    return (
      <div className="modal fade show" style={{display: "block"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="CheckMarkModalLabel">Test Some Checkmarks</h4>
              <button type="button" className="close" onClick={ this.props.close }>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CheckboxTree
                nodes={this.state.parentChildNodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={ this.props.close }>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckMarkModal;
