// script.js

// ===============================================================
//                             頁首
// ===============================================================

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }








// ------------------點擊照片放大縮小功能----------------------

var images1 = document.querySelectorAll('.img-clickable1');
var images2 = document.querySelectorAll('.img-clickable2');

images1.forEach(function(image) {
        image.addEventListener('click', function() {
            // 獲取點擊的圖片的大圖片 URL
            var imgUrl = image.getAttribute('data-img');
            // 獲取背景遮罩和放大圖片元素
            var overlay = document.getElementById("overlay1");
            var zoomedImage = document.getElementById("zoomedImage1");
            var zoomedImg = document.getElementById("zoomedImg1");

            // 切換背景遮罩和放大圖片的顯示狀態
            overlay.style.display = "block";
            zoomedImage.style.display = "block";

            // 設置放大的圖片的 src
            zoomedImg.src = imgUrl;

            // 添加點擊事件處理程序，以在用戶點擊放大的圖片時關閉它
            zoomedImage.addEventListener('click', function() {
                overlay.style.display = "none";
                zoomedImage.style.display = "none";
            });
        });
    });

// 對第二組照片添加事件監聽器
    images2.forEach(function(image) {
        image.addEventListener('click', function() {
            // 獲取點擊的圖片的大圖片 URL
            var imgUrl = image.getAttribute('data-img');
            // 獲取背景遮罩和放大圖片元素
            var overlay = document.getElementById("overlay2");
            var zoomedImage = document.getElementById("zoomedImage2");
            var zoomedImg = document.getElementById("zoomedImg2");

            // 切換背景遮罩和放大圖片的顯示狀態
            overlay.style.display = "block";
            zoomedImage.style.display = "block";

            // 設置放大的圖片的 src
            zoomedImg.src = imgUrl;

            // 添加點擊事件處理程序，以在用戶點擊放大的圖片時關閉它
            zoomedImage.addEventListener('click', function() {
                overlay.style.display = "none";
                zoomedImage.style.display = "none";
            });
        });
    });