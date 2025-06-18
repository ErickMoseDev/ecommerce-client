import React from 'react';
import { useParams } from 'react-router';

export default function CustomerDetails() {
	const { id } = useParams();

	return <div>CustomerDetails: {id} </div>;
}
