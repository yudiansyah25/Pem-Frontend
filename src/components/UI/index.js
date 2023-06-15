// import styled Components
import styled, { css } from 'styled-components';

// Buat object warna yang akan di pakai
const colors = {
  primary: '#06d6a0',
  secondary: '#118ab2',
  success: '#70AF85',
};

// Buat component Button
const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  text-decoration: none;

  /* background-color: ${({ color }) => colors[color] || colors.primary}; */
  background-color: ${({ color, theme }) => theme.colors[color] || theme.colors.primary};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
      
        ${(props) =>
          props.md &&
          css`
            font-size: 1rem;
            padding: 0.5rem 1rem;
          `}
          

   ${(props) =>
     props.sm &&
     css`
       font-size: 0.8rem;
       padding: 0.2rem 0.5rem;
     `} 
  ${(props) =>
    props.md &&
    css`
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
    `} 
`;

export default Button;
