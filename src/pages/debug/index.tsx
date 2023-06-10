import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

const Debug = () => {
    const {data: sessionData} = useSession()
    const posts = api.post.getAll.useQuery()
    return ( 
        <h1>Welcome {sessionData?.user.name}</h1>

     );
}
 
export default Debug;