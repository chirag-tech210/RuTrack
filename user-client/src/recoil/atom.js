import {atom} from 'recoil';

export const DrawerOpenState = atom({
    key: "DrawerOpenState",
    default:false,
});

export const SelectedTab = atom({
    key: "SelectedTab",
    default:0,
});

export const courseWithId = atom({
    key:"courseWithId",
    default:null,
});
