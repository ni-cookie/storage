import {atom} from "recoil";
import {UserClass} from "../Classes/User/User";

export const userState = atom<UserClass>({
    key: 'userState',
    default: UserClass.prototype
});
