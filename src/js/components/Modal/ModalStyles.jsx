import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  padding: 8px 0px;
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const AddToCart = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  padding: 8px;
  width: 150px;
  height: 30 px;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
  border-radius: 8px;
  background-color: red;
  margin-top: 32px;
`;

export const ExitButton = styled.div`
  cursor: pointer;
`;

export const ExitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ManufacturerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 20px;
`;