import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Title } from '../Title';

const TeamPrize = () => {
  const [teamPrize, setTeamPrize] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sorteio-de-jogos-de-campeonatos.vercel.app/team/prize');
        const data = await response.json();
        setTeamPrize(data);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os dados', error);
      }
    };

    fetchData();
  }, []);

  if (!teamPrize) {
    return <S.Loading>Carregando...</S.Loading>
  }

  return (
    <S.Container>
      <Title title='Sorteio dos Times'/>
        {
          teamPrize.map((time, index) => (
              <S.Team key={index}>{time[0]} VS {time[1]}</S.Team>
            ))
          }
    </S.Container>
  );
};

export default TeamPrize;
