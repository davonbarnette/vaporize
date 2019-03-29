import AppStore from "./Store";
import axios from 'axios';

export default class AppActions {

    static async uploadImage(base64image: string) {
        // let image = new Blob([base64image], {type:'image/*'});
        let formData = AppActions.imageToForm(base64image);
        let res = await axios.post('/upload', formData);
        if (res) {
            let base64 = res.data.vapor;
            AppStore.src = "data:image/jpg;base64," + base64;
        }
    }

    static imageToForm(image: any) {
        let data = new FormData();
        data.set('data', image);
        return data;
    }

    static downloadCurSource(){
        if (!AppStore.src) return null;
        this.downloadFile('yeetus.jpg', AppStore.src)
    }

    static downloadFile(fileName: string, url: string) {
        let downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = fileName;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    static dataURLtoFile(dataurl: string, filename: string) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)![1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }

}