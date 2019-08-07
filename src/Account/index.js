import React, { Component } from 'react';


class Account extends Component {

  constructor(){
    super();
    this.textInput = React.createRef();
    this.state={
      balance: 0,
    }
  };

  increaseBalance = (e) => {
    console.log(this.textInput.current.value);
    this.setState({
      balance: this.state.balance + parseInt(this.textInput.current.value) 
    })
  };

  decreaseBalance = (e) => {
    

    let inputValue = parseInt(this.textInput.current.value)

    if(this.state.balance - inputValue >= 0) {
      this.setState({
        balance: this.state.balance - inputValue
      })
    } else {
      return false;      
    }

  //   if(this.state.balance >= 0) {
  //   this.setState({
  //     balance: this.state.balance - parseInt(this.textInput.current.value)
  //   })
  // } else {
  //   this.setState({
  //     banlance: 0
  //   })
  // }
  };

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance ">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={this.textInput} />
        <input type="button" value="Deposit" onClick={this.increaseBalance}/>
        <input type="button" value="Withdraw" onClick={this.decreaseBalance}/>
      </div>
    )
  }
}

export default Account;
