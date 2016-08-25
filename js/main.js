          
          // dropdown select option for icons weight
          
            var prevWeight = "book";
            var weightToggle = document.getElementById('weight_toggle');
            var col_xs_6 = document.getElementsByClassName('.col-xs-6');
            var solidToggle = document.getElementsByClassName('.toggle_solid');


            $('select').on('change', function() {

              var weight;
              var val = $(this).val();


              if(val == 0) {
                weight = "thin";
                $(".toggle_regular").show();
                $(".toggle_solid").hide();
              }

              if(val == 1) {
                weight = "light";
                $(".toggle_regular").show();
                $(".toggle_solid").hide();
              }
              if(val == 2) {
                weight = "book";
                $(".toggle_regular").show();
                $(".toggle_solid").hide();
              }
              if(val == 3) {
                weight = "bold";
                $(".toggle_regular").show();
                $(".toggle_solid").hide();
              }
              if(val == 4) {
                weight = "black";
                $(".toggle_regular").show();
                $(".toggle_solid").hide();
              }
              if(val == 5) {
                weight = "ultra";
                $(".toggle_regular").show();
                $(".toggle_solid").hide();
              }
              if(val == 6) {
                $(".toggle_solid").show();
                $(".toggle_regular").hide();
              }
              console.log(weight);
            
              $('.col-xs-6 img').each(function() {
                var text = $(this).attr("src");
                // console.log(text);
                  text = text.replace(prevWeight, weight);
                  $(this).attr("src", text);
              });

              $('.col-xs-6 div').each(function() {
                var text = $(this).attr("class");
                // console.log(text);
                  text = text.replace(prevWeight, weight);
                  $(this).attr("class", text);
              });

              $('.col-xs-6 p').each(function() {
                var text = $(this).text();
                // console.log(text);
                  text = text.replace(prevWeight, weight);
                  $(this).text(text);
              });


              if(val == 0) {
                prevWeight = "thin";
              }
              if(val == 1) {
                prevWeight = "light";
              }
              if(val == 2) {
                prevWeight = "book";
              }
              if(val == 3) {
                prevWeight = "bold";
              }
              if(val == 4) {
                prevWeight = "black";
              }
              if(val == 5) {
                prevWeight = "ultra";
              } 
              // console.log(removeClassName);
              // console.log(addClassName)

            });






// make active link bold

  function highlightCurrentLink() {
      var arr = document.getElementsByTagName("a");
      for (var i = 0, len = arr.length; i < len; ++i) {
          if (arr[i].href == window.location.href) {
              arr[i].style.fontWeight = "bold";
              // break;
          }
      }
  }
  highlightCurrentLink();

