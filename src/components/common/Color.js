import React, {Component} from 'react';
import styled from 'styled-components';

export default class Color extends Component {


  render() {
    const {id, value, deleteColor} = this.props;

    return (
      <Container onClick={() => deleteColor(id)}>
        <Preview bg={value}>
          <i className="fa fa-trash"/>
        </Preview>
        <HexLabel>{value}</HexLabel>
      </Container>
    );
  }
}

const Container = styled.div`
  background: #fff;
  width: calc(20vw - 80px);
  height: calc(20vw - 80px);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  
  @media only screen and (max-width: 1200px) {
    width: calc(40vw - 80px);
    height: calc(40vw - 80px);
  }
`;

const Preview = styled.div`
    background: ${ ({bg}) => bg};
    flex: 4;
    width: 100%;
    position: relative;
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.1);
  
    i {
        width: 100px;
        height: 100px;
        display: none;
        font-size: 30px;
        cursor: pointer;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 300ms;
        color: #444;
    }
    
    &:hover {
        i {
          opacity: 1;
        }
    }
`;

const HexLabel = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
`;