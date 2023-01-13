import { FC, PropsWithChildren } from 'react'
import dynamic from "next/dynamic";
import {TypeAuthField} from "./checkRole";
const DynamicCheckRole = dynamic(() => import("./checkRole"),{
    ssr: false
})
const AuthProvider:FC<PropsWithChildren<TypeAuthField>> = ({children, Component: {isOnlyUser}}) => {
    return !isOnlyUser ?
        <>{children}</>
        :
        <DynamicCheckRole Component={{isOnlyUser}}>{children}</DynamicCheckRole>
};

export default AuthProvider;