
    //取得indecator下所有li
    let img_btn = document.querySelectorAll("#indicator li img");
    console.log(img_btn);
        
    function change_img(li_img) {
        var slider_img = document.querySelector("#slider img");
        var pic = li_img.src;
        slider_img.src = pic;
    }

    function change_img2(li_img){
        let pic = li_img.src;
        console.log(pic);
        const slider_img = document.querySelector("#slider img");
        slider_img.style.background = `url('${pic}')`;
    }

