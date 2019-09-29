export default interface IUserProfileContextType {
    userIsAuthenticated: boolean,
    accessToken: string | null,
    tokenType: string | null,
    refreshToken: string | null,
    expiresIn: number | null,
    scope: string | null,
    email: string | null
}
