import React from 'react';
// import Image from 'next/image';

export const Services = () => {
	return (
		<>
			<div className='service row align-items-center mb-5'>
				<div className='col-12 col-lg-6'>
					<h3 className='h3 display-6 mb-3'>Web Development</h3>
					<p className='lead font-weight-light fw-light fw-light'>
						With deep experience in web-developing we are offering a full range
						of services, to create and launch from scratch or redesign website,
						that will work for you and your business. Leveraging modern
						approaches to web development, we bring front-end, back-end, and
						architecture together to meet your business needs. Our solutions are
						unique, flexible, and most importantly, secure.
					</p>

					<div className='features fw-bold font-weight-bold fw-bold fw-bold'>
						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-palette'></i>
							</div>

							<span>Exclusive &#38; Intuitive design</span>
						</div>

						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-hammer'></i>
							</div>

							<span>Modern tools &#38; High technologies</span>
						</div>

						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-shield-alt'></i>
							</div>

							<span>Security &#38; Management</span>
						</div>
					</div>
				</div>

				<div className='web col-12 col-lg-6 pl-auto pl-lg-5 ps-auto ps-lg-5 pe-auto pe-lg-5 my-5'>
					<img
						src='/img/web.png'
						alt='service preview'
						// unsized
						// quality={95}
					/>
				</div>
			</div>

			<div className='service row align-items-center text-left text-lg-end mb-5'>
				<div className='col-12 col-lg-6 mb-5 order-lg-2'>
					<h3 className='h3 display-6 mb-3'>
						Game &#38; Mobile App Development
					</h3>
					<p className='lead'>
						We build spectacular 2D and 3D multiplayer games powered by
						addictive gameplay and develop visually pleasing apps, that
						visualize engaging real-world scenarios and communicate your
						impactful business value. Our top quality app development services
						already helped a lot of businesses to active their goals, and we are
						ready for new challenges.
					</p>

					<div className='features features-reverse fw-bold font-weight-bold fw-bold'>
						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-heart'></i>
							</div>

							<span>User friendly interface</span>
						</div>

						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-dice'></i>
							</div>

							<span>Addictive gameplay</span>
						</div>

						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-gamepad'></i>
							</div>

							<span>Best game experience</span>
						</div>
					</div>
				</div>

				<div className='game col-12 col-lg-6 order-lg-1 my-5'>
					<img
						src='/img/gamemobile.png'
						alt='service preview'
						// unsized
						// quality={95}
					/>
				</div>
			</div>

			<div className='service row align-items-center mb-5'>
				<div className='col-12 col-lg-6'>
					<h3 className='h3 display-6 mb-3'>Marketing</h3>
					<p className='lead'>
						We are offering a full pack of digital marketing services for your
						businesses, enabling you to focus on their core business processes.
						We don't specialize in any industry, we specialize in what we do -
						getting new customers for your business. Achieve success and
						increase the recognition of your company and its services with our
						help.
					</p>

					<div className='features fw-bold font-weight-bold fw-bold'>
						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-chess-knight'></i>
							</div>

							<span>Individual &#38; Effective marketing strategy</span>
						</div>

						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-magic'></i>
							</div>

							<span>Unique &#38; Selling content</span>
						</div>

						<div className='nice-list-item'>
							<div className='icon-box'>
								<i className='fas fa-chart-line'></i>
							</div>

							<span>Successful marketing campaigns</span>
						</div>
					</div>
				</div>

				<div className='market col-12 col-lg-6 pl-lg-5 ps-lg-5 my-5'>
					<img
						src='/img/marketing.png'
						alt='service preview'
						// unsized
						// quality={95}
					/>
				</div>
			</div>
		</>
	);
};
