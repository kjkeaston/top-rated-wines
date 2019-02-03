import React, { Component } from 'react';

class Modal extends Component {
  constructor() {
    super();

    this.userAddedDescription = this.userAddedDescription.bind(this);
    this.userAddedPoints = this.userAddedPoints.bind(this);
    this.userAddedPrice = this.userAddedPrice.bind(this);
    this.userSelectedState = this.userSelectedState.bind(this);
    this.userAddedRegion = this.userAddedRegion.bind(this);
    this.userAddedVariety = this.userAddedVariety.bind(this);
    this.submitWineForm = this.submitWineForm.bind(this);
  }

  userAddedDescription(e) {
    this.setState({ newFormDescription: e.target.value })
  }

  userAddedPoints(e) {
    this.setState({ newFormPoints: e.target.value })
  }

  userAddedPrice(e) {
    this.setState({ newFormPrice: e.target.value })
  }

  userSelectedState(e) {
    this.setState({ newFormState: e.target.value })
  }

  userAddedRegion(e) {
    this.setState({ newFormRegion: e })
  }

  userAddedVariety(e) {
    this.setState({ newFormVariety: e.target.value })
  }

  submitWineForm(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/posts.json`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trail_id: this.state.newPostTrailID,
        snow_condition: this.state.newPostSnowCondition,
        crowd_level: this.state.newPostCrowdLevel,
        star_rating: this.state.newPostStarRating,
        notes: this.state.newPostNotes,
      })
    }).then( (res) => {
      if (res.status === 201) {
        res.json().then( (newlyCreatedPost) => {
          this.props.history.push(`/trails/${newlyCreatedPost.trail_id}`);
        });
      } else {
        alert("Oops! Did you select all the required fields?");
      }
    });
  }

  render() {
    const stateOptions = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

    return (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AboutModalLabel">Add New Wine</h5>
                <button type="button" className="close" onClick={ this.props.close }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.submitWineForm}>
                  <div className="form-group">
                    <label htmlFor="description">Description/Review</label>
                    <textarea 
                      className="form-control"
                      id="description"
                      rows="3"
                      placeholder="What I love about this wine is..."
                      value={}
                      onChange={}></textarea>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="points">Points</label>
                      <input
                        type="text"
                        className="form-control"
                        id="points"
                        placeholder="92"
                        value={}
                        onChange={}/>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="25"
                        value={}
                        onChange={}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="state">State</label>
                        <select
                          className="form-control"
                          id="state"
                          value={}
                          onChange={}>
                          {stateOptions.map((eachState) => {
                            return(<option>{eachState}</option>
                                )
                            })
                          }
                        </select>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="region">Region</label>
                      <input
                        type="text"
                        className="form-control"
                        id="region"
                        placeholder="Napa Valley"
                        value={}
                        onChange={}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="variety">Variety</label>
                    <input
                      type="text"
                      className="form-control"
                      id="variety"
                      placeholder="Pinot Noir"
                      value={}
                      onChange={}/>
                  </div>
                  <div className="form-group">
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
