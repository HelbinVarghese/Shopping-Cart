var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"I Phonex",
      category:"Mobile",
      description:"Meet the iPhone X - the device that's so smart that it responds to a tap,",
      image:"https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy"
    },
    {
      name:"OnePlus Nord 2 5G",
      category:"Mobile",
      description:"OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)",
      image:"https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg"

    },
    {
      name:"Poco X3 PRO",
      category:"Mobile",
      description:"The Xiaomi Poco X3 Pro in metal bronze color is a Dual SIM smartphone with 128GB of storage and 6GB of RAM, 6.67-inch IPS LCD screen at 120Hz, rear ...",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5nhT74j_GeaDz6KmvLCPiz5HQ-VTpllRvQ&usqp=CAU"
    },

    {
      name:"Samsung Galaxy A52",
      category:"Mobile",
      description:"Samsung Galaxy A52 fits within a mid-range budget loaded with a wide range of features. It assures smooth performance with sufficient RAM and a powerful processing unit.",
      image:"https://www.zdnet.com/a/img/resize/b732624799e3024c8048af816ee736c09363eaa3/2021/04/30/cdd8d93e-65de-4e15-b390-177821de4cd4/samsung-galaxy-a52-5g-header.jpg?auto=webp&width=768"
    }

  ]
  res.render('index', {products,admin:false});
  
});

module.exports = router ;
