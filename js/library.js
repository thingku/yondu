(function($) {

    var p1 = 'index.php';

    var p2 = 'giving-life-to-ideas.php';

    var p3 = 'products-and-services.php';

    var p4 = 'about-yondu.php';

    var p5 = 'get-in-touch.php';    

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

            var bid = $('body').attr('id');   

            if ( bid == 'page1' ) {

                    $('.menuList > li').removeClass('selectedMenuList');

                    $('.page-1').parent().addClass('selectedMenuList');

            } else if ( bid == 'page2' ) {

                    $('.menuList > li').removeClass('selectedMenuList');

                    $('.page-2').parent().addClass('selectedMenuList');

            } else if ( bid == 'page3' ) {

                    $('.menuList > li').removeClass('selectedMenuList');                    

                    $('.page-3').parent().addClass('selectedMenuList');

            } else if ( bid == 'page4') {

                    $('.menuList > li').removeClass('selectedMenuList');

                    $('.page-4').parent().addClass('selectedMenuList');

            } else if ( bid == 'page5' ) {

                    $('.menuList > li').removeClass('selectedMenuList');

                    $('.page-5').parent().addClass('selectedMenuList');

            }                 

            $(this).click(function() {

                var sp = $(this).children().attr('class');

                if ( sp == 'page-1' ) {

                    window.location.href = p1;

                } else if ( sp == 'page-2' ) {

                    window.location.href = p2;

                } else if ( sp == 'page-3' ) {

                    window.location.href = p3;

                } else if ( sp == 'page-4') {

                    window.location.href = p4;

                } else if ( sp == 'page-5' ) {

                    window.location.href = p5;

                }

            });

        });     

    }

    $.fn.page1 = function() {

        $(window).load(function() {

            $('.preloaderContainer').fadeOut();

            $('body').removeClass('blurred');

            setTimeout(function() {

                $('.bubble1').fadeIn(400);

            },1000);

            setTimeout(function() {

                $('.bubble2').fadeIn(400);

            },1200);  

            setTimeout(function() {

                $('.bubble3').fadeIn(400);

            },1400);  

            setTimeout(function() {

                $('.bubble4').fadeIn(400);

            },1600);

            setTimeout(function() {

                $('.bubble5').fadeIn(400);

            },1800); 

            setTimeout(function() {

                $('.dot1').fadeIn(400);

            },2000); 

            setTimeout(function() {

                $('.dot2').fadeIn(400);

            },2200); 

            setTimeout(function() {

                $('.dot3').fadeIn(400);


            },2400);

            setTimeout(function() {

                $('.bubbleList > li').fadeOut(400);
                
            },3000);             

            setTimeout(function() {

                $('.ideaHolder').fadeIn(400);

                $('.secondBackGround').fadeIn(400);

                $('.page-1-textDetails').fadeIn(400);

            },3500);

        });   

        $('.givingLifeToIdeas').click(function() {

            var cw = $('body').outerWidth();

            var pc = $('.pageContentHolder');

            pc.animate({

                    'marginLeft' : '-' + cw + 'px'

            },300, function() {

                    window.location.href = p2;

            });

        });                                                                                            

    }

    $.fn.page2 = function() {

        $(window).load(function() {

            $('.preloaderContainer').fadeOut();

            $('body').removeClass('blurred');

        });        

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

        $('.productsAndServices').click(function() {

            var cw = $('body').outerWidth();

            var pc = $('.pageContentHolder');

            pc.animate({

                    'marginLeft' : '-' + cw + 'px'

            },300, function() {

                    window.location.href = p3;

            });            
                
        });

    }

    $.fn.page3 = function() {

        $(window).load(function() {

            $('.preloaderContainer').fadeOut();

            $('body').removeClass('blurred');

            setTimeout(function() {

                $('.thumbNail1').fadeIn(400);

            },2000);

            setTimeout(function() {

                $('.thumbNail2').fadeIn(400);

            },1000);

        });

        $(window).scrollTop(0);        

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

    $.fn.page4 = function() {

        $(window).load(function() {

            $('.preloaderContainer').fadeOut();

            $('body').removeClass('blurred');

        });

    } 

    $.fn.page5 = function() {

        $(window).load(function() {

            $('.preloaderContainer').fadeOut();

            $('body').removeClass('blurred');

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

            var cw = $('body').outerWidth();

            var bid = $('body').attr('id');        

            $('body').swipe( {
                            //Generic swipe handler for all directions
                swipeLeft:function() {

                    if ( bid != 'page5' ) {

                        var docWidth = $('body').outerWidth();

                        $('.pageContentHolder').animate({

                            'left' :  '-' + docWidth + 'px'

                        }, 300, function() {

                            if ( bid == 'page1' ) {

                                 window.location.href = p2;

                            } else if ( bid == 'page2' ) {

                                 window.location.href = p3;

                            } else if ( bid == 'page3' ) {

                                 window.location.href = p4;

                            } else if ( bid == 'page4' ) {

                                 window.location.href = p5;
                            
                            }

                        });

                    }

                
                },

                swipeRight:function() {

                    if ( bid != 'page1' ) {

                        var docWidth = $('body').outerWidth();

                        $('.pageContentHolder').animate({

                            'left' : docWidth + 'px'

                        }, 300, function() {

                            if ( bid == 'page5' ) {

                                console.log('x');

                                 window.location.href = p4;

                            } else if ( bid == 'page4' ) {

                                 window.location.href = p3;

                            } else if ( bid == 'page3' ) {

                                 window.location.href = p2;

                            } else if ( bid == 'page2' ) {

                                 window.location.href = p1;

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

    $.fn.animatePage = function() {

        var cw = $('body').outerWidth();

        var bid = $('body').attr('id');

        var pc = $('.pageContentHolder');    

        $('.nextPage').click(function() {

            pc.animate({

                'marginLeft' : '-' + cw + 'px'

            },300, function() {

                if ( bid == 'page1' ) {

                    window.location.href = p2;

                } else if ( bid == 'page2') {

                    window.location.href = p3;

                } else if ( bid == 'page3' ) {

                    window.location.href = p4;

                } else if ( bid == 'page4' ) {

                    window.location.href = p5

                }

            });

        });

        $('.previousPage').click(function() {

            pc.animate({

                'marginLeft' : cw + 'px'

            },300, function() {

                if ( bid == 'page5' ) {

                    window.location.href = p4;

                } else if ( bid == 'page4') {

                    window.location.href = p3;

                } else if ( bid == 'page3' ) {

                    window.location.href = p2;

                } else if ( bid == 'page2' ) {

                    window.location.href = p1

                }

            });            

        });

    } 



})(jQuery);
