import React from 'react';

export default function SectionHeading({ title, description }) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-4xl font-cal">{title}</h2>
			<p className="text-sm text-slate-500">{description}</p>
		</div>
	);
}
