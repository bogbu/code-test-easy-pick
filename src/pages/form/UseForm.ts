import {useState} from "react";
import {postUserList} from "../../api/Users.ts";
interface inputType {
    id: string,
    userId: string,
    userName: string,
    email: string,
    tel: string,
    birth: number
}
enum InputType {
    userId,
    email,
    userName,
    tel,
    birth,
    id,
}
const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const UseForm = () => {

    const [inputValue, setInputValue] = useState<inputType>({
        id: "",
        userId: "",
        userName: "",
        email: "",
        tel: "",
        birth: 0
    });
    
    const settingInputValue = (value : string, type :InputType ) => {
        const newInputValue : inputType = {...inputValue};
        switch (type) {
            case InputType.id:
                newInputValue.id = value;
                setInputValue(newInputValue)
                return;
            case InputType.userId:
                newInputValue.userId = value;
                setInputValue(newInputValue)
                return ;
            case InputType.userName :
                newInputValue.userName = value;
                setInputValue(newInputValue)
                return ;
            case InputType.email :
                newInputValue.email = value;
                setInputValue(newInputValue)
                return ;
            case InputType.tel :
                newInputValue.tel = value;
                setInputValue(newInputValue)
                return ;
            case InputType.birth :
                newInputValue.birth = Number(value);
                setInputValue(newInputValue)
                return ;
        default :
            throw new Error("Unknown InputType " + type);
        }
    }
    // 선택된 값을 상태로 관리
    const [selectedGender, setSelectedGender] = useState('');
    const [selectCountry, setSelectCountry] = useState('');
    const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
    const [selectedAgreeTerms, setSelectedAgreeTerms] = useState<string[]>([]);
    // 값이 변경될 때 호출되는 콜백 함수
    const radioHandleChange = (value: string) => {
        setSelectedGender(value);
    };
    const checkHandleChange = (values: string[]) => {
        setSelectedInterest(values);
    };
    const countryHandleChange = (value: string) => {
        setSelectCountry(value);
    }
    const checkAgreeHandleChange = (value : string[]) => {
        console.log(value,"value");
        if(value.length === 0) return setSelectedAgreeTerms([]);
        const checkValue = value[0] === "true" ? "true" : "";
        setSelectedAgreeTerms([checkValue]);
    }
    const radioOptions = [
        {label: '남성', value: 'male'},
        {label: '여성', value: 'female'},
    ];
    const countryOptions = [
        { value: 'korea', label: '한국' },
        { value: 'japan', label: '일본' },
        { value: 'usa', label: '미국' },
    ]
    const agreeTermsOptions = [
        {label: '약관에 동의합니다', value: 'true'},
    ]
    const checkboxOptions = [
        {label: '프로그래밍', value: 'programming'},
        {label: '디자인', value: 'design'},
        {label: '음악', value: 'music'},
        {label: '스포츠', value: 'sports'},
    ]
    const handleSubmit = () => {
        postUserList({
            id: getRandomNumber(0, 10000),
            userId: inputValue.userId,
            userName: inputValue.userName,
            email: inputValue.email,
            tel: inputValue.tel,
            birth: inputValue.birth,
            gender: selectedGender,
            agreeTerms: selectedAgreeTerms.length !== 0,
            country: selectCountry,
            userInterest: selectedInterest
        }).then(r => console.log(r,"r"))
    }

    return {
        radioHandleChange,
        radioOptions,
        selectedGender,
        checkboxOptions,
        selectedInterest,
        checkHandleChange,
        checkAgreeHandleChange,
        selectedAgreeTerms,
        agreeTermsOptions,
        handleSubmit,
        settingInputValue,
        countryHandleChange,
        selectCountry,
        countryOptions,
        InputType
    };
}