import { ListUsers, NoDataRecord } from "./components/ui.compst";
import { GetAllResponse } from "../service/api.service";

export async function ShowUsers() {
    const response = await GetAllResponse()
    const users = response.data
    return (
        <div className=" flex justify-center items-center pt-5 w-full px-2 my-1 rounded-lg">
            <div className=" flex flex-col  h-200 overflow-y-auto my-2 shadow-2xl rounded-lg w-1/2">
                {users.length > 0 ?
                    <ListUsers users={users} /> : <NoDataRecord />
                }
            </div>
        </div>
    )
}