$(document).ready(function(){

    var URL = $(location).attr('href');

    var values = URL.substr(URL.lastIndexOf("?") + 1);

    var sortVar= values.substr(values.indexOf("&") + 1);

    var sortVarValue= values.substr(values.lastIndexOf("=") + 1);
    
     var y = GetURLParameter("page");

    var pathname = window.location.pathname;

    var lastVal = pathname.substring(pathname.lastIndexOf('/') + 1);

    var cw = $('body').outerWidth();


    if( $('body').hasClass('loginPage') ){

         $.get('index.php',function(data){

            $('.loginPage').animate({

                'opacity' : '100'

            },800, function() {

                 $('.preloaderContainer').fadeOut(500);

                 $('.loginHolder').removeClass('blurred'); 

            });
        });

    }

    $('.backBtn').click(function(){

        $('.loginPage').animate({

                'left' : cw + 'px',

                'opacity':0.3

        }, 400, function() {

            window.location='../index.php#4';

        });
    });
     

    if(sortVarValue==1){

        $('#fdate').removeClass('dsable');
        $('#sdate').removeClass('dsable');
        $('.dateForm2').prop("disabled", false);

    }else if(sortVarValue==2){

        $('#authPanel').removeClass('dsable');
        $('#authtext').prop("disabled", false);

    }else if(sortVarValue==3){

        $('#catPanel').addClass('dsable');
        $('#catOption').prop("disabled", false);

    }

   

	$("#createNews").click(function(){
		window.location="../news/create_news.php";
	});

	$("#sortOption").change(function () {

        var selected=$(this).val();
        
        if(selected==1){

        	/*$('#fdate').removeClass('dsable');
        	$('#sdate').removeClass('dsable');
        	$('.dateForm2').prop("disabled", false);

        	$('#authPanel').addClass('dsable');
        	$('#authtext').prop("disabled", true);
            $('#catPanel').addClass('dsable');
            $('#catOption').prop("disabled", true);*/

            if ($(".author")[0]){
              
                $(".categoryOption2").animate({

                    'opacity':0,
                    'marginTop':'-35px'

                },200,function(){

                    $(".categoryOption2").hide();

                    $( ".author" ).animate({

                        'opacity':0,
                        'marginTop':'-70px'

                    },200,function(){

                        $(".author").hide();

                        $(".allArticles-dateForm").show();

                         $( ".allArticles-dateForm" ).animate({

                            'opacity':1,
                            'marginTop':0

                         },500);
                    });

                  });

            }else{

                $(".categoryOption2").animate({

                    'opacity':0,
                    'marginTop':'-35px'

                },200,function(){

                    $(".categoryOption2").hide();

                        $(".author").hide();

                        $(".allArticles-dateForm").show();

                         $( ".allArticles-dateForm" ).animate({

                            'opacity':1,
                            'marginTop':0

                         },500);

                  });


            }

           

        }else if (selected==2){

        	/*$('#authPanel').removeClass('dsable');
        	$('#authtext').prop("disabled", false);

        	$('#fdate').addClass('dsable');
        	$('#sdate').addClass('dsable');
        	$('.dateForm2').prop("disabled", true);
            $('#catPanel').addClass('dsable');
            $('#catOption').prop("disabled", true);*/

           $( ".categoryOption2" ).animate({

                'opacity':0,
                'marginTop':'-35px'

             },200,function(){

                $(".categoryOption2").hide();

                $( ".allArticles-dateForm" ).animate({

                    'opacity':0,
                    'marginTop':'-35px'

                },200,function(){

                    $(".allArticles-dateForm").hide();
                    
                    $(".author").show();

                     $( ".author" ).animate({

                        'opacity':1,
                        'marginTop':'-38px'

                     },500);

                });

            });

        }else if (selected==3){

           /* $('#authPanel').addClass('dsable');
            $('#authtext').prop("disabled", true);

            $('#fdate').addClass('dsable');
            $('#sdate').addClass('dsable');
            $('.dateForm2').prop("disabled", true);
            $('#catPanel').addClass('dsable');
            $('#catOption').prop("disabled", false);*/

            if ($(".author")[0]){

                $( ".allArticles-dateForm" ).animate({

                    'opacity':0,
                    'marginTop':'-35px'

                },200,function(){

                    $(".allArticles-dateForm").hide();

                    $( ".author" ).animate({

                        'opacity':0,
                        'marginTop':'-70px'

                    },200,function(){

                        $(".author").hide();

                        $(".categoryOption2").show();

                        $( ".categoryOption2" ).animate({

                            'opacity':1,
                            'marginTop':0

                        },500);

                    });

                });

            }else{

                $( ".allArticles-dateForm" ).animate({

                    'opacity':0,
                    'marginTop':'-35px'

                },200,function(){

                    $(".allArticles-dateForm").hide();

                    $(".author").hide();

                    $(".categoryOption2").show();

                    $( ".categoryOption2" ).animate({

                        'opacity':1,
                        'marginTop':0

                    },500);

                });

            }

        }else{


            if ($(".author")[0]){

                $( ".author" ).animate({

                    'opacity':0,
                    'marginTop':'-70px'

                },200,function(){

                    $(".author").hide();

                });

            }

        	 $( ".allArticles-dateForm" ).animate({

                'opacity':0,
                'marginTop':'-39px'

             },300,function(){

                 $( ".allArticles-dateForm" ).hide();

             });

            $( ".categoryOption2" ).animate({

                'opacity':0,
                'marginTop':'-35px'

            },300,function(){


                $( ".categoryOption2" ).hide();

            });

        }

    });

    $(document).on('change','input[name="check_all"]',function() {

    	$('.allOption').prop("checked" , this.checked);

	});

    var row=$('#existing').val();
    
    var cell=row;
    
    $("#addAuthor").click(function(){
       
        row++;
        cell++;
        createInput(row,cell);

    });


    function createInput(e,x){

        var old_id=e-1;
        var old_cell=x-1;

        var new_row = $("<tr>", {'id':'row'+e});
        $(new_row).insertAfter('#row'+old_id);

        var new_cell = $("<td>",{'id':'cell'+x});
        $(new_cell).appendTo('#row'+e);

        x++;
        old_cell=x-1;

        var new_cell = $("<td>",{'id':'cell'+x});
        $(new_cell).insertAfter('#cell'+old_cell);

        var new_text = $("<select>",{'name':'add_author[]','class':'autoAuthor','id':'autoAuthor'+x});
        var x1=x;

          $.ajax({url: 'autocomplete.php',
                
                 success: function(output) {
                   
                 $('#autoAuthor'+x1).append(output);
               
                },

              error: function (xhr, ajaxOptions, thrownError) {

                alert(xhr.status + " "+ thrownError);

            }});

        $(new_text).appendTo('#cell'+x);


         x++;
        old_cell=x-1;

        var new_cell = $("<td>",{'id':'cell'+x});
        $(new_cell).insertAfter('#cell'+old_cell);
    
        var new_text = $("<input>",{'type':'checkbox','name':'edit_flag[]','value':'1'});
        $(new_text).appendTo('#cell'+x);

        x++;
        old_cell=x-1;

        var new_cell = $("<td>",{'id':'cell'+x});
        $(new_cell).insertAfter('#cell'+old_cell);
    
        var new_text = $("<img>",{'src':'img/delete-icon.png','id':'del'+e,'class':'delimg'});
        $(new_text).appendTo('#cell'+x);

        cell=x;

    }

   
    $("#fields").on('click','.delimg', function () {
        
        var row_id=$(this).attr("id");
        row_id=row_id.substring(3);
        
        row--;
        cell--;

        $("#row"+row_id).remove();

    });

    function GetURLParameter(sParam){

        var sPageURL = window.location.search.substring(1);

        var sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++){

            var sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] == sParam){

                return sParameterName[1];

            }

        }

    }

    var pageNum = "1";

    var obj;

    var obj2;

    var obj3;
    
    var IDs = [];

    var IDsFiltered = [];

    var start;

    var limit;

    var objArray = [];

    pageNum = GetURLParameter('page');

    if(pageNum==""){

        pageNum = "1";

    }

    var hash = location.hash;

    if( lastVal=='page-4.php' || y>0 || hash=='#4' ){
    
        setInterval(function(){

            start = $('.index-start').val();

            limit = $('.index-limit').val();

            $.ajax({

                url:'backend/get_new_article.php?start='+start+'&limit='+limit,

                success:function(data){

                    if(data){

                         obj = JSON.parse(data);

                       if(obj['type']=='add'){

                             $.ajax({

                                 url:'backend/get_author.php?articleId='+obj['article_id'],

                                 success:function(data2){

                                    if(data2){

                                        obj2 = JSON.parse(data2);

                                        row = $("<li class='class-"+obj['article_id']+"'></li>");
                               
                                        col1 = $("<div class='newUpdatesTitle'><a href='#''>"+obj['title']+"</a></div>");

                                        //col2 = $("<td colspan='2'><strong>Authors:</strong> <i>"+obj2['name']+"</i></td>");
                                   
                                        if(obj['content'].length > 500){

                                            col3 = $("<div class='newUpdatesText'>"+obj['content'].replace(/(<([^>]+)>)/ig,"").substring(0,500)+"...<a href='news/view_full_article.php?id="+obj['article_id']+"&page="+pageNum+"' class='seeMore'>See more </a></div>");
                                      
                                        }else{

                                            col3 = $("<div class='newUpdatesText'>"+obj['content'].replace(/(<([^>]+)>)/ig,"")+"</div>");
                                      
                                        }

                                        row.append(col1,col3).prependTo(".newAndUpdatesList");

                                        var rowCount = $('.newAndUpdatesList li').length;

                                        if(rowCount>3){

                                            $('.newAndUpdatesList li:last').remove();

                                        }
                                     }
                                 }

                             });

                        }/*else if(obj['type']=='subtract'){

                            $("#index-table").find("tr").each(function(){ 

                                var x = $(this).attr('class');

                                IDs.push(x);

                            });


                            console.log(IDs);
                            
                            var difference = [];

                            $.each(obj, function(i,n) {

                                objArray.push(n);

                            });
                            
                            $.each(IDs, function(i,n) {

                                var updatedString = n.replace("class-", "");

                                IDsFiltered.push(updatedString);

                            });
                          
                            jQuery.grep(IDsFiltered, function(el) {

                                    if (jQuery.inArray(el,objArray) == -1) 

                                        difference.push(el);

                            });

                            console.log(difference);

                            $.each(difference, function(i,n) {

                                 $('.class-'+n).remove();

                            });

                            $.ajax({

                                url:'backend/get_new_article.php?start='+start+'&limit='+limit+'&update=1',

                                success:function(data3){

                                     obj3 = JSON.parse(data3);

                                     console.log(obj3);
                                }

                            });

                        }*/
                    }
                }
            });
            
        },2000);
 
    }

    if(lastVal=='page-4.php'&&y>0){

        

        var maxHeight = $(document).height();

        $(window).scrollTop(maxHeight);
    
    }


    $('.loginBtn').click(function(){

                $('.preloaderContainer').fadeIn(500);

                $('.page-4-Contents').addClass('animated fadeOutLeft');

                $('.page-4-Contents').animate({

                    'left' : '-' + cw + 'px'

                }, 400, function() {

                     window.location='news/index.php';

                });

       
    });

    if(GetURLParameter('sort')){

        var sort = GetURLParameter('sort');


        if(sort==1){

            $( ".allArticles-dateForm" ).show();

            $( ".allArticles-dateForm" ).css({

                'opacity':1,
                'margin-top':'0px'

            });

        }else if(sort==2){

            $( ".author" ).show();

            $( ".author" ).css({

                'opacity':1,
                'margin-top':'-38px'

            });

        }else if(sort==3){

            $( ".categoryOption2" ).show();

            $( ".categoryOption2" ).css({

                'opacity':1,
                'margin-top':'0px'

            });

        } 
    }
});