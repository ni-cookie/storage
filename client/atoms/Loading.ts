import {atom} from "recoil";

export const loadingState = atom<boolean>({
    key: 'userState',
    default: true
});
