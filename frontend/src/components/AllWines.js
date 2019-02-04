import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import JqxGrid, { jqx } from '../assets/jqwidgets-react/react_jqxgrid';
import JqxButton from '../assets/jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../assets/jqwidgets-react/react_jqxinput.js';
import JqxNumberInput from '../assets/jqwidgets-react/react_jqxnumberinput.js';
import JqxWindow from '../assets/jqwidgets-react/react_jqxwindow.js';


class AllWines extends Component {
  constructor() {
    super();
    this.state = {
      numOfPages: 0,
      baseURL: "http://localhost:8080/api/wines/page?page=",
      pageNumForURL: 0,
      pageNum: 1
    }
  }

  componentDidMount() {
    console.log("hi there");
    fetch("http://localhost:8080/api/wines").then( (res) => {
      return res.json();
    }).then( (wines) => {
      console.log("This is wine array >>> ", wines, wines.length)
      let numOfPages = Math.ceil(wines.length / 15)
      this.setState({
        numOfPages: numOfPages
      });
      console.log(this.state.allWinesLength)
    })
    this.refs.myWindow.on('open', () => {
      this.refs.description.selectAll();
    });
    this.refs.SaveBtn.on('click', () => {
      console.log("hellooooo")
      if (this.state.editrow >= 0) {
        let row = {
          description: this.refs.description.val(), 
          points: this.refs.points.val(), 
          price: this.refs.price.val(),
          state: this.refs.state.val(), 
          region: this.refs.region.val(),
          variety: this.refs.variety.val()
        };
        let rowID = this.refs.myGrid.getrowid(this.state.editrow);
        this.refs.myGrid.updaterow(rowID, row);
        this.refs.myWindow.hide();
      }
    });
    this.refs.CancelBtn.on('click', () => {
      console.log("Yooo")
      this.refs.myWindow.hide();
    });
    this.refs.DeleteBtn.on('click', () => {
      if(window.confirm("Are you sure? This can't be undone!")) {
        let selectedrowindex = this.refs.myGrid.getselectedrowindex();
        let rowscount = this.refs.myGrid.getdatainformation().rowscount;
        if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
          let id = this.refs.myGrid.getrowid(selectedrowindex);
          this.refs.myGrid.deleterow(id);
          this.refs.myWindow.hide();
        }
        fetch("http://localhost:8080/api/wines").then( (res) => {
          return res.json();
        }).then( (wines) => {
          let numOfPages = Math.ceil(wines.length / 2)
            this.setState({
              numOfPages: numOfPages
            });
        });
      } else {
        console.log("Yooo")
        this.refs.myWindow.hide();
      }
    })


    // this.refs.addWineBtn.on('click', () => {
    //   console.log("add clicked")
    //   let datarow = "Hello";
    //   this.refs.myGrid.addrow(null, datarow);
    // })


    this.refs.nextPageBtn.on('click', () => {
      if(this.state.pageNum === this.state.numOfPages) {
        alert("You are on the last page!")
      } else {
        console.log("original URL: ", this.refs.myGrid.source()._source.url)
        this.setState({
          pageNumForURL: this.state.pageNumForURL + 1,
          pageNum: this.state.pageNum + 1
        })
        console.log("new page num should be: ", this.state.pageNumForURL)
        let url = `${this.state.baseURL}${this.state.pageNumForURL}`
        this.refs.myGrid.source()._source.url = url
        this.refs.myGrid.updatebounddata();
      }
    })
    this.refs.prevPageBtn.on('click', () => {
      if(this.state.pageNumForURL < 1) {
        alert("You are on the first page!")
      } else {
        console.log("original URL: ", this.refs.myGrid.source()._source.url)
        this.setState({
          pageNumForURL: this.state.pageNumForURL - 1,
          pageNum: this.state.pageNum - 1
        })
        console.log("new page num should be: ", this.state.pageNumForURL)
        let url = `${this.state.baseURL}${this.state.pageNumForURL}`
        this.refs.myGrid.source()._source.url = url
        this.refs.myGrid.updatebounddata();
      }
    })
    this.refs.csvExport.on('click', () => {
      this.refs.myGrid.exportdata('csv', 'jqxGrid');
    });


  }


  render() {
    let source =
      {
        // localdata: localData,
        datatype: 'json',
        datafields: [
          { name: 'description', type: 'string' },
          { name: 'points', type: 'number' },
          { name: 'price', type: 'number' },
          { name: 'state', type: 'string' },
          { name: 'region', type: 'string' },
          { name: 'variety', type: 'string' }
        ],
        // root: 'Wines',
        // record: 'Wine',
        id: '_id',
        url: `${this.state.baseURL}${this.state.pageNumForURL}`,

        // pagenum: 0,
        // pagesize: 5,
        // pager: (pagenum, pagesize, oldpagenum) => {
        //   console.log(pagenum, pagesize, oldpagenum)
        //             // callback called when a page or page size is changed.
        // },
        // addrow: (rowid, rowdata, position, commit) => {
        //   console.log("new wine buttn clicked")
        //   console.log("row data is: ", rowdata)
        //   // synchronize with the server - send insert command
        //   // call commit with parameter true if the synchronization with the server is successful 
        //   //and with parameter false if the synchronization failed.
        //   // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
        //   commit(true);
        // },
        updaterow: (rowid, rowdata, commit) => {
          console.log(rowid, rowdata)
          axios.put(`http://localhost:8080/api/wines/${rowid}`, rowdata)
          commit(true);
        },
        deleterow: (rowid, commit) => {
          console.log("Delete clicked")
          console.log(rowid)
          axios.delete(`http://localhost:8080/api/wines/${rowid}`)
          // synchronize with the server - send delete command
          // call commit with parameter true if the synchronization with the server is successful 
          //and with parameter false if the synchronization failed.
          commit(true);
        }
      };
      console.log("this is the URL in render source: ", source.url)

      let dataAdapter = new jqx.dataAdapter(source);

      // let rendertoolbar = (toolbar) => {
      //   let container = document.createElement('div');
      //   container.style.margin = '5px';
      //   let buttonContainer1 = document.createElement('div');
      //   container.appendChild(buttonContainer1);
      //   toolbar[0].appendChild(container);

      //   let addRowButton = ReactDOM.render(<JqxButton value='Add New Wine Review' style={{ float: 'left' }}/>, buttonContainer1);
      //   addRowButton.on('click', () => {
      //     console.log("add clicked")
      //     let datarow = "Hello";
      //     this.refs.myGrid.addrow(null, datarow);
      //   });
      // };

      // const cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
      //     if (value < 20) {
      //       return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #ff0000;'>${value}</span>`;
      //     } else {
      //         return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #008000;'>${value}</span>`;
      //     }
      // };

      const columns=
        [
          { text: 'Wine Review',
            datafield: 'description',
            width: 300
          },
          { text: 'Points',
            datafield: 'points',
            align: 'center',
            cellsalign: 'center',
            width: 100
          },
          { text: 'Price',
            datafield: 'price',
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'c',
            width: 100
          },
          { text: 'State',
            datafield: 'state',
            align: 'center',
            cellsalign: 'center',
            width: 150
          },
          { text: 'Region',
            datafield: 'region',
            align: 'center',
            cellsalign: 'center',
            width: 150
          },
          { text: 'Variety',
            datafield: 'variety',
            align: 'center',
            cellsalign: 'center',
            width: 150
          },
          { text: 'Edit/Delete Wine', datafield: 'Edit', columntype: 'button', align: 'center',
            cellsalign: 'center',
            width: 150,
            cellsrenderer: () => {
                return 'Edit/Delete';
            }, buttonclick: (row) => {
                // open the popup window when the user clicks a button.
                this.setState({
                    editrow: row
                });
                this.refs.myWindow.position({ x: 68, y: this.refs.myGrid.offsetTop });
                // get the clicked row's data and initialize the input fields.
                let dataRecord = this.refs.myGrid.getrowdata(this.state.editrow);
                this.refs.description.val(dataRecord.description);
                this.refs.points.val(dataRecord.points);
                this.refs.price.val(dataRecord.price);
                this.refs.state.val(dataRecord.state);
                this.refs.region.val(dataRecord.region);
                this.refs.variety.val(dataRecord.variety);
                // show the popup window.
                this.refs.myWindow.open();
                }
          }
        ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ float: 'left', marginLeft: 10, marginBottom: 10}}>
              <JqxButton value='Export to CSV' ref='csvExport' height={25}/>
            </div>
            <JqxGrid
            ref='myGrid'
            width={1100} source={dataAdapter} columns={columns}
            pageable={false} autoheight={true} autorowheight={true} sortable={true}
            altrows={true} enabletooltips={true} editable={true}
            />
          </div>
        </div>

        <div className="row page-change-btn-row">
          <div className="col-4 text-right">
            <JqxButton ref='prevPageBtn' className="btn btn-primary" value='< PREVIOUS PAGE' height={30}/>
          </div>
          <div className="col-4 text-center">
            <p>Page {this.state.pageNum} of {this.state.numOfPages} </p>
          </div>
          <div className="col-4 text-left">
            <JqxButton ref='nextPageBtn' className="btn btn-primary" value='NEXT PAGE >' width={131} height={30}/>
          </div>
        </div>

        <JqxWindow ref='myWindow'
          width={450} resizable={false} isModal={true} autoOpen={false} modalOpacity={'0.01'}>
          <h4>EDIT and/or DELETE</h4>
          <div>
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-group">
                  <label className="wine-form-label" htmlFor="description">Description/Review</label>
                  <JqxInput
                    ref='description'
                    className="form-control"
                    id="description"
                    required />
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label className="wine-form-label" htmlFor="points">Points</label>
                    <JqxInput
                      ref='points'
                      type="number"
                      min="75"
                      max="100"
                      className="form-control"
                      id="points"
                      required/>
                  </div>
                  <div className="form-group col">
                    <label className="wine-form-label" htmlFor="price">Price</label>
                    <JqxInput
                      ref="price"
                      type="number"
                      min="1"
                      max="30"
                      className="form-control"
                      id="price"
                      required/>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label className="wine-form-label" htmlFor="state">State</label>
                    <JqxInput
                      ref="state"
                      type="text"
                      className="form-control"
                      id="state"
                      required />
                  </div>
                  <div className="form-group col">
                    <label className="wine-form-label" htmlFor="region">Region</label>
                    <JqxInput
                      ref="region"
                      type="text"
                      className="form-control"
                      id="region"
                      required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="wine-form-label" htmlFor="variety">Variety</label>
                  <JqxInput
                    ref="variety"
                    type="text"
                    className="form-control"
                    id="variety"
                    required />
                </div>
              </div>
              <div className="modal-footer">
                <div className="col-6 text-left">
                  <JqxButton ref='SaveBtn' value='Save' 
                  style={{marginRight: 20, backgroundColor: "#007bff"}} width={65} height={30} className="btn btn-info"/>
                  <JqxButton ref='CancelBtn' value='Cancel' width={65} height={30} className="btn btn-secondary"/>
                </div>
                <div className="col-6 text-right">
                  <JqxButton ref='DeleteBtn' value='DELETE' style={{backgroundColor: "#dc3545"}} width={65} height={30} className="btn btn-danger"/>
                </div>
              </div>
            </div>
          </div>
        </JqxWindow>
      </div>
    )
  }
}

export default AllWines
