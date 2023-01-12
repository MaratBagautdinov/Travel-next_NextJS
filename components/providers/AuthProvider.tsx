import {FC} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
const DynamicCheckRole = dynamic(() => import("./checkRole"),{
    ssr: false
})
// @ts-ignore
const AuthProvider:FC<TypeAuthField> = ({children, Component: {isOnlyUser}}) => {
    return !isOnlyUser ?
        <>{children}</>
        :
        // @ts-ignore
        <DynamicCheckRole Component={{isOnlyUser}}>{children}</DynamicCheckRole>
};

export default AuthProvider;