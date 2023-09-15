import React from "react";
import {AppRootStateType} from "./store/redux-store";

export const StoreContext = React.createContext<any>(null);
export type ProviderType = {
    store: AppRootStateType;
    children: React.ReactNode;
};

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
};
