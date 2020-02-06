$(function () {
    function update(url, formdata, callback) {
        $.ajax({
            url: url,
            type: "POST",
            data: formdata,
            dataType: "json",
            processData: false, // jQuery不要去处理发送的数据
            contentType: false,
            success: function (data) {
                callback(data)
            },
            error: function (err) {
                console.log("服务器错误！", err);
                $("span").text("服务器错误,请重新上传！")
            }

        })
    }


    $("input").change(function () {
        var imgSize = 4000000
        var zzz = /\.(jpg|png|jpeg|bmp)/i
        var str = this.files[0].name
        var sizes = this.files[0].size
        var last = str.lastIndexOf('.')
        var jq = str.substring(last, last.length).toLowerCase();
        if (zzz.test(jq) && sizes <= imgSize) {

            var url = "/picture"
            var imgFiles = $("#pic")[0].files[0]
            var formdata = new FormData()
            formdata.append("imges", imgFiles)
            update(url, formdata, function (data) {
                console.log(data)
                if (data.code < 0) {
                    $("span").text(data.msg)
                }
                $("span").text(data.msg)
                var localsto = window.localStorage
                localStorage.setItem("src", data.urls)
                $('.imgbox img').attr('src', localsto.src);

            })

        } else {
            alert("请选择一张正确的图片并且大小不能大于4M")
        }
    })

    window.onload = function () {
        var localsto = window.localStorage
        $('.imgbox img').attr('src', localsto.src);
    }
})