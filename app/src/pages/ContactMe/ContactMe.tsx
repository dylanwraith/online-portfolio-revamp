import { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useSubmitContactForm } from '../../server/hooks/contact-form-hooks';
import { ContactFormSubmission } from '../../server/models/contact-form-submission';

const ScrollableForm = styled.form({
	width: '90%',
	height: '90%',
	overflow: 'auto',
	border: '16px solid transparent',
	borderImage: 'url(/menu-border.svg) 100',
});

const BlockLabel = styled.label({
	paddingLeft: '6px',
	fontSize: 'small',
});

const BlockInput = styled.input({
	display: 'block',
	fontFamily: 'Pokemon Classic Regular',
	width: 'calc(100% - 8.2px)',
	padding: '0',
	fontSize: 'small',
	paddingLeft: '4px',
});

const BlockTextArea = styled.textarea({
	display: 'block',
	fontFamily: 'Pokemon Classic Regular',
	width: 'calc(100% - 8.2px)',
	padding: '0',
	fontSize: 'small',
	paddingLeft: '4px',
	resize: 'vertical',
});

const ContactMeButton = styled.button({
	fontFamily: 'Pokemon Classic Regular',
	marginTop: '12px',
	width: '100%',
});

function toFormSubmission(e: any): ContactFormSubmission {
	const name: String = e.target.fullName.value;
	const email: String = e.target.email.value;
	const favoritePokemon: String = e.target.favoritePokemon.value;
	const message: String = e.target.message.value;

	const formSubmissionText = `
	\nName: ${name}
	\nE-Mail: ${email}
	\nFavorite Pokemon: ${favoritePokemon}
	\nMessage: ${message}`;

	return { text: formSubmissionText };
}

const ContactMe: FC<{}> = () => {
	const [formSubmission, setFormSubmission] = useState({ text: '' });
	const { isFetching } = useSubmitContactForm(formSubmission);

	function handleSubmission(e: any) {
		e.preventDefault();
		setFormSubmission(toFormSubmission(e));
	}

	return (
		<ScrollableForm onSubmit={handleSubmission}>
			<BlockLabel>Full Name</BlockLabel>
			<BlockInput name='fullName' />
			<BlockLabel>Email</BlockLabel>
			<BlockInput name='email' />
			<BlockLabel>Favorite Pokémon</BlockLabel>
			<BlockInput name='favoritePokemon' />
			<BlockLabel>Message</BlockLabel>
			<BlockTextArea name='message' />
			<ContactMeButton type='submit' disabled={isFetching}>
				Contact Me!
			</ContactMeButton>
		</ScrollableForm>
	);
};

export default ContactMe;
