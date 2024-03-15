import { ButtonHTMLAttributes } from 'react';
// 버튼의 props 타입 정의
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'; // 버튼의 스타일을 지정하는 프로퍼티
};

// 버튼 컴포넌트 정의
const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
