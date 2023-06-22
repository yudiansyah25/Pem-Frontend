import styled from "styled-components";

/**
 * Membuat variabel button(component)
 * -Membuat element button dan beri sttyling
 * -Styling menggunakan tagged template
 */
const color={
     primary: "#4361ee",
     secondary :"#b5179e",
};

const Button = styled.button`
    padding :0.8 rem 2 rem ;
    border :none;
    border-radius:10px;
    color: #fff;
    cursor: pointer;


    //tangkap props variant

    background-color: ${function(props) {
        if(props.variant){
            return props.theme.color[props.variant];
        }else{
            return props.theme.colors["primary"];
        }
    }};
    
    ${function(props){
        return props.full && cs`
        width: 100% 
        display: block;

        `;


    }}
    `;

    export default Button;
    