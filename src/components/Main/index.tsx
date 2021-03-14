import * as S from './styles';

const Main = ({
  title = 'React avancado',
  description = 'typescript, ReactJS, NextJS, Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="logo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="homem na frente do computador"
      />
    </S.Wrapper>
  );
};

export default Main;
