import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary'; // 인풋의 스타일을 지정하는 프로퍼티
}

const Input = ({ variant = 'primary', ...rest }: InputProps) => {
    // 기본 스타일
    const baseStyle: React.CSSProperties = {
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        outline: 'none',
    };

    const variantStyles: { [key in 'primary' | 'secondary']: React.CSSProperties } = {
        primary: {
            backgroundColor: '#ffffff',
            color: '#333333',
        },
        secondary: {
            backgroundColor: '#f0f0f0',
            color: '#666666',
        },
    };

    return (
        <input
            style={{ ...baseStyle, ...variantStyles[variant] }}
            {...rest}
        />
    );
};

export default Input;
