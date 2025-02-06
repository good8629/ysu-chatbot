import {redirect} from "next/navigation";

export default function Language() {
    redirect('/');
    
    return(
        <>
            패러랠 라우트, 새로고침으로 페이지 접근하여 챗봇 home으로 이동
        </>
    )
}