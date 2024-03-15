// 체크박스 컴포넌트의 props 타입 정의
interface CheckboxProps {
    options: { label: string; value: string }[]; // 체크박스의 옵션들
    selectedValues: string[]; // 선택된 값들
    onChange: (values: string[]) => void; // 값이 변경될 때 호출되는 콜백 함수
}

// 체크박스 컴포넌트 정의
function CheckboxInput({ options, selectedValues, onChange }: CheckboxProps) {
    const handleChange = (value: string) => {
        // 새로운 선택된 값 배열 생성
        let newSelectedValues: string[] = [];

        // 선택된 값이 이미 있는 경우, 제거하고 없는 경우 추가
        if (selectedValues.includes(value)) {
            newSelectedValues = selectedValues.filter((val) => val !== value);
        } else {
            newSelectedValues = [...selectedValues, value];
        }

        // 콜백 함수 호출하여 선택된 값들 업데이트
        onChange(newSelectedValues);
    };

    return (
        <div>
            {options.map((option, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedValues.includes(option.value)}
                        onChange={() => handleChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}

export default CheckboxInput;
