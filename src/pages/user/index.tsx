import Button from "../../components/Button.tsx";
import Table from "../../components/Table.tsx";
import {User} from "../../types";
import {useEffect, useState} from "react";
import {getUserList} from "../../api/Users.ts";
import {useNavigate} from "react-router-dom";



const UserPage = () => {
    const [userList, setUserList] = useState<User[]>([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getUserList().then((user)=>{
            setUserList(user)
        })
    },[])
    return (
        <div>
            <Button onClick={()=>{navigate('/users/form')}}>등록</Button>
            <Table data={userList} />
        </div>
    )
}
export default UserPage;