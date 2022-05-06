import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import skillsIllustration from 'assets/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <Image src={skillsIllustration} alt="I'm Austin and I'm a MERN & Django developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy.
          </p>
          <Link href="#contact" passHref>
            <Button as="a">Contact me</Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
