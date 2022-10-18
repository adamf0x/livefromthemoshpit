import mergeImages from "merge-images-v2";

export const merge = ()=>{
    mergeImages([{src: "/textures/Screenshot_7.png",width: 256, height: 256, x: 0, y: 256}, {src: "/textures/Screenshot_8.png",width: 256, height: 256, x: 512, y: 256}, {src: "/textures/Screenshot_9.png",width: 256, height: 256, x: 256, y: 0}, {src: "/textures/Screenshot_10.png",width: 256, height: 256, x: 256, y: 256},{src: "/textures/download.jpg",width: 256, height: 256, x: 256, y: 512},{src: "/textures/download2.jpg",width: 256, height: 256, x: 768, y: 256} ], {width: 1024, height:768}).then(img=>{
        console.log(img)
        return img;
    })
}