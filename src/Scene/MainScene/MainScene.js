import "./MainScene.css";
import BlobComponent from "Components/BlobComponent";
import Profile from "Assets/Profile.png";
import ZoomButton from "Assets/ZoomButton.png";
import MemberPic1 from "Assets/Member1.png";
import MemberPic2 from "Assets/Member2.png";
import MemberPic3 from "Assets/Member3.png";
import MemberPic4 from "Assets/Member4.png";
import MemberPic5 from "Assets/Member5.png";
import MemberPic6 from "Assets/Member6.png";
import MainButton from "Assets/MainButton.png";
import TextContainer from "Components/TextContainer/TextContainer";
import ZStack from "Components/ZStack/Zstack";
import Div from "Components/Div/Div";
import OpacityMotion from "Motion/OpacityMotion";
import StretchWithPercent from "Motion/StretchWithPercent";
import ScaleMotion from "Motion/ScaleMotion";
export default function MainScene() {
  return (
    <div>


      <ZStack>
          <Div
            classname="main-priceunderline"
            animate={
              new StretchWithPercent(
                null,
                0.6,
                0.4,
                [0.25, 0.1, 0.25, 0.9],
                [24.29, 89.72, 73.46, 10.03],
                [24.29, 42.42, 73.46, 10.03]
              )
            }
          ></Div>

          <Div
            classname="main-pricetitle"
            animate={
              new OpacityMotion(null, 0, 0.8, [0.25, 0.1, 0.25, 0.9],1)
            }
          >
            <TextContainer text={"지금까지"}></TextContainer>
          </Div>

          <Div
            classname="main-pricevalue"
            animate={
              new OpacityMotion(null, 0.2, 0.8, [0.25, 0.1, 0.25, 0.9], 1)
            }
          >
            <TextContainer text={"52,500 원"}></TextContainer>
          </Div>
      </ZStack>
      <Div
        classname="main-memberlisttitle"
        animate={
          new OpacityMotion(null, 1.4, 0.8, [0.25, 0.1, 0.25, 0.9], 1)
        }
      >
        <TextContainer text={"함께한 멤버"}></TextContainer>
      </Div>

      <Div
        classname="main-memberlistzoombutton"
        animate={
          new OpacityMotion(null, 1.4, 0.8, [0.25, 0.1, 0.25, 0.9], 1)
        }
      >
        <img src={ZoomButton}></img>
      </Div>
      <div className="main-memberlistpics">
        
         <Div
        classname="main-memberlistpic"
        animate={
          new ScaleMotion(null,1.7,0.3,[0.25, 0.1, 0.25, 0.9],[0,0],[0.25,0.25])
        }
      >
       <img src={MemberPic1}></img>
      </Div>

      <Div
        classname="main-memberlistpic"
        animate={
          new ScaleMotion(null,1.8,0.3,[0.25, 0.1, 0.25, 0.9],[0,0],[0.25,0.25])
        }
      >
       <img src={MemberPic2}></img>
      </Div>

      <Div
        classname="main-memberlistpic"
        animate={
          new ScaleMotion(null,1.9,0.3,[0.25, 0.1, 0.25, 0.9],[0,0],[0.25,0.25])
        }
      >
       <img src={MemberPic3}></img>
      </Div>

        <Div
        classname="main-memberlistpic"
        animate={
          new ScaleMotion(null,2.0,0.3,[0.25, 0.1, 0.25, 0.9],[0,0],[0.25,0.25])
        }
      >
       <img src={MemberPic4}></img>
      </Div>

        <Div
        classname="main-memberlistpic"
        animate={
          new ScaleMotion(null,2.1,0.3,[0.25, 0.1, 0.25, 0.9],[0,0],[0.25,0.25])
        }
      >
       <img src={MemberPic5}></img>
      </Div>

      <Div
        classname="main-memberlistpic"
        animate={
          new ScaleMotion(null,2.2,0.3,[0.25, 0.1, 0.25, 0.9],[0,0],[0.25,0.25])
        }
      >
       <img src={MemberPic6}></img>
      </Div>
      </div>

      <Div
        classname="main-button"
        animate={
          new OpacityMotion(null, 2.4, 0.4, [0.25, 0.1, 0.25, 0.9],
             1)
        }
      >
        <img src={MainButton}></img>
      </Div>

    </div>
  );
}
