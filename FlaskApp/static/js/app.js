$("a#addcust").click(() => {
    $("div.add__cutsomer").css("display", "block")
})
$("i.fa").click(() => {
    $("div.add__cutsomer").css("display", "none")
})

$("a#addorder").click(() => {
    $("div.add__order").css("display", "block")
})
$("i.fa").click(() => {
    $("div.add__order").css("display", "none")
})


$("input#addcustbutton").click(() => {

    var name = $("input#flname").val()
    var phone = $("input#phonenum").val()
    var address = $("input#address").val()
    var gender = $("select#genders").val()
    
    var url = "/addcust"
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            'name': name,
            'phone': phone,
            'address': address,
            'gender' : gender
        })
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        window.location.reload()
    })

})

$("input#addorderbutton").click(() => {

    var custid = $("select#custselect").val()
    var orderitemid = $("select#orderitemselect").val()
    var qtyorderitem = $("input#qtyorderitem").val()

    var url = "/addorder"
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            'custid': custid,
            'orderitemid': orderitemid,
            'qtyorderitem' : qtyorderitem
        })
    }).then(res => res.json()).then((data) => {
        if (data.msg == "SE") {
            alert("Stock Exceeded or Stock Over")
        } else {
            window.location.reload()
        }
        
    })
})


$("input#searchcust").keyup(() => {
    var words = $("input#searchcust").val()
    if (words.length > 2) {
        fetch('/searchcust', {
            method: 'POST',
            body: JSON.stringify({
                'words' :words
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
    
            $("div.all__customers").empty()
           
    
            for (var i = 0; i < data.msg.length; i++) {
                var id = data.msg[i][0]
                var name = data.msg[i][1]
                var gender = data.msg[i][2]
                var phone = data.msg[i][3]
                var address = data.msg[i][4]
    
                console.log(id, " ", name, " ", phone, " ", address)
                
                str = '<div class="customers__infos">\
                    <div><p>'+id+'</p></div>\
                    <div><p><a href="#"></a>'+name+' ('+gender+') </p></div>\
                    <div><p>'+phone+'</p></div>\
                    <div><p>'+address+'</p></div>\
                </div>'
                $("div.all__customers").append(str)
            }
    
    
        })
    } else if(words.length == 0){
        location.reload()
    }
    
})


$("input#searchorderid").keyup(() => {
    var words = $("input#searchorderid").val()
    if (words.length > 2) {
        
        fetch("/searchorder", {
            method: "POST",
            body: JSON.stringify({
                'words' :words
            })
        }).then(res => res.json()).then((data) => {

            
            $("div.all__orders").empty()
            
            for (var i = 0; i < data.msg.length; i++) {
                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]


                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

            }


        })


    } else if(words.length == 0){
        location.reload()
    }
})



$("div#pendingid").click(() => {

    fetch("/getpendingntotal", {
        method: "POST",
        body: JSON.stringify({
            'whatwewant' : "Pending"
        })
    }).then(res => res.json()).then((data) => {

        

        $("div.all__orders").empty()

        console.log(data.msg.length)
            
        for (var i = 0; i < data.msg.length; i++) {
                

                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]



                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

            }
    })
})

$("div#totalid").click(() => {
    fetch("/getpendingntotal", {
        method: "POST",
        body: JSON.stringify({
            'whatwewant' : "all"
        })
    }).then(res => res.json()).then((data) => {

        

        $("div.all__orders").empty()

        console.log(data.msg.length)
            
        for (var i = 0; i < data.msg.length; i++) {
                

                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]



                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

            }
    })
})

$("div#completedid").click(() => {
    fetch("/getpendingntotal", {
        method: "POST",
        body: JSON.stringify({
            'whatwewant' : "Completed"
        })
    }).then(res => res.json()).then((data) => {

        

        $("div.all__orders").empty()

        console.log(data.msg.length)
            
        for (var i = 0; i < data.msg.length; i++) {
                

                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]



                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

        }
    })
})



$("i#orderbyname").click(() => {
    fetch("/orderbyname", {
        method: "POST",
        body: JSON.stringify({
            "words" : "orderbyname"
        })
    }).then(res => res.json()).then((data) => {
        $("div.all__customers").empty()
        $("i#orderbyname").attr("class", "fas fa-caret-up")
        for (var i = 0; i < data.msg.length; i++)  {
            str = '<div class="customers__infos">\
                <div><p>'+data.msg[i][0]+'</p></div>\
                <div><p><a href="#"></a>'+data.msg[i][1]+'('+data.msg[i][2]+') </p></div>\
                <div><p>'+data.msg[i][3]+'</p></div>\
                <div><p>'+data.msg[i][4]+'</p></div>\
            </div>'
            $("div.all__customers").append(str)
        }
    })
})

$("i#orderinitially").click(() => {
    
    fetch("/orderbyname", {
        method: "POST",
        body: JSON.stringify({
            "words" : "orderbyinitially"
        })
    }).then(res => res.json()).then((data) => {
        $("div.all__customers").empty()
        $("i#orderbyname").attr("class", "fas fa-caret-down")
        for (var i = 0; i < data.msg.length; i++)  {
            str = '<div class="customers__infos">\
                <div><p>'+data.msg[i][0]+'</p></div>\
                <div><p><a href="#"></a>'+data.msg[i][1]+'('+data.msg[i][2]+') </p></div>\
                <div><p>'+data.msg[i][3]+'</p></div>\
                <div><p>'+data.msg[i][4]+'</p></div>\
            </div>'
            $("div.all__customers").append(str)
        }
    })

})


$("i#orderbydate").click(() => {
    
    fetch("/orderbydate", {
        method: "POST",
        body: JSON.stringify({
            "words" : "orderbydate"
        })
    }).then(res => res.json()).then((data) => {
        

        $("div.all__orders").empty()
        $("i#orderbydate").attr("class", "fas fa-caret-up")


        $("i#orderbyinitially").attr("class", "fas fa-caret-down")
        $("i#orderbynameinorderstable").attr("class", "fas fa-caret-down")
            
        for (var i = 0; i < data.msg.length; i++) {
                

                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]



                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

        }


    })

})



$("i#orderbyinitially").click(() => {
    
    fetch("/orderbydate", {
        method: "POST",
        body: JSON.stringify({
            "words" : "orderbyinitially"
        })
    }).then(res => res.json()).then((data) => {
        

        $("div.all__orders").empty()
        $("i#orderbyinitially").attr("class", "fas fa-caret-up")
        $("i#orderbynameinorderstable").attr("class", "fas fa-caret-down")
        $("i#orderbydate").attr("class", "fas fa-caret-down")

        
            
        for (var i = 0; i < data.msg.length; i++) {
                

                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]



                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

        }


    })

})





$("i#orderbynameinorderstable").click(() => {
    
    fetch("/orderbydate", {
        method: "POST",
        body: JSON.stringify({
            "words" : "orderbynameinorderstable"
        })
    }).then(res => res.json()).then((data) => {
        

        $("div.all__orders").empty()
        $("i#orderbynameinorderstable").attr("class", "fas fa-caret-up")
        $("i#orderbyinitially").attr("class", "fas fa-caret-down")
        $("i#orderbydate").attr("class", "fas fa-caret-down")


            
        for (var i = 0; i < data.msg.length; i++) {
                

                orderid = data.msg[i][0]
                orderqty = data.msg[i][1]
                ordername = data.msg[i][2]
                date = data.msg[i][3]
                status = data.msg[i][4]
                orderedby = data.msg[i][5]



                str = '<div class="orders__infos">\
                    <div><p>'+ orderid +'</p></div>\
                    <div><p>'+ordername+' - ('+orderqty+') </p></div>\
                    <div><p> '+date+' </p></div>\
                    <div><p>'+status+'</p></div>\
                    <div><p>'+orderedby+'</p></div>\
                </div>'

                $("div.all__orders").append(str)

        }


    })

})


$("p.namewithgender").click(() => {

    


})















