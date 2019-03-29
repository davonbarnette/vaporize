import React, {Component} from 'react';
import * as Webcam from 'react-webcam';
import AppActions from "../../../data/App/Actions";
import './styles.scss'
import AppStore from "../../../data/App/Store";
export default class WebcamCapture extends Component {
    webcam?:any;

    setRef = (webcam:any) => {
        this.webcam = webcam;
    };

    capture = () => {
        if (!this.webcam) return null;
        const image = this.webcam.getScreenshot(); // Base 64 encoded
        return AppActions.uploadImage(image);
    };

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div className='webcam-capture'>
                <Webcam
                    audio={false}
                    height='100%'
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width='100%'
                    videoConstraints={videoConstraints}
                />
                <div className='vaporize-me-daddy' onClick={this.capture}>ｖａｐｏｒｉｚｅ　ｍｅ　ｄａｄｄｙ ぞブ塩</div>
                {AppStore.src && <div className='notice'>
                   Ｓｅｅｉｎｇ░ａ░ｂｌａｃｋ░ｉｍａｇｅ░ｂｅｌｏｗ？░Ｗｅ░ｃｏｕｌｄｎ＇ｔ░ｄｅｔｅｃｔ░ｙｏｕｒ░ｅｙｅｂａｌｌｓ░ｓｏ░ｔｒｙ░ａｇａｉｎ
　（乙　永塩ま逸卸し疫サ医　ム者イ）
】
                </div>}
            </div>
        );
    }
}