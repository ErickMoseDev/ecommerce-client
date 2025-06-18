import React from 'react';

export default function Dashboard() {
	console.log(import.meta.env.VITE_SOME_KEY);

	return (
		<div>
			{import.meta.env.VITE_API_BASE_URL}
			<div>{import.meta.env.VITE_DB_PASSWORD}</div>
		</div>
	);
}
