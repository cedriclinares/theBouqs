import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FAF0DC;
`;

export const Title = styled.div`
  font-size: 32px;
  margin: 24px 0px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ItemImage = styled.img`
  width: 75px;
  height: 75px;
  padding-right: 8px;
`;

export const FinalItemPrice = styled.div`
  font-size: 24px;
  margin-top: 20px;
`;

export const ItemPrice = styled.div`
  font-size: 20px;
`;

export const ItemName = styled.div`
  font-size: 24px;
`;

