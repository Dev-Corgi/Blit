
import TextContainer from 'Components/TextContainer/TextContainer';
import Div from 'Components/Div/Div'
import OpacityMotion from 'Motion/OpacityMotion'
import {useNavigate } from "react-router";
import './IntroScene.css'
import { motion,AnimatePresence } from 'framer-motion';
import React ,{useState,useRef,useEffect}from 'react';
import SocialKakao,{loginWithKakao } from "SocialKakao";
export default function IntroScene() {
  const fadeoutMotion = new OpacityMotion(null,0,0.4,[0.25, 0.1, 0.25, 0.9],0)
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithKakao();
  };


  useEffect(() => {
    // 카카오 로그인 성공 후 리다이렉트 시 실행될 코드
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      navigate("/Main"); // 로그인 성공 시 Main 페이지로 이동
    }
  }, [navigate]);



  
  return (
    <div>
<SocialKakao/>

    <Div classname="intro-text1" exit = {fadeoutMotion}>
    <TextContainer text = {"정산, 쉬워지다"}></TextContainer>
    </Div>

    <Div classname="intro-text2" exit = {fadeoutMotion}>
    <TextContainer text = {"귀찮은 정산은 Blit에 맡기고,"}></TextContainer>
    </Div>

    <Div classname="intro-text3" exit = {fadeoutMotion}>
    <TextContainer text = {"신나게 놀아볼까요?"}></TextContainer>
  </Div>

    <Div classname="intro-buttonframe" exit = {fadeoutMotion}>
    <button className='intro-button' onClick = {
      handleLogin
      }></button>
    </Div>
    </div>
  );




  
}

