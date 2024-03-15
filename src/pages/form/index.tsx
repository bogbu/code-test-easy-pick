import Input from "../../components/Input.tsx";
import RadioInput from "../../components/RadioInput.tsx";
import CheckboxInput from "../../components/CheckBox.tsx";
import Button from "../../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {UseForm} from "./UseForm.ts";
import Select from "../../components/Select.tsx";
import {emailRegex, phoneNumberRegex, userIdRegex} from "../../utils/regex.ts";
import {useState} from "react";

const formatPhoneNumber = (input : string) => {
    const phoneNumberWithoutHyphen = input.replace(/-/g, '');
    return phoneNumberWithoutHyphen.replace(
        /(\d{2,3})(\d{3,4})(\d{4})/,
        (_match, p1, p2, p3) => {
            return `${p1}-${p2}-${p3}`;
        }
    );
};
const UserForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const {
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
        countryOptions,
        InputType
    } = UseForm();
    return (
        <section>
            <h2>사용자 등록</h2>
            <article>
                <div>
                    <div>아이디</div>
                    <Input onChange={(e) => {
                        if(userIdRegex.test(e.target.value)) {
                            setError("");
                            settingInputValue(e.target.value, InputType.userId)
                        } else {
                            setError("아이디는 6~20자 이하로 적어주세요.");
                        }
                    }}/>
                </div>
            </article>
            <article>
                <div>
                    <div>이름</div>
                    <Input onChange={(e) => {
                        settingInputValue(e.target.value, InputType.userName)
                    }}/>
                </div>
            </article>
            <article>
                <div>
                    <div>이메일</div>
                    <Input onChange={(e) => {
                        if(emailRegex.test(e.target.value)) {
                            settingInputValue(e.target.value, InputType.email);
                            setError("");
                        } else {
                            setError("이메일은 @를 포함해야 합니다.");
                        }

                    }}/>
                </div>
            </article>
            <article>
                <div>
                    <div>전화번호</div>
                    <Input   onChange={(e) => {
                        const inputValue = e.target.value;
                        const formattedPhoneNumber = formatPhoneNumber(inputValue);

                        if(phoneNumberRegex.test(formattedPhoneNumber)) {
                            settingInputValue(formattedPhoneNumber, InputType.tel);
                            setError("");
                        } else {
                            setError("전화번호 규격을 맞춰서 적어주세요.");
                        }
                    }}/>
                </div>
            </article>
            <article>
                <div>
                    <div>생년월일</div>
                    <Input onChange={(e) => {
                        settingInputValue(e.target.value, InputType.birth)
                    }}/>
                </div>
            </article>
            <article>
                <Select options={countryOptions} onChange={countryHandleChange}/>
            </article>
            <article>
                <RadioInput onChange={radioHandleChange} options={radioOptions} selectedValue={selectedGender}/>
            </article>
            <article>
                <CheckboxInput options={checkboxOptions} selectedValues={selectedInterest}
                               onChange={checkHandleChange}/>
            </article>
            <article>
                <CheckboxInput options={agreeTermsOptions} selectedValues={selectedAgreeTerms}
                               onChange={checkAgreeHandleChange}/>
            </article>
            <article>
                <Button onClick={handleSubmit}>저장</Button>
                <Button onClick={() => {
                    navigate(-1)
                }}>목록</Button>
            </article>
            <article style={{color: "red"}}>
                {error}
            </article>
        </section>
    )
}
export default UserForm;