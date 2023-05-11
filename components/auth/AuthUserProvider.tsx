import { User } from "firebase/auth"
import { createContext, useContext, FC, PropsWithChildren } from "react"
import { WrappedComponentProps } from "react-with-firebase-auth"
import { createComponentWithAuth } from "../../util/firebase"
import { auth } from "firebase-functions/v1"

type AuthData = Omit<WrappedComponentProps, "user"> & {
  user?: User | null
}

const AuthUserContext = createContext<AuthData | undefined>(undefined)

const AuthUserProvider: FC<WrappedComponentProps> = ({children, ...auth}) => (
  <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
)

export default createComponentWithAuth(AuthUserProvider)

export const useAuth = () => {
  const context = useContext(AuthUserContext)
  if (!context) throw new Error("AuthUserContext has no value")
  return context
}