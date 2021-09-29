const apiUrl = process.env.API_URL || 'http://localhost:1337'; // if (proebalsya)

export const fetchAPI = async (query: string, variables = {}) => {
	const res = await fetch(`${apiUrl}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	return json.data;
};

export const sendMail = async (mail: any) => {
	const res = await fetch(`${apiUrl}/email`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(mail),
	});

	return res;
};
