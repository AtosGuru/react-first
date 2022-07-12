$(document).ready(function () {
  var scr1 = $("#tab_1");
  var scr2 = $("#tab_2");
  var scr3 = $("#tab_3");
  var scr4 = $("#tab_4");

  //hidden other sections
  $(scr2).hide();
  $(scr3).hide();
  $(scr4).hide();

  //product select
  $(".product-img").click(function () {
    $(".product-img").removeClass("active");
    $(this).addClass("active");

    window.selectedCollection = $(this).attr("product-id");
    // console.log(window.selectedCollection);
  });

  //scr1 next btn
  $("#next_1").click(function () {
    $(scr1).hide();
    $(scr2).fadeIn();
    window.scrHistory.push(scr1);
    // window.prevScreen = scr1;

    var productList =
      window.products[window.selectedCollection - 1].productList;
    // console.log(productList);

    var name_option =
      "<option value='0' selected disabled>First select product name, please</option>";

    for (var i = 0; i < productList.length; i++) {
      var item = productList[i];
      // console.log(item);
      name_option +=
        '<option value="' + item.id + '">' + item.name + "</option>";
    }

    $("#product_name").html(name_option);

    //first dropdown change
    $("#product_name").change(function () {
      // console.log($(this).val());
      productId = $(this).val();
      //change color, price, quantity
      var product = productList[productId - 1];

      //units
      $("#units").val(product.units);

      //price
      $("#price").val(product.price);

      //color
      var color_option =
        "<option value='0' selected disabled>Select color, please</option>";
      for (var i = 0; i < product.color.length; i++) {
        var item = product.color[i];
        // console.log(item);
        color_option += '<option value="' + item + '">' + item + "</option>";
      }
      $("#color").html(color_option);
    });
  });

  $("#next_2").click(function () {
    console.log($("#product_name").val());
    if ($("#product_name").val() == null) {
      alert("Select product name, please");
    } else if ($("#color").val() == null) {
      alert("Select color, please");
    } else {
      var productData = {
        name: window.products[window.selectedCollection - 1].productList[
          $("#product_name").val() - 1
        ].name,
        color: $("#color").val(),
        units: $("#units").val(),
        price: $("#price").val(),
        quantity: $("#quantity").val(),
      };

      window.productInfo.push(productData);

      scr2.hide();
      scr3.fadeIn();
      window.scrHistory.push(scr2);
      // window.prevScreen = scr2;
    }
  });

  //back btn
  $("#back_btn").click(function () {
    if (window.scrHistory == "") {
    } else {
      scr1.hide();
      scr2.hide();
      scr3.hide();
      scr4.hide();

      $(window.scrHistory[window.scrHistory.length - 1]).fadeIn();
      window.scrHistory.pop();
    }
  });

  $("#next_3").click(function () {
    window.contactInfo = {
      company_name: $("#company_name").val(),
      contact_name: $("#contact_name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      address: $("#address").val(),
    };

    var tbodyData = "";
    for (var i = 0; i < window.productInfo.length; i++) {
      var item = window.productInfo[i];
      // console.log(item);
      tbodyData +=
        '<tr><td>"' + item.name + '"</td><td>"' + item.quantity + '"';
    }
    $("#tbody").html(tbodyData);

    scr3.hide();
    scr4.fadeIn();
    window.scrHistory.push(scr3);
    // window.prevScreen = scr3;
  });

  //select more
  $("#more_btn").click(function () {
    if (confirm("Are you sure to confirm you selected Info?")) {
      if ($("#product_name").val() == "0") {
        alert("Select product name, please");
      } else {
        var productData = {
          name: window.products[window.selectedCollection].productList[
            $("#product_name").val() - 1
          ].name,
          color: $("#color").val(),
          units: $("#units").val(),
          price: $("#price").val(),
          quantity: $("#quantity").val(),
        };

        window.productInfo.push(productData);

        $("#product_name").val("");
        $("#color").val("");
        $("#units").val("");
        $("#price").val("");
        scr2.hide();
        scr1.fadeIn();
        window.scrHistory.push(scr2);
        // window.prevScreen = scr2;
      }
    } else {
      $("#product_name").val("");
      $("#color").val("");
      $("#units").val("");
      $("#price").val("");
      scr2.hide();
      scr1.fadeIn();
      window.scrHistory.push(scr2);
      // window.prevScreen = scr2;
    }
  });

  //refresh btn
  $("#refresh_btn").click(function () {
    if (
      confirm(
        "Are you sure to refresh your info? You selected info all removed."
      )
    ) {
      window.location.href = "./index.html";
    } else {
    }
  });

  //home
  $("#next_4").click(function () {
    $("#product_name").val("");
    $("#color").val("");
    $("#units").val("");
    $("#price").val("");
    scr4.hide();
    scr1.fadeIn();
    window.scrHistory.push(scr4);
    // window.prevScreen = scr4;
  });
  $("#next_5").click(function () {
    $("#product_name").val("");
    $("#color").val("");
    $("#units").val("");
    $("#price").val("");
    scr3.hide();
    scr1.fadeIn();
    window.srcHistory.push(scr3);
    // window.prevScreen = scr3;
  });
});
