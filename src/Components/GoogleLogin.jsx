import ReactGoogleLogin from "react-google-login";
export default function GoogleLogin(props) {
  const onResponse = resp => {
    console.log(resp);
  };
  return (
    <ReactGoogleLogin
      clientId="<Your Client ID Here>" 
      buttonText="Login with Google"
      onSuccess={onResponse} 
      onFailure={onResponse} 
    />
  );
}
// npm install react-google-login --legacy-peer-deps