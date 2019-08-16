import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem, clearItems } from "../actions/itemActions";

class ShoppingList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     buyItems: ["milk", "bread", "fruits"],
  //     message: ""
  //   };
  // }

  // addItem(e) {
  //   e.preventDefault();
  //   const newItem = this.newItem.value;
  //   const onList = this.state.buyItems.includes(newItem);
  //   if (onList) {
  //     this.setState({ message: "Item is on the list" });
  //   } else {
  //     newItem !== "" && this.setState({ buyItems: [...this.state.buyItems, newItem], message: "" });
  //   }
  //   this.addForm.reset();
  // }

  // removeItem(item) {
  //   const newBuyItems = this.state.buyItems.filter(buyItem => buyItem !== item);
  //   this.setState({ buyItems: [...newBuyItems] });
  //   if (newBuyItems.length === 0) {
  //     this.setState({ message: "No items in the list. Add some!!" });
  //   }
  // }

  // clearAll() {
  //   this.setState({ buyItems: [], message: "No items in the list. Add some!!" });
  // }

  render() {
    const { buyItems, message } = this.props;
    return (
      <div>
        <h1>Shopping List</h1>
        <form
          ref={input => (this.addForm = input)}
          className="form-inline"
          onSubmit={e => {
            e.preventDefault();
            const newitem = this.newitem.value;
            if (!newitem.trim()) {
              return;
            }
            this.props.addItem(newitem);
            this.addForm.reset();
          }}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput">
              Add New Item
            </label>
            <input ref={input => (this.newitem = input)} type="text" className="form-control" placeholder="vegies" id="newItemInput" />
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </div>
        </form>

        <div>
          {(message !== "" || buyItems.length === 0) && <p> {message}</p>}
          {buyItems.length > 0 && (
            <table className="table table-sm table-hover table-border">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {buyItems.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{item}</td>
                      <td>
                        <button type="button" onClick={() => this.props.removeItem(item)} className="btn btn-default btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">&nbsp;</td>
                  <td text-align="right">
                    <button onClick={() => this.props.clearItems()} className="btn btn-danger btn-sm">
                      Clear List
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buyItems: state.buyItems,
    message: state.message
  };
};
const mapDispatchToProps = dispatch => ({
  addItem: item => {
    dispatch(addItem(item));
  },
  removeItem: item => {
    dispatch(removeItem(item));
  },
  clearItems: () => {
    dispatch(clearItems());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
