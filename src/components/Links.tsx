import React from 'react';

export const Links = () => {
	return (
		<>
			<a
				href='https://www.linkedin.com/company/triplex-lab'
				className='link-icon'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='d-none'>linkedin</span>
				<i className='fab fa-linkedin-in'></i>
			</a>
			<a
				href='https://www.facebook.com/triplexlab'
				className='link-icon'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='d-none'>facebook</span>
				<i className='fab fa-facebook'></i>
			</a>
			<a
				href='https://instagram.com/triplex.digital'
				className='link-icon'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='d-none'>instagram</span>
				<i className='fab fa-instagram'></i>
			</a>
		</>
	);
};
