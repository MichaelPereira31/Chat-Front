import { ReactNode } from 'react';

import * as S from './styles';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <S.Container>
      <h1>{title}</h1>
    </S.Container>
  );
}
