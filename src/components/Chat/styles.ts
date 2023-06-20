import styled from 'styled-components';
import image from '../../../assets/background.jpg'
export const ContainerChat = styled.div`
  background-image: url('${image.src}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

export const EnterChat = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100vh;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 80%;
  &:hover{
    border-color: #0056b3; 
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff; 
  border-radius: 10px;
  color: #ffffff;
  border: none;
  cursor: pointer; 
  font-size: 16px;
  margin-top: 5px;
  width: 80%;

  &:hover {
    background-color: #0056b3; 
  }
`
export const Chat = styled.div`
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const ContainerMessages = styled.div`
  background-color: blue;
  margin: 0 auto 0 auto;
  width:70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: flex-end;
  border-radius:15px 15px 0 0;
`

export const Messages = styled.div`

  height: 100vh;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background-color: #F5DEB3;
  overflow: auto;
`

export const ReceivedMessage = styled.p`
  margin-bottom: 5px;
  padding: 10px;
  background-color:  rgb(0,0,0, 0.5);
  display: flex;
  margin: 5px 0px 5px 20px;
  border-radius: 50px 5px 50px 50px;
  justify-content: flex-end;

`

export const SendMessage = styled.p`
  display: flex;
  background-color: rgb(0,0,0, 0.5);
  border-radius: 0px 50px 50px 50px;
  margin: 5px 20px 5px 0px;
  padding: 10px;
  color: black;
`