import * as S from './styles';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
      <S.ButtonSubmit onClick={onClick}>{children}</S.ButtonSubmit>
  );
}
