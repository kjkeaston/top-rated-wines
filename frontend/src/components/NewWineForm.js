import React, { Component } from "react";
import axios from "axios";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      newFormDescription:"",
      newFormPoints:"",
      newFormPrice:"",
      newFormState:"",
      newFormRegion:"",
      newFormVariety:""
    }

    this.userAddedDescription = this.userAddedDescription.bind(this);
    this.userAddedPoints = this.userAddedPoints.bind(this);
    this.userAddedPrice = this.userAddedPrice.bind(this);
    this.userAddedState = this.userAddedState.bind(this);
    this.userAddedRegion = this.userAddedRegion.bind(this);
    this.userAddedVariety = this.userAddedVariety.bind(this);
    this.submitWineForm = this.submitWineForm.bind(this);
  }

  userAddedDescription(e) {
    console.log(e.target.value)
    this.setState({ newFormDescription: e.target.value })
  }

  userAddedPoints(e) {
    console.log(e.target.value)
    this.setState({ newFormPoints: e.target.value })
  }

  userAddedPrice(e) {
    console.log(e.target.value)
    this.setState({ newFormPrice: e.target.value })
  }

  userAddedState(e) {
    console.log(e.target.value)
    this.setState({ newFormState: e.target.value })
  }

  userAddedRegion(e) {
    console.log(e.target.value)
    this.setState({ newFormRegion: e.target.value })
  }

  userAddedVariety(e) {
    console.log(e.target.value)
    this.setState({ newFormVariety: e.target.value })
  }

  submitWineForm(e) {
    axios.post("http://localhost:8080/api/wines", {
      description: this.state.newFormDescription,
      points: this.state.newFormPoints,
      price: this.state.newFormPrice,
      state: this.state.newFormState,
      region: this.state.newFormRegion,
      variety: this.state.newFormVariety
    }).then( (res) => {
      if (res.status === 200) {
        alert("Wine Added!")
      } else {
        alert("Oops! Did you select all the required fields?");
      }
    });
  }

  render() {
    const stateOptions = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

    return (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="AboutModalLabel">Add New Wine</h4>
                <button type="button" className="close" onClick={ this.props.close }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form ref="myForm" className="text-left" onSubmit={this.submitWineForm}>
                  <div className="form-group">
                    <label className="wine-form-label" htmlFor="description">Description/Review</label>
                    <textarea 
                      className="form-control"
                      id="description"
                      rows="3"
                      placeholder="What I love about this wine is..."
                      value={this.state.newFormDescription}
                      onChange={this.userAddedDescription}
                      required></textarea>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="wine-form-label" htmlFor="points">Points</label>
                      <input
                        type="number"
                        min="75"
                        max="100"
                        className="form-control"
                        id="points"
                        placeholder="92"
                        value={this.state.newFormPoints}
                        onChange={this.userAddedPoints}
                        required/>
                    </div>
                    <div className="form-group col">
                      <label className="wine-form-label" htmlFor="price">Price</label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        className="form-control"
                        id="price"
                        placeholder="25"
                        value={this.state.newFormPrice}
                        onChange={this.userAddedPrice}
                        required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="wine-form-label" htmlFor="state">State</label>
                        <select
                          className="form-control"
                          id="state"
                          value={this.state.newFormState}
                          onChange={this.userAddedState}
                          required>
                          <option disabled defaultValue>State...</option>
                          {stateOptions.map((eachState) => {
                            return(<option key={eachState}>{eachState}</option>
                                )
                            })
                          }
                        </select>
                    </div>
                    <div className="form-group col">
                      <label className="wine-form-label" htmlFor="region">Region</label>
                      <input
                        type="text"
                        className="form-control"
                        id="region"
                        placeholder="Napa Valley"
                        value={this.state.newFormRegion}
                        onChange={this.userAddedRegion}
                        required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="wine-form-label" htmlFor="variety">Variety</label>
                    <input
                      type="text"
                      className="form-control"
                      id="variety"
                      placeholder="Pinot Noir"
                      value={this.state.newFormVariety}
                      onChange={this.userAddedVariety}
                      required/>
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-success">Submit Wine</button>
                  </div>
                </form>
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

export default Modal;
