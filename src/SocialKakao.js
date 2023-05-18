import React, { useEffect } from "react";

const loginWithKakao = () => {
  window.Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/Intro",
  });
};

const SocialKakao = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    script.integrity =
      "sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Kakao.init("6f4a768a88ae088d4770b11c9431138f");
    };
  }, []);

  return <div>{/* ... */}</div>;
};

export { loginWithKakao };
export default SocialKakao;