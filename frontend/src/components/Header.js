import React, { Component } from "react";
import NewWineForm from "./NewWineForm";
import CheckMarkModal from "./CheckMarkModal";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showAddWineModal: false,
      showCheckMarkModal: false
    }
    this.showAddWineModal = this.showAddWineModal.bind(this);
    this.showCheckMarkModal = this.showCheckMarkModal.bind(this);
    this.closeAddWineModal = this.closeAddWineModal.bind(this);
    this.closeCheckMarkModal = this.closeCheckMarkModal.bind(this);
  }

  showAddWineModal() {
    this.setState({
      showAddWineModal: true
    })
  }

  showCheckMarkModal() {
    this.setState({
      showCheckMarkModal: true
    })
  }

  closeAddWineModal() {
    this.setState({
      showAddWineModal: false
    })
  }

  closeCheckMarkModal() {
    this.setState({
      showCheckMarkModal: false
    })
  }

  render() {
    return (
      <div>
        <header className="app-header">
          <div className="row">
            <div className="col-md-12 header-title">
              <h1>Top Rated U.S. Wines Under $30</h1>
            </div>
          </div>
          { this.state.showAddWineModal ? <NewWineForm close={ this.closeAddWineModal }/> : null }
          { this.state.showCheckMarkModal ? <CheckMarkModal close={ this.closeCheckMarkModal }/> : null }
          <div className="row">
            <div className="col-6 text-center">
              <button onClick={ this.showAddWineModal } className="btn btn-primary">Add a new Wine</button>
            </div>
            <div className="col-6 text-center">
              <button onClick={ this.showCheckMarkModal } className="btn btn-info">Test Checkmarks</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
