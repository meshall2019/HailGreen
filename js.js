
$(document).ready(function(){

/*The logIn page*/
$("form").fadeIn(1000,function(){

    $(".h").animate({

        top:"0px"
        
    },600)
})

$("#new_account").click(function(){

if($("#new_account a").text()=="ليس لدي حساب"){

$("#signin-emil,#signin-passwd,#signin-city").css("display","block")
$("#signin-h5").text("تسجيل جديد")
$("#signin-sign").text(" تسجيل جديد ")
$("#passwd_forget").hide()
$("#new_account a").text("تسجيل دخول")
}

else{

    $("#signin-emil,#signin-passwd,#signin-city").css("display","none")
    $("#signin-h5").text("تسجيل دخول")
    $("#signin-sign").text(" تسجيل دخول ")
    $("#passwd_forget").show()
    $("#new_account a").text("ليس لدي حساب")
}

})
/*----------*/

    /*the start of the listPage*/
    $("#order").click(function (){

        var sl=document.querySelectorAll("select");
        var nt=document.querySelectorAll("h5");
        for(i=0;i<=sl.length;i++){

            if(sl[i].value!=="حدد الكمية"){

                $(".row").hide()
                $(this).hide()
                $("#card-data").fadeIn(1000)

                if($(".tree1 span").text()==""){

                    $(".tree1 span:eq(0)").text(" نوع الشجرة: "+nt[i].textContent)
                    $(".tree1 span:eq(1)").text(" الكمية: "+sl[i].value)
                }

                else if($(".tree2 span").text()==""){

                    $(".tree2 span:eq(0)").text(" نوع الشجرة: "+nt[i].textContent)
                    $(".tree2 span:eq(1)").text(" الكمية: "+sl[i].value)
                }

                else if($(".tree3 span").text()==""){

                    $(".tree3 span:eq(0)").text(" نوع الشجرة: "+nt[i].textContent)
                    $(".tree3 span:eq(1)").text(" الكمية: "+sl[i].value)
                }

                else if($(".tree4 span").text()==""){

                    $(".tree4 span:eq(0)").text(" نوع الشجرة: "+nt[i].textContent)
                    $(".tree4 span:eq(1)").text(" الكمية: "+sl[i].value)
                }

                else if($(".tree5 span").text()==""){

                    $(".tree5 span:eq(0)").text(" نوع الشجرة: "+nt[i].textContent)
                    $(".tree5 span:eq(1)").text(" الكمية: "+sl[i].value)
                }

                else if($(".tree6 span").text()==""){

                    $(".tree6 span:eq(0)").text(" نوع الشجرة: "+nt[i].textContent)
                    $(".tree6 span:eq(1)").text(" الكمية: "+sl[i].value)
                }

            }

        }

    })
$(".dropdown-menu a[href='#']").click(function (){

    alert("WE ARE Coming FOR IT")
    })


});