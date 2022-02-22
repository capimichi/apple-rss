
jQuery(function(){

   var articles = [];
   jQuery(".main-list article").each(function(){
      var article = jQuery(this);
      var title = article.find('h2').html().trim();
      articles.push({
         "title": title  
      });
   });
});
