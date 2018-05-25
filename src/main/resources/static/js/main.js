$(function () {
    var ctx = window['ctx'] || "";

    $("a.run-script").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var link = $(this);
        var checking = link.attr("checking");
        if (checking == "1") {
            return;
        }
        link.attr("checking", "1");
        $.get(ctx + "/admin/testHost", function (ret) {
            if (ret) {
                //host is good , then run script
                $.get(link.attr("href"), function (batchId) {
                    alert(batchId);
                    location.href = ctx + "/logs?batchId=" + batchId;
                })
            } else {
                alert("测试主机不可用或未安装docker环境");
                link.attr("checking", "0");
            }
        });
    })
});