import { useQuery } from '@tanstack/react-query';
import { ContactFormSubmission } from '../models/contact-form-submission';

export function useSubmitContactForm(submission: ContactFormSubmission) {
	return useQuery({
		queryKey: [submission],
		queryFn: async () => {
			return fetch('http://localhost:9000/contact-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(submission),
			});
		},
	});
}
