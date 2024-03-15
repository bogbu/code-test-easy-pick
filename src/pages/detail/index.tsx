import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser, getUser } from "../../api/Users.ts";
import { User } from "../../types";
import Table from "../../components/Table.tsx";
import Button from "../../components/Button.tsx";
import Input from "../../components/Input.tsx";

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        agreeTerms: false,
        birth: 0,
        country: "",
        email: "",
        gender: "",
        id: 0,
        tel: "",
        userId: "",
        userInterest: [],
        userName: ""

    });
    const [change, isChange] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            getUser(id).then((item) => {
                if (item.length > 0) {
                    setUser(item[0]); // 배열의 첫 번째 요소만을 가져오도록 수정
                } else {
                    window.alert("페이지가 존재하지 않습니다. 전 페이지로 돌아갑니다.");
                    navigate(-1);
                }
            });
        }
    }, [id]);

    const settingUserValue = (value: string, type: keyof User) => {
        setUser(prevUser => ({
            ...prevUser,
            [type]: value
        }));
    };

    const View = () => {
        return (
            <article>
                <Table data={[user]} /> {/* user가 배열이 아닌 단일 객체이므로 배열로 래핑 */}
                <article>
                    <Button onClick={() => {
                        isChange(true);
                    }}>수정</Button>
                    <Button onClick={() => {
                        const result = window.confirm("정말 삭제하시겠습니까?");
                        if (result) {
                            deleteUser(user!.id); // user가 null이 아님을 보장하기 위해 null 병합 연산자를 사용
                            window.alert("삭제되었습니다.");
                            navigate(-1);
                        }
                    }}>삭제</Button>
                </article>
            </article>
        );
    }

    const Change = () => {
        return (
            <section>
                <h2>사용자 수정</h2>
                <article>
                    <div>
                        <div>아이디</div>
                        <Input value={user!.userId} onChange={(e) => {
                            settingUserValue(e.target.value, 'userId');
                        }} />
                    </div>
                </article>
                <article>
                    <div>
                        <div>이름</div>
                        <Input value={user!.userName} onChange={(e) => {
                            settingUserValue(e.target.value, 'userName');
                        }} />
                    </div>
                </article>
                <article>
                    <div>
                        <div>이메일</div>
                        <Input value={user!.email} onChange={(e) => {
                            settingUserValue(e.target.value, 'email');
                        }} />
                    </div>
                </article>
                <article>
                    <div>
                        <div>전화번호</div>
                        <Input value={user!.tel} onChange={(e) => {
                            settingUserValue(e.target.value, 'tel');
                        }} />
                    </div>
                </article>
                <article>
                    <div>
                        <div>생년월일</div>
                        <Input value={user!.birth} onChange={(e) => {
                            settingUserValue(e.target.value, 'birth');
                        }} />
                    </div>
                </article>
                <article>
                    <Button onClick={() => {
                        isChange(false);
                    }}>수정 취소</Button>
                    <Button onClick={() => {
                        navigate(-1);
                    }}>목록</Button>
                </article>
                <article style={{ color: "red" }}>
                    {/*{error}*/}
                </article>
            </section>
        );
    }

    return (
        <section>
            {!change ? <View /> : <Change />}
        </section>
    );
}

export default Detail;
