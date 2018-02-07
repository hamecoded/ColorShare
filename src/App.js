import React, {Component} from 'react';
import styled from 'styled-components';
import Navigation from './components/common/Navigation';
import Main from './components/common/Main';
import Modal from './components/common/Modal';

export default class App extends Component {
  state = {
    open: false,
    colors: [
      {id: 1, value: "#676767"},
      {id: 2, value: "#fff"},
      {id: 3, value: "#000"},
      {id: 4, value: "#ff00ff"},
      {id: 5, value: "#6cff46"},
      {id: 6, value: "#000"},
      {id: 7, value: "#ff00ff"},
      {id: 8, value: "#f8ff7d"},
      {id: 9, value: "#ebe5ff"},
      {id: 10, value: "#ff00ff"}
    ]
  };

  toggleModal = () => {
    this.setState({open: !this.state.open})
  };

  deleteColor = (e, id) => {
    this.setState({
      colors: this.state.colors.filter((color) => color.id !== id)
    });
  };

  addColor = () => {
    this.setState({open: true});

  };

  addNewColor = () => {
    const value = this.newColorInpEl.value;

    this.setState({
      colors: this.state.colors.concat([{id: this.genUuid(), value: `#${value}`}]),
      open: false
    });
  };

  genUuid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  render() {
    const {open} = this.state;
    return (
      <Container>
        <Navigation addColor={this.addColor} colors={this.state.colors}/>
        <Main deleteColor={this.deleteColor} colors={this.state.colors}/>

        <Modal isOpen={open} toggleModal={this.toggleModal}>
          <Inner>
            <Label>add new color</Label>
            <Body>
            <Input innerRef={(el) => this.newColorInpEl = el}/>
            <Button onClick={this.addNewColor}>add new</Button>
            </Body>
          </Inner>
        </Modal>
      </Container>
    );
  }
}

const Container = styled.div`
  background: #e0e0e0;
`;

const Body = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  flex-direction: column;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  flex: 4;  
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  height: 40px;
  margin-bottom: 4px;
  transition: all 300ms;
  
  &:focus { 
    outline: none;
    border-color: #444;
  }
`;

const Label = styled.div`
  text-transform: uppercase;
  height:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Button = styled.div`
  background: #444;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 300ms;
   
  &:hover {
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   
  }
`;

