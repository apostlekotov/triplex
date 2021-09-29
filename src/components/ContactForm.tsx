import React from 'react';
import { useFormik } from 'formik';
import { sendMail } from '@/utils/fetchAPI';

export const ContactForm = () => {
	const {
		values,
		handleChange,
		handleSubmit,
		isSubmitting,
		status = { success: null },
	} = useFormik({
		initialValues: { name: '', email: '', message: '' },

		onSubmit: async (
			{ name, email, message },
			{ setSubmitting, resetForm, setStatus }
		) => {
			const res = await sendMail({
				to: process.env.TO_EMAIL,
				subject: `Hi, Triplex! <${email}${name !== '' ? `, ${name}` : ''}>`,
				from: email,
				text: message,
			});

			setSubmitting(false);
			resetForm({});
			setStatus({ success: res.ok });

			setTimeout(() => {
				setStatus({ success: null });
			}, 4000);
		},
	});

	return (
		<form
			className='d-flex flex-column align-items-center col-12 col-lg-7'
			autoComplete='off'
			onSubmit={handleSubmit}
		>
			<div className='row col-12 w-100'>
				<div className='col-14 col-md-6 mb-3'>
					<div>
						<label
							htmlFor='name'
							className='form-label text-uppercase font-weight-bold fw-bold'
						>
							<small>Your name</small>
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='form-control mb-3'
							placeholder='Markus Person'
							size={40}
							onChange={handleChange}
							value={values.name}
						/>
					</div>
					<div>
						<label
							htmlFor='email'
							className='form-label text-uppercase font-weight-bold fw-bold'
						>
							<small>
								Your e-mail <strong>*</strong>
							</small>
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='form-control'
							placeholder='m.person@triplex.digital'
							size={40}
							onChange={handleChange}
							value={values.email}
							required
						/>
					</div>
				</div>

				<div className='d-flex flex-column col-14 col-md-6'>
					<label
						htmlFor='message'
						className='form-label text-uppercase font-weight-bold fw-bold'
					>
						<small>
							Your message <strong>*</strong>
						</small>
					</label>
					<textarea
						name='message'
						id='message'
						className='form-control h-100 mb-3'
						placeholder='Enter your message'
						onChange={handleChange}
						value={values.message}
						required
					></textarea>
				</div>
			</div>

			<button
				type='submit'
				className={`btn align-self-end ${
					status?.success == false ? 'btn-danger' : 'btn-primary'
				}`}
				disabled={isSubmitting}
				style={{ marginRight: '10px' }}
			>
				{isSubmitting ? (
					'Loading...'
				) : status.success !== null ? (
					status.success == true ? (
						<>
							Received <i className='fas fa-check-circle'></i>
						</>
					) : (
						status.success == false && (
							<>
								Error <i className='fas fa-times'></i>
							</>
						)
					)
				) : (
					'Send'
				)}
			</button>
		</form>
	);
};
