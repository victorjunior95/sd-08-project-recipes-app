import styled from 'styled-components';

const StyledLogin = styled.main`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  display: flex;
  flex-direction: column;
  margin: 20vh auto;
  padding: 30px;
  width: 260px;

  img {
    width: 100px;
    margin-bottom: 10px;
  }

  .search-input {
    border: 1px solid #ccc;
    border-radius: 7px;
    margin-bottom: 10px;
    padding: 5px 10px;
    width: 100%;
  }

  button {
    background-color: green;
    border-radius: 5px;
    color: white;
    opacity: 0.8;
    padding: 4px 16px;
    width: 100%;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }

    &:disabled {
      background-color: red;
      cursor: not-allowed;
    }
  }
`;

export default StyledLogin;
