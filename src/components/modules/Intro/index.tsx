import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import Header from 'components/ui/theme/Header';
import devIllustration from 'assets/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h2>I'm Austin and I'm a MERN and Django developer!</h2>
          <Link href="#contact" passHref>
            <Button as="a">Reach out</Button>
          </Link>
        </Details>
        <Thumbnail>
          <Image src={devIllustration} alt="I'm Austin and I'm a MERN and Django developer!!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
