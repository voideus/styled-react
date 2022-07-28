import { Image, Logo, Nav, StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { useTranslation } from 'react-i18next';

const lngs = {
	en: { nativeName: 'English' },
	de: { nativeName: 'Deutsch' },
};

function Header() {
	const { t, i18n } = useTranslation();
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='./images/logo.svg' alt='' />
					<Button>{t('button.free')}</Button>
				</Nav>
				<div>
					{Object.keys(lngs).map((lng) => (
						<button
							key={lng}
							style={{
								fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
							}}
							type='submit'
							onClick={() => i18n.changeLanguage(lng)}
						>
							{lngs[lng].nativeName}
						</button>
					))}
				</div>
				<Flex>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>

						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>

						<Button bg='#ff0099' color='#fff'>
							Get Started For Free
						</Button>
					</div>

					<Image src='./images/illustration-mockups.svg' alt='' />
				</Flex>
				<h1>Huddle</h1>
			</Container>
		</StyledHeader>
	);
}

export default Header;
