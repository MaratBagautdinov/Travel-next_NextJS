import {FC, PropsWithChildren} from "react";
import {NextPage} from "next";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
export type TypeRoles ={
    isOnlyUser?:boolean
}
export type NextPageAuth<P={}> = NextPage<P> & TypeRoles

export type TypeAuthField ={
    Component:TypeRoles
}

const CheckRole:FC<PropsWithChildren<TypeAuthField>> = ({children, Component: {isOnlyUser}}) => {
    const {data} = useSession()
    const {replace, pathname} = useRouter()

    const Children = () => <>{children}</>

    if(status === 'loading') return null
    if(data) return <Children/>
    if(isOnlyUser){
        pathname !== '/auth' && replace('/auth')
        return null
    }
    return <div>CheckRole</div>
};

export default CheckRole;