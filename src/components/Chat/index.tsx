/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import * as S from './styles';
import { Title } from '../Title';
import { Button } from '../Button';

interface IReceivedMessage {
  message:string;
  authorId: string;
  author:string;
}

const socket = io('http://localhost:3333')

export function Chat() {

  const [chat, setChat] = useState(false);
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [messageList, setMessageList] = useState<IReceivedMessage[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conectado ao servidor Socket.io');
    });

    socket.on('receivedMessage', (data)=>{
      setMessageList((current) => [...current, data]);
    })


    return () => {
      socket.off('receivedMessage')
    };
  }, []);

  const sendMessage = (message:string) => {
    console.log(message, 'message')

    socket.emit('message', message);
    console.log(message, 'send message')
    clearInput()
  };

  const handleJoin = () => {
    console.log(inputValue)
    setUserName(inputValue)
    socket.emit('set_userName', inputValue);
    setChat(true)
    clearInput()

  };

  const clearInput = () => {
    setInputValue('')
  }

  return (
    chat ? (<S.ContainerChat>
      <Title title="Chat"/>
        <S.ContainerMessages>
          <S.Messages>

          {
            messageList.map((message, index) => (
              
              message.author === userName ?
              (<S.ReceivedMessage key={index}><strong>{message.author}</strong>: {message.message}</S.ReceivedMessage>)
              :
              (<S.SendMessage key={index}><strong>{message.author}</strong>: {message.message}</S.SendMessage>)
            ))
          }
          </S.Messages>

        <S.Chat>
          <S.Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button onClick={() => sendMessage(inputValue)}>Enviar</Button>
        </S.Chat>
        </S.ContainerMessages>

    </S.ContainerChat>):(
      <S.EnterChat>
        <Title title="Tela de Entrada"/>
        <S.Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <S.Button onClick={handleJoin}>Entrar no Chat</S.Button>
      </S.EnterChat>
    )
    
  );
}
