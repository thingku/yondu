(function($) {

    $.fn.mainMenu = function() {

        $('body').click(function() {

            $('.mainMenu').animate({

                'right' : '-260px'

            },150);

            $('body').removeClass('menuToggled');

        });

        $('.mainMenu').click(function(e) {

            e.stopPropagation();

        } );

        $('.menuToggler').click(function(e) {

            e.stopPropagation();

            $('body').toggleClass('menuToggled');

            if ( $('body').hasClass('menuToggled') ) {
            
                $('.mainMenu').animate({

                    'right' : '0px'

                },150);


            } else {

                $('.mainMenu').animate({

                    'right' : '-260px'

                },150);

            }

        });

        $('.withChildren').click(function() {

            $(this).toggleClass('activeMenu');

            if ( $('.withChildren').hasClass('activeMenu') ) {

                $('.inactiveCaret').css({

                    'display' : 'none'

                });

                $('.activeCaret').css({

                    'display' : 'block'

                });                

            } else {

                $('.activeCaret').css({

                    'display' : 'none'

                });

                $('.inactiveCaret').css({

                    'display' : 'block'

                });                

            }

        });   

        $('.menuList > li').each(function() {

            var cw = $('body').outerWidth();

            $(this).click(function() {

                var cc = $(this).children('a').attr('class');

                var rc = $('.pageContentHolder').attr('class').split(' ')[0];

                var aa;

                var oc;

                switch (cc) {

                    case 'page-1':

                        if ( rc == 'page-1-Contents' ) {

                        } else if ( rc == 'page-2-Contents') {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-2-active').addClass('page-1-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-1-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-1-active');

                                            $().page1(); 

                                            window.location.hash = "1";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');  

                                            $(document).attr('title', 'YONDU');                                          

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-3-Contents') {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-3-active').addClass('page-1-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-1-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-1-active');

                                            $().page1(); 

                                            window.location.hash = "1";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');

                                            $(document).attr('title', 'YONDU');                                             

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-4-Contents') {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-4-active').addClass('page-1-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-1-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-1-active');

                                            $().page1(); 

                                            window.location.hash = "1";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'YONDU');                                          

                                        });

                                    });                      
                                
                            } );                            

                        } else if ( rc == 'page-5-Contents') {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-5-active').addClass('page-1-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-1-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-1-active');

                                            $().page1(); 

                                            window.location.hash = "1";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'YONDU');                                          

                                        });

                                    });                      
                                
                            } );

                        }     

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(this).closest('li').addClass('selectedMenuList');

                    break;  

                    case 'page-2':
                    
                        if ( rc == 'page-1-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-1-active').addClass('page-2-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-2-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-2-active');

                                            $().page1(); 

                                            window.location.hash = "2";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'Giving life to ideas - YONDU');                                         

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-2-Contents' ) {


                        } else if ( rc == 'page-3-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-3-active').addClass('page-2-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-2-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-2-active'); 

                                            window.location.hash = "2";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'Giving life to ideas - YONDU');                                         

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-4-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : +cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-4-active').addClass('page-2-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-2-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-2-active'); 

                                            window.location.hash = "2";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');     

                                            $(document).attr('title', 'Giving life to ideas - YONDU');                                       

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-5-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-5-active').addClass('page-2-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-2-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-2-active'); 

                                            window.location.hash = "2";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');      

                                            $(document).attr('title', 'Giving life to ideas - YONDU');                                      

                                        });

                                    });                      
                                
                            } );

                        }

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(this).closest('li').addClass('selectedMenuList');                        

                    break;

                    case 'page-3':
                    
                        if ( rc == 'page-1-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-1-active').addClass('page-3-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-3-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-3-active'); 

                                            window.location.hash = "3";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');      

                                            $(document).attr('title', 'Products and Services - YONDU');                                      

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-2-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-2-active').addClass('page-3-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-3-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-3-active'); 

                                            window.location.hash = "3";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');    

                                            $(document).attr('title', 'Products and Services - YONDU');                                         

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-3-Contents' ) {


                        } else if ( rc == 'page-4-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-4-active').addClass('page-3-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-3-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-3-active'); 

                                            window.location.hash = "3";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'Products and Services - YONDU');                                          

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-5-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-5-active').addClass('page-3-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-3-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-3-active'); 

                                            window.location.hash = "3";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');      

                                            $(document).attr('title', 'Products and Services - YONDU');                                       

                                        });

                                    });                      
                                
                            } );

                        }

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(this).closest('li').addClass('selectedMenuList');                        

                    break;

                    case 'page-4':
                    
                        if ( rc == 'page-1-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-1-active').addClass('page-4-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-4-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-4-active'); 

                                            window.location.hash = "4";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'About Us - YONDU');                                          

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-2-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-2-active').addClass('page-4-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-4-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-4-active'); 

                                            window.location.hash = "4";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');  

                                            $(document).attr('title', 'About Us - YONDU');                                             

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-3-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-' + cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-3-active').addClass('page-4-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-4-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-4-active'); 

                                            window.location.hash = "4";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');  

                                            $(document).attr('title', 'About Us - YONDU');                                             

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-4-Contents' ) {



                        } else if ( rc == 'page-5-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-5-active').addClass('page-4-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-4-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-4-active'); 

                                            window.location.hash = "4";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');  

                                            $(document).attr('title', 'About Us - YONDU');                                             

                                        });

                                    });                      
                                
                            } );

                        }

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(this).closest('li').addClass('selectedMenuList');                        

                    break; 

                    case 'page-5':
                    
                        if ( rc == 'page-1-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-1-active').addClass('page-5-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-5-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-5-active'); 

                                            window.location.hash = "5";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');  

                                            $(document).attr('title', 'Get in Touch - YONDU');                                             

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-2-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-2-active').addClass('page-5-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-5-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-5-active'); 

                                            window.location.hash = "5";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'Get in Touch - YONDU');                                            

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-3-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-' + cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-3-active').addClass('page-5-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-5-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-5-active'); 

                                            window.location.hash = "5";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');   

                                            $(document).attr('title', 'Get in Touch - YONDU');                                          

                                        });

                                    });                      
                                
                            } );

                        } else if ( rc == 'page-4-Contents' ) {

                            $('.preloaderContainer').fadeIn(500);

                            $('.'+rc).addClass('animated fadeOutLeft');

                            $('.'+rc).animate({

                                'left' : '-'+cw + 'px'

                            }, 400, function() {

                                $(this).remove();

                                $('body').removeClass('page-4-active').addClass('page-5-active blurred');

                                    $.get(cc+'.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-5-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-5-active'); 

                                            window.location.hash = "5";

                                            $('.mainMenu').animate({

                                                'right' : '-260px'

                                            },150);

                                            $('body').removeClass('menuToggled');    

                                            $(document).attr('title', 'Get in Touch - YONDU');                                         

                                        });

                                    });                      
                                
                            } );


                        } else if ( rc == 'page-5-Contents' ) {


                        }

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(this).closest('li').addClass('selectedMenuList');                        

                    break;                                                           

                }

            });

        });     

    }

    $.fn.page1 = function() {

            setTimeout(function() {

                $('.bubble1').fadeIn(400);

            },2000);

            setTimeout(function() {

                $('.bubble2').fadeIn(400);

            },2200);  

            setTimeout(function() {

                $('.bubble3').fadeIn(400);

            },2400);  

            setTimeout(function() {

                $('.bubble4').fadeIn(400);

            },2600);

            setTimeout(function() {

                $('.bubble5').fadeIn(400);

            },2800); 

            setTimeout(function() {

                $('.dot1').fadeIn(400);

            },3000); 

            setTimeout(function() {

                $('.dot2').fadeIn(400);

            },3200); 

            setTimeout(function() {

                $('.dot3').fadeIn(400);


            },3400);

            setTimeout(function() {

                $('.bubbleList > li').fadeOut(400);
                
            },4000);             

            setTimeout(function() {

                $('.ideaHolder').fadeIn(400);

                $('.secondBackGround').fadeIn(400);

                $('.page-1-textDetails').fadeIn(400);

            },4500);                                                                                        

    }

    $.fn.page2 = function() {

        $('.toBottomContent').click(function() {

            var x = $('.topTextDetailsHolder3').offset();

            $('html,body').animate({

                'scrollTop' : x.top

            },800);

            $('.bigPlantBackGround').animate({

                            'height' : '973px'

            },1000, function() {

                setTimeout(function() {

                    $('.plant1').fadeIn(400);

                },200);

                setTimeout(function() {

                    $('.plant2').fadeIn(400);

                },400);

                setTimeout(function() {

                    $('.plant3').fadeIn(400);

                },600);

                setTimeout(function() {

                    $('.plant4').fadeIn(400);

                },800);

                setTimeout(function() {

                    $('.plant5').fadeIn(400);

                },1000);

                setTimeout(function() {

                    $('.plant6').fadeIn(400);

                },1200);                                                                                

            }); 

        });  

        var x = $('body').outerHeight() / 2;

        $(window).scroll(function() {

            if ( $(window).scrollTop() >= x ) {

                //setTimeout(function() {

                    $('.bigPlantBackGround').animate({

                                    'height' : '973px'

                    },1000, function() {

                        setTimeout(function() {

                            $('.plant1').fadeIn(400);

                        },200);

                        setTimeout(function() {

                            $('.plant2').fadeIn(400);

                        },400);

                        setTimeout(function() {

                            $('.plant3').fadeIn(400);

                        },600);

                        setTimeout(function() {

                            $('.plant4').fadeIn(400);

                        },800);

                        setTimeout(function() {

                            $('.plant5').fadeIn(400);

                        },1000);

                        setTimeout(function() {

                            $('.plant6').fadeIn(400);

                        },1200);                                                                                

                    });

                //},500);

            }

        }); 

    }

    $.fn.page3 = function() {

        $(window).scrollTop(0);

        setTimeout(function() {

            $('.thumbNail1').fadeIn(400);

        },2000);

        setTimeout(function() {

            $('.thumbNail2').fadeIn(400);

        },1000);

        $('.columnHolder').each(function() {

            $(this).click(function() {

                var cc = '.'+$(this).attr('class').split(' ')[1];

                setTimeout(function() {

                    $('.page-3-Contents').addClass('activeOverLay');
                    
                },500);                

                $('.overLay').css({

                    'display' : 'block'

                });

                $('.mainMenu').css({

                    'visibility' : 'hidden'

                });

                $(cc+'Details').fadeIn(500).animate({

                    'opacity' : '100'

                }, 1500);

            });

        });

        $('.thumbCloseHolder').click(function() {

            $('.thumb1Details,.thumb2Details,.thumb3Details,.thumb4Details').animate({

                'opacity' : '0'

            },500, function() {

                $('.thumb1Details,.thumb2Details,.thumb3Details,.thumb4Details').fadeOut();

                $('.overLay').css({

                    'display' : 'none'

                });

                $('.mainMenu').css({

                    'visibility' : 'visible'

                });                

                $('.page-3-Contents').removeClass('activeOverLay');

            });

        });

    }                

    $.fn.navigatePage = function() {

        var cw = $('body').outerWidth();

        var cp;

        var cookie;

        var currentClass;

        $(window).load(function() {

            var hash = location.hash;

            if(hash=="#2"){

                $.get('page-2.php',function(data){

                    $('#roller').append(data);

                    $('.page-2-Contents').animate({

                        'opacity' : '100'

                    },800, function() {

                        $('.preloaderContainer').fadeOut(1500);

                        $('body').removeClass('blurred'); 

                        $('body').addClass('page-2-active'); 

                        $().page1(); 

                        window.location.hash = "2";   

                        var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(x).closest('li').addClass('selectedMenuList');

                        $(document).attr('title', 'Giving life to ideas - YONDU');
         

                    });

                });

            } else  if (hash=="#3"){

                $.get('page-3.php',function(data){

                    $('#roller').append(data);

                    $('.page-3-Contents').animate({

                        'opacity' : '100'

                    },800, function() {

                        $('.preloaderContainer').fadeOut(1500);

                        $('body').removeClass('blurred'); 

                        $('body').addClass('page-3-active'); 

                        $().page1(); 

                        window.location.hash = "3"; 

                        var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(x).closest('li').addClass('selectedMenuList');   

                        $(document).attr('title', 'Products and Services - YONDU');                                 

                    });

                });

            } else  if (hash=="#4"){

                $.get('page-4.php',function(data){

                    $('#roller').append(data);

                    $('.page-4-Contents').animate({

                        'opacity' : '100'

                    },800, function() {

                        $('.preloaderContainer').fadeOut(1500);

                        $('body').removeClass('blurred'); 

                        $('body').addClass('page-4-active'); 

                        $().page1(); 

                        window.location.hash = "4";

                        var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(x).closest('li').addClass('selectedMenuList'); 

                        $(document).attr('title', 'About Us - YONDU');                                    

                    });

                });

            } else  if (hash=="#5"){

                $.get('page-5.php',function(data){

                    $('#roller').append(data);

                    $('.page-5-Contents').animate({

                        'opacity' : '100'

                    },800, function() {

                        $('.preloaderContainer').fadeOut(1500);

                        $('body').removeClass('blurred'); 

                        $('body').addClass('page-5-active'); 

                        $().page1(); 

                        window.location.hash = "5";

                        var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(x).closest('li').addClass('selectedMenuList');   

                        $(document).attr('title', 'Get in Touch - YONDU');                                 

                    });

                });

            } else {

                $.get('page-1.php',function(data){

                    $('#roller').append(data);

                    $('.page-1-Contents').animate({

                        'opacity' : '100'

                    },800, function() {

                        $('.preloaderContainer').fadeOut(1500);

                        $('body').removeClass('blurred'); 

                        $('body').addClass('page-1-active'); 

                        $().page1(); 

                         window.location.hash = "1";

                        var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                        $('.menuList > li').removeClass('selectedMenuList');

                        $(x).closest('li').addClass('selectedMenuList');  

                        $(document).attr('title', 'YONDU');                       
                      
                    });

                });
            }
        
        });

        $('.nextPage,.toNextPage').click(function() {

    
            if ( $('body').hasClass('page-1-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-1-Contents').addClass('animated fadeOutLeft');

                $('.page-1-Contents').animate({

                    'left' : '-' + cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-1-active').addClass('page-2-active blurred');

                        $.get('page-2.php',function(data){

                            $('#roller').append(data);

                             $('.page-2-Contents').animate({

                                'opacity' : '100'

                            },800, function() {

                                $('.preloaderContainer').fadeOut(500);

                                $('body').removeClass('blurred'); 

                                $('body').addClass('page-2-active'); 

                                window.location.hash = "2";

                                var x =  '.' + $('.page-2-Contents').attr('class').split(' ')[0].replace('-Contents','');

                                $('.menuList > li').removeClass('selectedMenuList');

                                $(x).closest('li').addClass('selectedMenuList');  

                                $(document).attr('title', 'Giving life to ideas - YONDU');                              

                            });

                        });                      
                    
                    

                } );
               
               
            } else if ( $('body').hasClass('page-2-active') ) {
                    
                $('.preloaderContainer').fadeIn(500);

                $('.page-2-Contents').addClass('animated fadeOutLeft');

                $('.page-2-Contents').animate({

                    'left' : '-' + cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-2-active').addClass('page-3-active blurred');

                    $.get('page-3.php',function(data){

                        $('#roller').append(data);

                         $('.page-3-Contents').animate({

                            'opacity' : '100'

                        },800, function() {

                            $('.preloaderContainer').fadeOut(1500);

                            $('body').removeClass('blurred'); 

                            $('body').addClass('page-3-active'); 

                            window.location.hash = "3";

                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                            $('.menuList > li').removeClass('selectedMenuList');

                            $(x).closest('li').addClass('selectedMenuList');   

                            $(document).attr('title', 'Products and Services - YONDU');                          

                            });

                    }); 


                } );

            } else if ( $('body').hasClass('page-3-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-3-Contents').addClass('animated fadeOutLeft');

                $('.page-3-Contents').animate({

                    'left' : '-' + cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-3-active').addClass('page-4-active blurred');

                    $.get('page-4.php',function(data){

                        $('#roller').append(data);

                         $('.page-4-Contents').animate({

                            'opacity' : '100'

                        },800, function() {

                            $('.preloaderContainer').fadeOut(1500);

                            $('body').removeClass('blurred'); 

                            $('body').addClass('page-4-active');                       

                            window.location.hash = "4";

                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                            $('.menuList > li').removeClass('selectedMenuList');

                            $(x).closest('li').addClass('selectedMenuList'); 

                            $(document).attr('title', 'About Us - YONDU');

                        });

                    }); 


                } );

            } else if ( $('body').hasClass('page-4-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-4-Contents').addClass('animated fadeOutLeft');

                $('.page-4-Contents').animate({

                    'left' : '-' + cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-4-active').addClass('page-5-active blurred');

                    $.get('page-5.php',function(data){

                        var pathname = window.location.pathname;

                        var lastVal = pathname.substring(pathname.lastIndexOf('/') + 1);

                        if(lastVal!='page-4.php'){

                            $('#roller').append(data);

                        }else{

                            window.location = 'index.php#5';

                        }

                         $('.page-5-Contents').animate({

                            'opacity' : '100'

                        },800, function() {

                            $('.preloaderContainer').fadeOut(1500);

                            $('body').removeClass('blurred'); 

                            $('body').addClass('page-5-active');                       

                              window.location.hash = "5";

                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                            $('.menuList > li').removeClass('selectedMenuList');

                            $(x).closest('li').addClass('selectedMenuList'); 

                            $(document).attr('title', 'Get in Touch - YONDU');

                        });

                    }); 


                } );

            }
         
        });  

        $('.previousPage').click(function() {

            if ( $('body').hasClass('page-2-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-2-Contents').addClass('animated fadeOutRight');

                $('.page-2-Contents').animate({

                    'left' :  cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-2-active').addClass('page-1-active blurred');

                        $.get('page-1.php',function(data){

                            $('#roller').append(data);

                             $('.page-1-Contents').animate({

                                'opacity' : '100'

                            },800, function() {

                                $('.preloaderContainer').fadeOut(500);

                                $('.bubble1,.bubble2,.bubble3,.bubble4,.bubble5,.ideaHolder,.secondBackGround,.page-1-textDetails').fadeIn(800);                                

                                $('body').removeClass('blurred'); 

                                $('body').addClass('page-1-active');

                                window.location.hash = "1";

                                var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                $('.menuList > li').removeClass('selectedMenuList');

                                $(x).closest('li').addClass('selectedMenuList'); 

                                $(document).attr('title', 'YONDU');                                 

                            });

                        });                      

                } );
               
            } else if ( $('body').hasClass('page-3-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-3-Contents').addClass('animated fadeOutRight');

                $('.page-3-Contents').animate({

                    'left' : cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-3-active').addClass('page-2-active blurred');

                    $.get('page-2.php',function(data){

                        $('#roller').append(data);

                         $('.page-2-Contents').animate({

                            'opacity' : '100'

                        },800, function() {                           

                            $('.preloaderContainer').fadeOut(1500);

                            /*
                                $('.bigPlantBackGround').css({

                                    'height' : '973px'

                                });

                                $('.plantDetails > li').fadeIn(400);

                            */

                            $('body').removeClass('blurred'); 

                            $('body').addClass('page-2-active');                   

                             window.location.hash = "2";

                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                            $('.menuList > li').removeClass('selectedMenuList');

                            $(x).closest('li').addClass('selectedMenuList');

                            $(document).attr('title', 'Giving life to ideas - YONDU');                               

                        });

                    }); 


                } );

            } else if ( $('body').hasClass('page-4-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-4-Contents').addClass('animated fadeOutRight');

                $('.page-4-Contents').animate({

                    'left' : cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-4-active').addClass('page-3-active blurred');

                    $.get('page-3.php',function(data){

                        var pathname = window.location.pathname;

                        var lastVal = pathname.substring(pathname.lastIndexOf('/') + 1);

                        if(lastVal!='page-4.php'){

                            $('#roller').append(data);

                        }else{

                            window.location = 'index.php#3';

                        }
                        
                         $('.page-3-Contents').animate({

                            'opacity' : '100'

                        },800, function() {

                            $('.preloaderContainer').fadeOut(1500);

                            $('body').removeClass('blurred'); 

                            $('body').addClass('page-3-active');                       

                            window.location.hash = "3"; 

                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                            $('.menuList > li').removeClass('selectedMenuList');

                            $(x).closest('li').addClass('selectedMenuList');   

                            $(document).attr('title', 'Products and Services - YONDU');                           

                        });

                    }); 


                } );

            } else if ( $('body').hasClass('page-5-active') ) {

                $('.preloaderContainer').fadeIn(500);

                $('.page-5-Contents').addClass('animated fadeOutRight');

                $('.page-5-Contents').animate({

                    'left' : cw + 'px'

                }, 400, function() {

                    $(this).remove();

                    $('body').removeClass('page-5-active').addClass('page-4-active blurred');

                    $.get('page-4.php',function(data){

                        $('#roller').append(data);

                         $('.page-4-Contents').animate({

                            'opacity' : '100'

                        },800, function() {

                            $('.preloaderContainer').fadeOut(1500);

                            $('body').removeClass('blurred'); 

                            $('body').addClass('page-4-active');                       

                             window.location.hash = "4";

                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                            $('.menuList > li').removeClass('selectedMenuList');

                            $(x).closest('li').addClass('selectedMenuList'); 

                            $(document).attr('title', 'About Us - YONDU');                             

                        });

                    }); 


                } );

            }

        });          


    }

    $.fn.detectClientDevice = function() {

    var isMobile = {

            Android: function() {
        
                return navigator.userAgent.match(/Android/i);
            
            },
            
            BlackBerry: function() {
                
                return navigator.userAgent.match(/BlackBerry/i);
            
            },
            
            iOS: function() {
               
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            
            },
            
            Opera: function() {
               
                return navigator.userAgent.match(/Opera Mini/i);
            
            },
            
            Windows: function() {
                
                return navigator.userAgent.match(/IEMobile/i);
            
            },
            
            any: function() {
                
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            
            }
        
        };

        if(isMobile.any()){

            // Mobile!

            $('.rightNavigationHolder, .leftNavigationHolder').hide();
            
            var hash = location.hash;

            var cw = $('body').outerWidth();

            var cp;

            var cookie;

            var currentClass;        

            $('#roller').swipe( {
                            //Generic swipe handler for all directions
                swipeLeft:function() {

                    if ( hash != '#5' ) {

                        var docWidth = $('body').outerWidth();

                        $('.pageContentHolder').animate({

                            'left' :  '-' + docWidth + 'px'

                        }, 300, function() {

                            if ( hash == '#1' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-1-Contents').addClass('animated fadeOutLeft');

                                $('.page-1-Contents').animate({

                                    'left' : '-' + cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-1-active').addClass('page-2-active blurred');

                                        window.location.hash = "2";

                                        $.get('page-2.php',function(data){

                                            $('#roller').append(data);

                                             $('.page-2-Contents').animate({

                                                'opacity' : '100'

                                            },800, function() {

                                                $('.preloaderContainer').fadeOut(500);

                                                $('body').removeClass('blurred'); 

                                                $('body').addClass('page-2-active'); 

                                                var x =  '.' + $('.page-2-Contents').attr('class').split(' ')[0].replace('-Contents','');

                                                $('.menuList > li').removeClass('selectedMenuList');

                                                $(x).closest('li').addClass('selectedMenuList');  

                                                $(document).attr('title', 'Giving life to ideas - YONDU');                              

                                            });

                                        });                      
                                    
                                    

                                } );

                            } else if ( hash == '#2' ) {
                        
                                $('.preloaderContainer').fadeIn(500);

                                $('.page-2-Contents').addClass('animated fadeOutLeft');

                                $('.page-2-Contents').animate({

                                    'left' : '-' + cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-2-active').addClass('page-3-active blurred');

                                    window.location.hash = "3";                                

                                    $.get('page-3.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-3-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(1500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-3-active'); 

                                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                            $('.menuList > li').removeClass('selectedMenuList');

                                            $(x).closest('li').addClass('selectedMenuList');   

                                            $(document).attr('title', 'Products and Services - YONDU');                          

                                            });

                                    }); 


                                } );

                            } else if ( hash == '#3' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-3-Contents').addClass('animated fadeOutLeft');

                                $('.page-3-Contents').animate({

                                    'left' : '-' + cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-3-active').addClass('page-4-active blurred');

                                    window.location.hash = "4";                                

                                    $.get('page-4.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-4-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(1500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-4-active');                       

                                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                            $('.menuList > li').removeClass('selectedMenuList');

                                            $(x).closest('li').addClass('selectedMenuList'); 

                                            $(document).attr('title', 'About Us - YONDU');

                                        });

                                    }); 


                                } );

                            } else if ( hash == '#4' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-4-Contents').addClass('animated fadeOutLeft');

                                $('.page-4-Contents').animate({

                                    'left' : '-' + cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-4-active').addClass('page-5-active blurred');

                                    window.location.hash = "5";                                

                                    $.get('page-5.php',function(data){

                                        var pathname = window.location.pathname;

                                        var lastVal = pathname.substring(pathname.lastIndexOf('/') + 1);

                                        if(lastVal!='page-4.php'){

                                            $('#roller').append(data);

                                        }else{

                                            window.location = 'index.php#5';

                                        }

                                         $('.page-5-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(1500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-5-active');                       

                                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                            $('.menuList > li').removeClass('selectedMenuList');

                                            $(x).closest('li').addClass('selectedMenuList'); 

                                            $(document).attr('title', 'Get in Touch - YONDU');

                                        });

                                    }); 


                                } );

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-2-Contents').addClass('animated fadeOutRight');

                                $('.page-2-Contents').animate({

                                    'left' :  cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-2-active').addClass('page-1-active blurred');

                                        $.get('page-1.php',function(data){

                                            $('#roller').append(data);

                                             $('.page-1-Contents').animate({

                                                'opacity' : '100'

                                            },800, function() {

                                                $('.preloaderContainer').fadeOut(500);

                                                $('.bubble1,.bubble2,.bubble3,.bubble4,.bubble5,.ideaHolder,.secondBackGround,.page-1-textDetails').fadeIn(800);                                

                                                $('body').removeClass('blurred'); 

                                                $('body').addClass('page-1-active');

                                                window.location.hash = "1";

                                                var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                                $('.menuList > li').removeClass('selectedMenuList');

                                                $(x).closest('li').addClass('selectedMenuList'); 

                                                $(document).attr('title', 'YONDU');                                 

                                            });

                                        });                      

                                } );
                            
                            }

                        });

                    }

                
                },

                swipeRight:function() {

                    if ( hash != '#1' ) {

                        var docWidth = $('body').outerWidth();

                        $('.pageContentHolder').animate({

                            'left' : docWidth + 'px'

                        }, 300, function() {

                            if ( hash == '#5' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-5-Contents').addClass('animated fadeOutRight');

                                $('.page-5-Contents').animate({

                                    'left' : cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-5-active').addClass('page-4-active blurred');

                                    window.location.hash = "4";                                

                                    $.get('page-4.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-4-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(1500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-4-active');                       

                                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                            $('.menuList > li').removeClass('selectedMenuList');

                                            $(x).closest('li').addClass('selectedMenuList'); 

                                            $(document).attr('title', 'About Us - YONDU');                             

                                        });

                                    }); 


                                } );

                            } else if ( hash == '#4' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-4-Contents').addClass('animated fadeOutRight');

                                $('.page-4-Contents').animate({

                                    'left' : cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-4-active').addClass('page-3-active blurred');

                                    window.location.hash = "3";                                

                                    $.get('page-3.php',function(data){

                                        var pathname = window.location.pathname;

                                        var lastVal = pathname.substring(pathname.lastIndexOf('/') + 1);

                                        if(lastVal!='page-4.php'){

                                            $('#roller').append(data);

                                        }else{

                                            window.location = 'index.php#3';

                                        }
                                        
                                         $('.page-3-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {

                                            $('.preloaderContainer').fadeOut(1500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-3-active');                       

                                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                            $('.menuList > li').removeClass('selectedMenuList');

                                            $(x).closest('li').addClass('selectedMenuList');   

                                            $(document).attr('title', 'Products and Services - YONDU');                           

                                        });

                                    }); 


                                } );

                            } else if ( hash == '#3' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-3-Contents').addClass('animated fadeOutRight');

                                $('.page-3-Contents').animate({

                                    'left' : cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-3-active').addClass('page-2-active blurred');

                                    window.location.hash = "2";                                

                                    $.get('page-2.php',function(data){

                                        $('#roller').append(data);

                                         $('.page-2-Contents').animate({

                                            'opacity' : '100'

                                        },800, function() {                           

                                            $('.preloaderContainer').fadeOut(1500);

                                            $('body').removeClass('blurred'); 

                                            $('body').addClass('page-2-active');                   

                                            var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                            $('.menuList > li').removeClass('selectedMenuList');

                                            $(x).closest('li').addClass('selectedMenuList');

                                            $(document).attr('title', 'Giving life to ideas - YONDU');                               

                                        });

                                    }); 


                                } );

                            } else if ( hash == '#2' ) {

                                $('.preloaderContainer').fadeIn(500);

                                $('.page-2-Contents').addClass('animated fadeOutRight');

                                $('.page-2-Contents').animate({

                                    'left' :  cw + 'px'

                                }, 400, function() {

                                    $(this).remove();

                                    $('body').removeClass('page-2-active').addClass('page-1-active blurred');

                                        window.location.hash = "1";                                

                                        $.get('page-1.php',function(data){

                                            $('#roller').append(data);

                                             $('.page-1-Contents').animate({

                                                'opacity' : '100'

                                            },800, function() {

                                                $('.preloaderContainer').fadeOut(500);

                                                $('.bubble1,.bubble2,.bubble3,.bubble4,.bubble5,.ideaHolder,.secondBackGround,.page-1-textDetails').fadeIn(800);                                

                                                $('body').removeClass('blurred'); 

                                                $('body').addClass('page-1-active');

                                                var x =  '.' + $('.pageContentHolder').attr('class').split(' ')[0].replace('-Contents','');

                                                $('.menuList > li').removeClass('selectedMenuList');

                                                $(x).closest('li').addClass('selectedMenuList'); 

                                                $(document).attr('title', 'YONDU');                                 

                                            });

                                        });                      

                                } );

                            }

                        });

                    } 

                },
                           
                threshold:75,

                triggerOnTouchEnd : true,

                allowPageScroll : 'horizontal'          

            });

        } else {
            
            // Not mobile
        
        }

    }    



})(jQuery);
