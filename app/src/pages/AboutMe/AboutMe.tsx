import { FC } from 'react';
import styled from 'styled-components';

const ScrollableDiv = styled.div({
	width: '90%',
	height: '90%',
	overflow: 'auto',
	border: '2.3vmin solid transparent',
	borderImage: 'url(/menu-border.svg) 100',
	whiteSpace: 'pre-wrap',
});

const message = `Hello and thank you so much for taking your time to check out my work!

My name is Dylan. I'm a full-stack software engineer with about 5 years of work experience.

Okay, that's enough about work, let's get personal!

I LOVE to play video games. Retro games specifically have a special place in my heart :)

On weekends you can find me:
~ Soaking up sun at the beach
~ Skating down the boardwalk
~ Binge-watching Ru Paul's Drag Race at the local gay bars
~ Looking for a new seasonal beer at a micro-brewery
~ Having a boardgame night with friends
~ Cooking up a storm in the kitchen

Now to get a bit nerdy...

Revamping my online portfolio has been one of the most fun things I have been up to as of late!

A little about this project's inspiration:

I sat there thinking, how can I make a portfolio that isn't just another run-of-the-mill HTML page with some words on it that bores people to pieces?

Then it dawned upon me -- what if I make the font look dated and barely legible! Surely that will entertain the protfolio critiques :) <insert-sarcasm-here>

Jokes aside, if you are unfamiliar with Pokémon, I see how you could think this is the ugliest portfolio you have seen in a long time, maybe ever!

I promise you though, this retro-style is heavily inspired by the first video game I ever played, Pokémon Silver!

Pokémon Silver was released in the 90s and embodied all that was 8-bit excellence at the time.

I strongly recommend giving it a quick Google Image search so you can see the resemblance.

Any who, I hope you have enjoyed getting to know a bit about me, and if you haven't already then feel free to reach out!

I'm always happy to get to know people, and I'm currently open to work if you happen to be hiring! :)
`;

const AboutMe: FC<{}> = () => {
	return <ScrollableDiv>{message}</ScrollableDiv>;
};

export default AboutMe;
