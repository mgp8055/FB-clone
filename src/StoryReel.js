import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
        <Story image="https://i.pinimg.com/280x280_RS/4f/f6/fa/4ff6fa34c077411d33241f3ac095eae1.jpg" profileSrc="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg" title="Mohit Patel"/>
        <Story image="https://m.media-amazon.com/images/M/MV5BMjE4NDcyNTQ3MF5BMl5BanBnXkFtZTcwMjg3NDg4Ng@@._V1_.jpg" profileSrc="https://images.immediate.co.uk/production/volatile/sites/3/2016/11/122240.jpg?quality=90&resize=768,574" title="Sheldon Cooper"/>
        <Story image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/big-bang-theory-penny-kaley-cuoco-1632400651.jpeg?crop=0.956xw:0.639xh;0.0238xw,0.0398xh&resize=480:*" profileSrc="http://images6.fanpop.com/image/photos/41600000/The-Big-Bang-Theroy-the-big-bang-theory-41693954-802-1200.jpg" title="Penny"/>
        <Story image="https://www.flare.com/wp-content/uploads/2017/10/INLINE_BigBang.jpg" profileSrc="https://www.looper.com/img/gallery/this-why-leonard-was-the-worst-in-the-big-bang-theory/l-intro-1618343949.jpg" title="Leonard Hofstadter"/>
        <Story image="https://www.cheatsheet.com/wp-content/uploads/2019/10/Howard-Wolowitz-705x1024.jpg" profileSrc="https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000191232449.jpg" title="Howard Wolowitz"/>
    </div>
  )
}

export default StoryReel