'use strict'
// All the necessary dom elements that I use in the project
const quote = document.getElementById('quote') ,
      author = document.getElementById('author') ,
      getNewQuote = document.getElementById('getNewQuote'),
      url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1' ,
      colors = ['#c0392b','#d35400','#f39c12','#7f8c8d','#2c3e50','#9b59b6','#3498db','#27ae60'] ,
      tweet = document.getElementById('tweet');

//this line is necassary so that you dont get the same quote every time
$.ajaxSetup({ cache: false });

//the initial request
$.ajax({url:url ,
        success : function(data){
                  data  = JSON.parse(JSON.stringify(data)) ;
                  author.innerHTML = '--' +data[0].title ;
                  quote.innerHTML = data[0].content ;
                  $("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800);
                  // change the a tag href attribute according to the quote
                  let quoteWithoutSpaces = data[0].content.replace(/\s/g, '%20') , authorWithoutSpaces = data[0].title.replace(/\s/g, '%20') ;
                  $('#tweet').attr('href' , 'https://twitter.com/intent/tweet?text=' + quoteWithoutSpaces + '%20%20by%20%20' + authorWithoutSpaces) ;
        }
       })

//getting different quote
getNewQuote.onclick = function(){
  $.ajax({url:url ,
        success : function(data){
                  data  = JSON.parse(JSON.stringify(data)) ;
                  author.innerHTML = '--' +data[0].title ;
                  quote.innerHTML = data[0].content ;
                  $("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800);
                  // change the a tag href attribute according to the quote
                  let quoteWithoutSpaces = data[0].content.replace(/\s/g, '%20') , authorWithoutSpaces = data[0].title.replace(/\s/g, '%20') ;
                  $('#tweet').attr('href' , 'https://twitter.com/intent/tweet?text=' + quoteWithoutSpaces + '%20%20by%20%20' + authorWithoutSpaces) ;
        }
       })
};
