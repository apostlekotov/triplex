import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Links } from '@/components/Links';

export const Contacts = () => {
	return (
		<div id='contacts' className='contacts bg-white'>
			<div className='container'>
				<h2 className='h2 display-3 text-start text-md-center mb-4'>
					Our Contacts
				</h2>
				<p className='lead font-weight-light fw-light text-start text-md-center mb-5'>
					Only one call can easily change your business! So let’s get in touch
				</p>

				<hr />

				<div className='contact-box justify-content-start justify-content-md-around my-5'>
					<div className='nice-list-item'>
						<div className='icon-box'>
							<i className='fas fa-phone-alt'></i>
						</div>

						<span>
							<a href='tel:+46735513335'>+46 73 551 33 35</a>
						</span>
					</div>
					<div className='nice-list-item'>
						<div className='icon-box'>
							<i className='fas fa-envelope'></i>
						</div>

						<span>
							<a href='mailto:info@triplex.digital'>info@triplex.digital</a>
						</span>
					</div>
					<div className='nice-list-item'>
						<div className='icon-box'>
							<i className='fas fa-map-marker-alt'></i>
						</div>

						<span>
							<a
								href='https://goo.gl/maps/cUWcJJ6zRb8Gjych6'
								target='_blank'
								rel='noopener noreferrer'
							>
								Gunnarbovägen 2, Stockholm,
								<br />
								Stockholms Län 17065, Sverige
							</a>
						</span>
					</div>
				</div>

				<div className='contact-form row mb-5'>
					<div className='section-header col-12 col-lg-5'>
						<h3 className='h3 display-6 mb-5'>Write Us</h3>
						<p className='lead'>
							You can easily write to us right now and we will answer all of
							your questions as soon as possible
						</p>
						<div className='d-flex mb-5'>
							<Links />
						</div>
					</div>

					<ContactForm />
				</div>

				<hr />
			</div>
		</div>
	);
};
