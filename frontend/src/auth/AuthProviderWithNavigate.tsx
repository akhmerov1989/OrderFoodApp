import { AppState, Auth0Provider, User } from "@auth0/auth0-react";


type Props = {
    children: React.ReactNode;
}

const AuthProviderWithNavigate = ({ children }: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientID || !redirectUri) {
        throw new Error("unable to initialise auth");
    }
    
        const onRedirectCallBack = (_appState?: AppState, user?: User) => {
            console.log("USER", user);
    };

    return (
        <Auth0Provider 
        domain={domain}
        clientId={clientID}
        authorizationParams={{
            redirect_uri: redirectUri,
        }}
        onRedirectCallback={onRedirectCallBack}
        >
            {children}
        </Auth0Provider>
    );
};



export default AuthProviderWithNavigate;