'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// Zod Schema
const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z
    .string()
    .min(10, 'Must be at least 10 digits')
    .max(15, 'Must be at most 15 digits')
    .regex(/^[0-9]+$/, 'Must be only digits'),
  timeFrame: z.string().min(1, 'Time Frame is required'),
  size: z.string().min(1, 'Size is required'),
  quantity: z.string().min(1, 'Quantity is required'),
  projectDescription: z
    .string()
    .min(20, 'Please describe your project in more detail (at least 20 characters)'),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function RequestQuoteForm() {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: QuoteFormValues) => {
    console.log('Form submitted:', data);
    setSubmissionSuccess(true);
    reset();
    setTimeout(() => setSubmissionSuccess(false), 5000);
  };

  const inputStyles =
    'w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200';
  const errorStyles = 'text-red-500 text-sm mt-1';
  const labelStyles = 'block text-gray-700 text-sm font-medium mb-1 text-left';

  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 lg:py-24 text-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          REQUEST A QUOTE
        </motion.h2>

        {submissionSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 text-green-800 border border-green-300 p-4 rounded-md mb-8 text-center"
          >
            ✅ Your quote request was submitted successfully!
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelStyles}>
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register('name')}
                className={inputStyles}
              />
              {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelStyles}>
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
                className={inputStyles}
              />
              {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className={labelStyles}>
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                {...register('phoneNumber')}
                className={inputStyles}
              />
              {errors.phoneNumber && <p className={errorStyles}>{errors.phoneNumber.message}</p>}
            </div>

            {/* Time Frame */}
            <div>
              <label htmlFor="timeFrame" className={labelStyles}>
                Time Frame<span className="text-red-500">*</span>
              </label>
              <select id="timeFrame" {...register('timeFrame')} className={inputStyles}>
                <option value="">Choose Time Frame</option>
                <option value="1-3-months">1–3 Months</option>
                <option value="3-6-months">3–6 Months</option>
                <option value="6-12-months">6–12 Months</option>
                <option value="12-plus-months">12+ Months</option>
              </select>
              {errors.timeFrame && <p className={errorStyles}>{errors.timeFrame.message}</p>}
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className={labelStyles}>
                Size<span className="text-red-500">*</span>
              </label>
              <select id="size" {...register('size')} className={inputStyles}>
                <option value="">Choose Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              {errors.size && <p className={errorStyles}>{errors.size.message}</p>}
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className={labelStyles}>
                Quantity<span className="text-red-500">*</span>
              </label>
              <select id="quantity" {...register('quantity')} className={inputStyles}>
                <option value="">Choose Quantity</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-100">51–100</option>
                <option value="100-plus">100+</option>
              </select>
              {errors.quantity && <p className={errorStyles}>{errors.quantity.message}</p>}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className={labelStyles}>
              Project Description<span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={5}
              placeholder="Describe your project..."
              {...register('projectDescription')}
              className={`${inputStyles} resize-y`}
            ></textarea>
            {errors.projectDescription && (
              <p className={errorStyles}>{errors.projectDescription.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="text-center text-gray-600 text-sm mt-6">
            By submitting this form, you agree to our{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              disabled={!isValid}
            >
              Submit Request
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
