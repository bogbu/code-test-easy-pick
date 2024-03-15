// 라디오 버튼의 props 타입 정의
interface RadioProps {
    options: { label: string; value: string }[]; // 라디오 버튼의 옵션들
    selectedValue: string; // 선택된 값
    onChange: (value: string) => void; // 값이 변경될 때 호출되는 콜백 함수
}

// 라디오 버튼 컴포넌트 정의
function RadioInput({ options, selectedValue, onChange }: RadioProps) {
    return (
        <div>
            {options.map((option, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={option.value === selectedValue}
                        onChange={() => onChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}

export default RadioInput;
