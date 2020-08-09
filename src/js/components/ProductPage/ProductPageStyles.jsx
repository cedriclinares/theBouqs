import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin: 16px 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
`;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  flex: 1;
`;

export const ProductText = styled.div`
  font-size: 22px;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const SelectedCategory = styled.select`
    width: 100%;
    max-width: 175px;
    height 40px;
    padding: 0px 16px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border 1px solid black;
    border-radius: 8px;
    :focus {
      outline: none;
    }
`;

export const Option = styled.option`
  display: flex;
  cursor: pointer;
  padding: 0px 16px;
  align-items: center;
  width: 150px;
  height 25px;
  border-bottom: 1px solid black;
  background-color: white;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  max-height: 250px;
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  height: 100px;
`;

export const MobileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  height: 100px;
`;

export const MobileHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MobileHeaderItem =styled.div`
  position: absolute;
  right: 32px;
`;

export const HeaderItem =styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  width: 25%;
`;

export const HeaderTitle= styled.div`
  font-size: 48px
`;