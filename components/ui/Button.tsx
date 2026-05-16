'use client'

import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    fullWidth?: boolean
    disabled?: boolean
    className?: string
    onClick?: () => void
}

const Button = ({
    children,
    type = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    className,
    onClick,
}: ButtonProps) => {

    const baseStyles =
        'inline-flex items-center justify-center  font-semibold transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60'

    const variants = {
        primary:
            'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20',

        secondary:
            'bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/20',

        outline:
            'border border-secondary text-secondary hover:bg-secondary hover:text-white',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    }

    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth && 'w-full',
                className
            )}
        >
            {children}
        </motion.button>
    )
}

export default Button