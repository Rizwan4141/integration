import React from "react";
import ReactTwitterLogin from "react-twitter-login";
export default function TwitterLogin() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };
  return (
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey="<Consumer Key>" 
      consumerSecret="<Consumer Secret>" 
      callbackUrl="<Callback URL>" 
    />
  );
}