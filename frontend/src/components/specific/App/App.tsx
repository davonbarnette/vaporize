import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {observer} from "mobx-react";

import './styles.scss';

import AppStore from "../../../data/App/Store";
import WebcamCapture from "../../common/WebcamCapture/WebcamCapture";
import AppActions from "../../../data/App/Actions";

/* App Imports */


AppStore.initialize();

class App extends Component<RouteComponentProps, any> {

    onDownloadClick = () => {
        if (!AppStore.src) return null;
        else AppActions.downloadCurSource()
    };

    render() {
        return (
            <div className='app' >
                <div className='header'>
                    【﻿ａｎ　ａｐｐｌｉｃａｔｉｏｎ　ｔｈａｔ　ｖａｐｏｒｗａｖｅｓ　ａ　ｗｅｂｃａｍ　ｐｉｃｔｕｒｅ，
ｃｏｕｒｔｅｓｙ　ｏｆ】
                </div>
                <div className='courtesy'>
                    https://github.com/TimChinenov/VaporWaveArt
                </div>
                <WebcamCapture/>
                <img className='vaporized-image' src={AppStore.src}/>
                {AppStore.src && <div className='vaporize-me-daddy' onClick={this.onDownloadClick}>【﻿ｓａｖｅ　ｍｙ　ｉｍａｇｅ 】</div>}
            </div>
        );
    }
}

export default withRouter(observer(App));
