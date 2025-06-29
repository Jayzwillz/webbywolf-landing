'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email' }),
  agree: z.literal(true, {
    errorMap: () => ({ message: 'You must agree before submitting.' }),
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', agree: true },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // Optional: trigger a toast or confirmation message here
  }

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-white overflow-hidden px-4 sm:px-8 md:px-16">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 space-y-6 py-10 md:py-0"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-700 max-w-md">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
          sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
          imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc
          euismod ultrices etiam nulla habitasse.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <div className="flex">
            <input
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-r-md flex items-center gap-2 hover:bg-blue-700 transition-all"
            >
              Submit <ArrowRight size={16} />
            </button>
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" {...register('agree')} />
            <span>No credit card required!</span>
          </label>
          {errors.agree && (
            <p className="text-sm text-red-500">{errors.agree.message}</p>
          )}
        </form>
        {isSubmitSuccessful && (
  <p className="text-sm text-green-600">Submitted successfully!</p>
)}
      </motion.div>

      {/* Right (angled image) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative md:w-1/2 w-full h-[400px] md:h-[600px] clip-diagonal"
      >
        <Image
          src="/images/hero-bike.jpg" // Replace with your actual image path
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  )
}
