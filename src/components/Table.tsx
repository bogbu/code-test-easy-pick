import '../assets/components/table.css';
import {User} from "../types";
import {Link} from "react-router-dom"; // 테이블 스타일 파일을 import


// 테이블의 열 이름과 유저 데이터를 사용하는 컬럼 이름 정의
interface TableProps {
    data: User[]; // 각 행의 데이터를 담은 배열
}

// 테이블 컴포넌트 정의
function Table({data}: TableProps) {
    // User 인터페이스의 모든 속성을 columns 배열에 추가
    if (data.length === 0) {
        return <div>No data available</div>;
    }
    const columns: (keyof User)[] = Object.keys(data[0]) as (keyof User)[];
    const parsingCountry = (country : string) : string => {
        if(country === "japan") return "일본"
        else if (country === "korea") return "한국"
        else if (country === "usa") return "미국"
        else return ""
    }
    const parsingUserInterest = (userInterest: string[]): string => {
        if(userInterest.length === 0) return "";
        else return userInterest.join(', ');
    }
    return (
        <table>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, columnIndex) => {
                        if (column === "gender") {
                            return (
                                <td key={columnIndex}>{row[column] === "female" ? "여성" : "남성"}</td>
                            )
                        } else if (column === "agreeTerms") {
                            return (
                                <td key={columnIndex}>{row[column] ? "Yes" : "No"}</td>
                            )
                        } else if (column === "country") {
                            return (
                                <td key={columnIndex}>{parsingCountry(row[column] )}</td>
                            )
                        } else if (column === "userInterest") {
                            return (
                                <td key={columnIndex}>{parsingUserInterest(row[column] )}</td>
                            )
                        } else if (column === "userId") {
                            return (
                                <Link to={`${row[column]}`}>{row[column]}</Link>
                            )
                        }
                        return (
                            <td key={columnIndex}>{row[column]}</td>
                        )
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
