import Image from 'next/image';
import Container from 'components/ui/Container';
import social from './social.json';

import GithubIcon from 'assets/social/github.svg';

import { Wrapper, Flex, Links, Details } from './styles';

const icons = {
  Github: GithubIcon,
};

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Austin Turpen</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <Image width={24} height={24} layout="fixed" src={icons[name]} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
