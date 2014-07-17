/*
	Created by: Rafon Amista (UX Developer), Reynier Carlo Nebres (intern);
	Date Created: December 16, 2013
*/

(function($){

$.fn.datePicker = function(options){

	var element = this;

	var settings = $.extend({
		fadeIn : 2000,
		fadeOut : 2000,
		switchSpeed : 300,
		showDay : 'yes',
		widgetType:'date',
		maxYear : 10,
	}, options)

	var sSpeed = settings.switchSpeed;
	var wType = settings.widgetType;
	var fIn = settings.fadeIn;
	var showDay = settings.showDay;
	var fOut = settings.fadeOut;
	var maxYear = settings.maxYear
	var dayTodayStr = 0;

	/*main date picker holder*/

		var mainDatePickerHolder = $("<div>", { class: "mainDatePickerHolder"});
		var bigArrowHolder = $("<div>", { class: "bigArrowHolder"});	
		var upperHolder = $("<div>", { class: "upperHolder"});
		var lowerHolder = $("<div>", { class: "lowerHolder"});

	/*main date picker holder*/

	/*main controls holder*/

		var fromLabelHolder = $("<div>", { class: "fromLabelHolder"});
		var fromLabelHolder2 = $("<div>", { class: "fromLabelHolder2"});
		var datePickerDetailsHolder = $("<div>", { class: "datePickerDetailsHolder"});
		var datePickerDetailsHolder2 = $("<div>", { class: "datePickerDetailsHolder2"});
		var controlsHolder = $("<div>", { class: "controlsHolder"});	

		var columnHolder = $("<div>", {  class: "columnHolder"});
		var controlsHolderTop = $("<div>", { class: "controlsHolderTop"});
		var controlsHolderBottom = $("<div>", { class: "controlsHolderBottom"});
		var bottomOptions = $("<div>", { class: "bottomOptions"});
		var calendarOption = $("<ul>", { class: "calendarOption"});
		var calendarOptionList = $("<li>", { class: "calendarOptionList"});
		var calendarOptionClose = $("<li>", { class: "calendarOptionClose"});
		var calendarClose = $("<span>", { class: "calendarClose"});
		var calendarOptionListIcon = $("<span>", { class: "calendarOptionListIcon"});
		var calendarOptionListLabel = $("<span>", { class: "calendarOptionListLabel"});
		var timeOption = $("<ul>", { class: "timeOption"});
		var timeOptionList = $("<li>", { class: "timeOptionList"});
		var timeOptionClose = $("<li>", { class: "timeOptionClose"});
		var timeClose = $("<span>", { class: "timeClose"});
		var timeOptionListIcon = $("<span>", { class: "timeOptionListIcon"});
		var timeOptionListLabel = $("<span>", { class: "timeOptionListLabel"});

		var columnHolder2 = $("<div>", {  class: "columnHolder2"});
		var controlsHolderTop2 = $("<div>", { class: "controlsHolderTop2"});
		var controlsHolderBottom2 = $("<div>", { class: "controlsHolderBottom2"});
		var bottomOptions2 = $("<div>", { class: "bottomOptions2"});
		var calendarOption2 = $("<ul>", { class: "calendarOption2"});
		var calendarOptionList2 = $("<li>", { class: "calendarOptionList2"});
		var calendarOptionClose2 = $("<li>", { class: "calendarOptionClose2"});
		var calendarClose2 = $("<span>", { class: "calendarClose2"});
		var calendarOptionListIcon2 = $("<span>", { class: "calendarOptionListIcon2"});
		var calendarOptionListLabel2 = $("<span>", { class: "calendarOptionListLabel2"});
		var timeOption2 = $("<ul>", { class: "timeOption2"});
		var timeOptionList2 = $("<li>", { class: "timeOptionList2"});
		var timeOptionClose2 = $("<li>", { class: "timeOptionClose2"});
		var timeClose2 = $("<span>", {class: "timeClose2"});
		var timeOptionListIcon2 = $("<span>", { class: "timeOptionListIcon"});
		var timeOptionListLabel2 = $("<span>", { class: "timeOptionListLabel"});	


	/*main controls holder*/

	/*main ul*/

		var topControls = $("<ul>", { class: "topControls"});
		var topControls2 = $("<ul>", { class: "topControls2"});

		var hoursControlTop = $("<li>", { class: "hoursControlTop"});
		var minutesControlTop = $("<li>", {  class: "minutesControlTop"});
		var ampmControlTop = $("<li>", {  class: "ampmControlTop"});
		var hoursControlBottom = $("<li>", {  class: "hoursControlBottom"});
		var minutesControlBottom = $("<li>", {  class: "minutesControlBottom"});
		var ampmControlBottom = $("<li>", { class: "ampmControlBottom"});	
		var monthControlTop = $("<li>", {  class: "monthControl"});
		var dayControlTop = $("<li>", {  class: "dayControl"});
		var yearControlTop = $("<li>", {  class: "yearControl"});
		var monthControlBottom = $("<li>", {  class: "monthControl"});
		var dayControlBottom = $("<li>", { class: "dayControl"});
		var yearControlBottom = $("<li>", {  class: "yearControl"});	
		var bottomControls = $("<ul>", { class: "bottomControls"});
		var monthHolder = $("<div>",{class:"monthHolder"});
		var dayHolder = $("<div>",{class:"dayHolder"});
		var yearHolder = $("<div>",{class:"yearHolder"});
		var hoursHolder = $("<div>",{class:"hoursHolder"});
		var minutesHolder = $("<div>",{class:"minutesHolder"});
		var ampmHolder = $("<div>",{class:"ampmHolder"});	

		var hoursControlTop2 = $("<li>", {  class: "hoursControlTop2"});
		var minutesControlTop2 = $("<li>", {  class: "minutesControlTop2"});
		var ampmControlTop2 = $("<li>", { class: "ampmControlTop2"});
		var hoursControlBottom2 = $("<li>", {  class: "hoursControlBottom2"});
		var minutesControlBottom2 = $("<li>", {  class: "minutesControlBottom2"});
		var ampmControlBottom2 = $("<li>", {  class: "ampmControlBottom2"});	
		var monthControlTop2 = $("<li>", {  class: "monthControl2"});
		var dayControlTop2 = $("<li>", {  class: "dayControl2"});
		var yearControlTop2 = $("<li>", {  class: "yearControl2"});
		var monthControlBottom2 = $("<li>", {  class: "monthControl2"});
		var dayControlBottom2 = $("<li>", {  class: "dayControl2"});
		var yearControlBottom2 = $("<li>", {  class: "yearControl2"});	
		var bottomControls2 = $("<ul>", { class: "bottomControls2"});
		var monthHolder2 = $("<div>",{class:"monthHolder2"});
		var dayHolder2 = $("<div>",{class:"dayHolder2"});
		var yearHolder2 = $("<div>",{class:"yearHolder2"});
		var hoursHolder2 = $("<div>",{class:"hoursHolder2"});
		var minutesHolder2 = $("<div>",{class:"minutesHolder2"});
		var ampmHolder2 = $("<div>",{class:"ampmHolder2"});	

	/*main ul*/

	/*control arrow*/

		var controlArrow = $("<span>", { class: "controlArrow"});
		var controlArrow2 = $("<span>", { class: "controlArrow2"});

	/*control arrow*/

	/*main date picker contents*/

		var mainDatePickerContents = $("<div>", { class: "mainDatePickerContents"});
		var mainDatePickerContents2 = $("<div>", { class: "mainDatePickerContents2"});
		var topShadow = $("<div>", { class: "topShadow"});
		var bottomShadow = $("<div>", { class: "bottomShadow"});
		var topShadow2 = $("<div>", { class: "topShadow2"});
		var bottomShadow2 = $("<div>", { class: "bottomShadow2"});	

	/*main date picker contents*/

	/*date contents holder*/

		var dateContensHolder = $("<div>", { class: "dateContensHolder"});
		var hoursSelector = $("<ul>", { class: "hoursSelector"});
		var hours= $("<li>", { class: "hours"});
		var minutesSelector = $("<ul>", { class: "minutesSelector"});
		var minutes= $("<li>", { class: "minutes"});
		var ampmSelector = $("<ul>", { class: "ampmSelector"});
		var ampm= $("<li>", { class: "ampm"});	
		var monthSelector = $("<ul>", { class: "monthSelector"});
		var months= $("<li>", { class: "months"});
		var daySelector = $("<ul>", { class: "daySelector"});
		var days= $("<li>", { class: "days"});
		var yearSelector = $("<ul>", { class: "yearSelector"});
		var years= $("<li>", { class: "years"});

		var dateContensHolder2 = $("<div>", { class: "dateContensHolder2"});
		var hoursSelector2 = $("<ul>", { class: "hoursSelector2"});
		var hours2 = $("<li>", { class: "hours2"});
		var minutesSelector2 = $("<ul>", { class: "minutesSelector2"});
		var minutes2 = $("<li>", { class: "minutes2"});
		var ampmSelector2 = $("<ul>", { class: "ampmSelector2"});
		var ampm2 = $("<li>", { class: "ampm2"});	
		var monthSelector2 = $("<ul>", { class: "monthSelector2"});
		var months2= $("<li>", { class: "months2"});
		var daySelector2 = $("<ul>", { class: "daySelector2"});
		var days2 = $("<li>", { class: "days2"});
		var yearSelector2 = $("<ul>", { class: "yearSelector2"});
		var years2 = $("<li>", { class: "years2"});


	/*date contents holder*/


	/*final data*/

		var finalMonth = $("<input>",{class:"finalMonth", type:"hidden"});

		var finalDay = $("<input>",{class:"finalDay", type:"hidden"});

		var finalYear = $("<input>",{class:"finalYear", type:"hidden"});

		var finalHours = $("<input>",{class:"finalHours", type:"hidden"});

		var finalMinutes = $("<input>",{class:"finalMinutes", type:"hidden"});

		var finalAmPm = $("<input>",{class:"finalAmPm", type:"hidden"});	

		var stringData = $("<div>",{class:"stringData"});

		var finalMonth2 = $("<input>",{class:"finalMonth2", type:"hidden"});

		var finalDay2 = $("<input>",{class:"finalDay2", type:"hidden"});

		var finalYear2 = $("<input>",{class:"finalYear2", type:"hidden"});

		var finalHours2 = $("<input>",{class:"finalHours2", type:"hidden"});

		var finalMinutes2 = $("<input>",{class:"finalMinutes2", type:"hidden"});

		var finalAmPm2= $("<input>",{class:"finalAmPm2", type:"hidden"});	

		var stringData2 = $("<div>",{class:"stringData2"});


	/*final data*/

	$(document).ready(function(){

		$(window).load(function(){

			function loadScript(url, callback)	{

				    var head = document.getElementsByTagName('head')[0];

				    var script = document.createElement('script');

				    script.type = 'text/javascript';

				    script.src = url;

				    script.onreadystatechange = callback;

				    script.onload = callback;

				    head.appendChild(script);

			}			

			/* main date picker implementation */


				if (wType == 'date') {

					var getParentId = $(element).parent().attr('id');

					var parentId = '#'+getParentId;

					/* ========== dom creation ========== */

						$(mainDatePickerHolder).appendTo(parentId);

						$(bigArrowHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(upperHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(lowerHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(controlsHolderTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(topControls).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop');

						$(monthControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls');

						$(dayControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls');

						$(yearControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls');				

						$(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls li').each(function(){

							$(this).append('<span class="controlArrow"></span>')

						});

						$(mainDatePickerContents).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(topShadow).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents');

						$(bottomShadow).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents');

						$(dateContensHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents');

						$(monthHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder');

						$(dayHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder');

						$(yearHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder');

						$(monthSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder .monthHolder');

						$(daySelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder .dayHolder');

						$(yearSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder .yearHolder');

						$(controlsHolderBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(bottomOptions).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(calendarOption).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions');

						$(calendarOptionList).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption');

						$(calendarOptionListIcon).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption .calendarOptionList');

						$(calendarOptionListLabel).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption .calendarOptionList');

						$('.calendarOptionListLabel').html('Set Date');

						$(calendarOptionClose).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption');

						$(calendarClose).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption .calendarOptionClose');

						$(bottomControls).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom');

						$(monthControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls');

						$(dayControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls');

						$(yearControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls');		

						$(finalMonth).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder  .monthHolder ');

						$(finalDay).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder  .dayHolder');		

						$(finalYear).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder  .yearHolder ');

						$(stringData).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

					/* ========== dom creation ========== */


					var today = new Date();
					
					var dd = today.getDate();
					
					var monthsList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
					
					var dayList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

					var mm = monthsList[today.getMonth()];
					
					var yyyy = today.getFullYear();		

					/* ========== END OF LEAP YEAR ============ */

						var yyyyLimit = yyyy + maxYear;

						var now=mm+'/'+dd+'/'+yyyy;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];
						
						var limitAll = 0;

						var limitFeb = 0;

						if (yyyy%4==0){

							limitFeb = 29;

						} else {

							limitFeb = 28;

						}

						var newSelectedIndex = 	jQuery.inArray(mm, monthsList );

						if(newSelectedIndex<=6){

							if(newSelectedIndex%2 == 0){

								limitAll=31;

							}else if (newSelectedIndex == 1){

								limitAll = limitFeb;

							}else{

								limitAll=30;

							}
						}else{

							if(newSelectedIndex%2 != 0){

								limitAll=31;

							}else{

								limitAll=30;

							}

						}

					/* ========== END OF LEAP YEAR ============ */

					var selectedDate = 0;	

					var fMonth = mm;

					var fDay = today.getDate();

					var fYear = today.getFullYear();					

					if ( showDay == 'yes') {

						dayTodayStr = ' - ' + dayToday;

					} else {

						dayTodayStr = '';

					}

					var fString = $(parentId + ' .stringData').html(fMonth+' '+fDay+', '+fYear+dayTodayStr);	

					$(element).val($(parentId + ' .stringData').html());		

					function getLimitofDate(){

							var newSelectedIndex = 	jQuery.inArray($(parentId + ' .selectedMonth').attr('class').split(' ')[1], monthsList )-1;
						
							var currentYear = $(parentId + ' .selectedYear').attr('class').split(' ')[1];

							var currentDate=$(parentId + ' .selectedDay').attr('class').split(' ')[1];

							var lastDate=$(parentId + " ul.daySelector li:last span" ).attr('class').split(' ')[1];

							var leap=false;
							
									var templimitAll=0;

									/*FOR LEAP YEAR*/

									if(currentYear%4==0){

										limitFeb = 29;

										leap=true;

									}else{

										limitFeb = 28;

									}
									

									if(newSelectedIndex<=6){

										if(newSelectedIndex%2 == 0){

											templimitAll=31;

										}else if (newSelectedIndex == 1){

											templimitAll = limitFeb;

										}else{

											templimitAll=30;

										}

									}else{

										if(newSelectedIndex%2 != 0){

											templimitAll=31;

										}else{

											templimitAll=30;

										}

									}
									
									/*END OF LEAP YEAR*/

									if(lastDate!=templimitAll){

										var diff=templimitAll-lastDate;

										var x=0;

										var isChose=false;

										/*CHECK IF DAYS WILL BE ERASE*/

										if(diff<0){ /* DAYS WILL BE ERASE */
											
											while(templimitAll!=lastDate){

												if(currentDate==lastDate){

													isChose=true;

												}
												
												$( parentId + " ul.daySelector li span."+lastDate ).parent().remove();

												lastDate--;

											}
											
										}else{ /* DAYS WILL BE ADDED */

											while(templimitAll>lastDate){

												++lastDate;

												var htmlContent='<li class="days"><span class="dateLabel '+lastDate+'">'+lastDate+'</span></li>';

												$( parentId + " ul.daySelector").append(htmlContent);
												
											}

										}

										if(isChose==true){ /*CHECK IF THE CHOSEN DAY WILL BE ERASED */

											var diff=currentDate-templimitAll;

											var lessMargin=diff*20;
											
											$(  parentId + " ul.daySelector li span."+templimitAll ).parent().addClass('selectedDay');
											
											var currMargin=$(  parentId + " ul.daySelector").css('marginTop').replace(/[^-\d\.]/g, '');
											
											var updateMargin=parseInt(currMargin)+parseInt(lessMargin);

											$(  parentId + " ul.daySelector").css('marginTop',updateMargin+'px');

										}
										
									}


					}

					function monthListSelectorA(option) {
						
						if (option == 'top') {

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li');

							var currIndex = $( parentId + ' .selectedMonth').index();

							listName.removeClass('selectedMonth');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child('+nextIndex+')').addClass('selectedMonth');

							//getLimitofDate();

							var newSelectedIndex = 	$( parentId + ' .selectedMonth').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();
							
							var ulHeight = 0;
								
								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});						

							//var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);
								
							if (newSelectedIndex > 12) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child(2)').addClass('selectedMonth');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							}

							
						} else if (option == 'bottom') {

								var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li');

								var currIndex = $( parentId + ' .selectedMonth').index();

								listName.removeClass('selectedMonth');

								var nextIndex = currIndex - parseInt(0);

								var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child('+nextIndex+')').addClass('selectedMonth');

								//getLimitofDate();

								var newSelectedIndex = 	$( parentId + ' .selectedMonth').index();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();
								
								var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

								var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);							

								if (newSelectedIndex <= 0) {								

									listName.removeClass('selectedMonth');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child(13)').addClass('selectedMonth');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

										'margin-top':'-'+newMarginTop

									},sSpeed);

									

									//console.log(newSelectedIndex+' '+newMarginTop);	

								} else {
						

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

									'margin-top':'-'+totalSelectedIndexHeight+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);

								}

						}

					
						

						selectedDate = $( parentId + ' .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $( parentId + ' .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $( parentId + ' .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

							dayTodayStr = ' - ' + dayToday;

						} else {

							dayTodayStr = '';

						}						
						
						var fString = $(parentId + ' .stringData').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html());				
		
					}

					function dayListSelectorA(option) {

						if (option == 'top') {

							var x = $(parentId + ' .daySelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId +  ' .selectedDay').index();

							listName.removeClass('selectedDay');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child('+nextIndex+')').addClass('selectedDay');

							var newSelectedIndex = 	$(parentId + ' .selectedDay').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							if (newSelectedIndex == -1) {

							listName.removeClass('selectedDay');	

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child(2)').addClass('selectedDay');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			


							}

						} else if (option == 'bottom') {

							var x = $(parentId + ' .daySelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .selectedDay').index();

							listName.removeClass('selectedDay');

							var nextIndex = currIndex - parseInt(0);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child('+nextIndex+')').addClass('selectedDay');

							var newSelectedIndex = 	$(parentId + ' .selectedDay').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3)+20;	

							

						
							var	limit=parseInt($( parentId + " ul.daySelector li:last span" ).text())+1;
							
						
							if (newSelectedIndex <= 0) {

								listName.removeClass('selectedDay');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child('+limit+')').addClass('selectedDay');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

									'margin-top':'-'+newMarginTop+'px'

								},sSpeed);	

							} else {
					

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);	

							//console.log(newSelectedIndex);

							}

						}

						selectedDate = $(parentId + ' .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

							dayTodayStr = ' - ' + dayToday;

						} else {

							dayTodayStr = '';

						}							
						
						var fString = $('.stringData').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($('.stringData').html());			

					}

					function yearListSelectorA(option) {

						if (option == 'top') {

							var x = $('.yearSelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .selectedYear').index();

							listName.removeClass('selectedYear');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child('+nextIndex+')').addClass('selectedYear');

							var newSelectedIndex = 	$(parentId + ' .selectedYear').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var limit=parseInt(yyyyLimit)-1900-1;

							//getLimitofDate();
							
							if (newSelectedIndex >= limit) {

							listName.removeClass('selectedYear');	

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child(2)').addClass('selectedYear');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							//console.log(newSelectedIndex);

							}

						} else if ('bottom') {

							var x = $(parentId + '.yearSelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .selectedYear').index();

							listName.removeClass('selectedYear');

							var nextIndex = currIndex - parseInt(0);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child('+nextIndex+')').addClass('selectedYear');

							var newSelectedIndex = 	$(parentId + ' .selectedYear').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);	

							var limit=parseInt(yyyyLimit)-1900-1;

							//getLimitofDate();

							if (newSelectedIndex <= 0) {

								listName.removeClass('selectedYear');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child('+limit+')').addClass('selectedYear');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

									'margin-top':'-'+newMarginTop+'px'

								},sSpeed);	

							} else {
					

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);	

							//console.log(newSelectedIndex);

							}

						}

						selectedDate = $(parentId + ' .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);
				
						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

							dayTodayStr = ' - ' + dayToday;

						} else {

							dayTodayStr = '';

						}							
						
						var fString = $(parentId + ' .stringData').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html());			


					}


					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').val().length == 0) {

						var monthsList = ['&nbsp;','January','February','March','April','May','June','July','August','September','October','November','December','&nbsp;']

						$.each(monthsList, function(index,value) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .monthSelector').append('<li class="months"><span class="dateLabel '+value+'">'+value+'</span></li>');

						});

					}
					

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector .'+mm).parent().addClass('selectedMonth');

					

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li').each(function(){

						if($(this).hasClass('selectedMonth')){

								var totalPrevListHeight = 0;

								var currentListHeight = $(this).prevAll().each(function(){

									totalPrevListHeight += $(this).outerHeight();

								});

								var finalListHeight = totalPrevListHeight - ($(this).outerHeight());

								$(this).parent().css({

									'margin-top':'-'+finalListHeight+'px'
								
								});

								//console.log(totalPrevMonthListHeight);

						}

					});

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .dayHolder .daySelector').val().length == 0) {
						var x=0;
						var tempLimitAll=limitAll;

						if(limitAll==30){
							tempLimitAll = tempLimitAll + 2;
						}else{
							tempLimitAll = tempLimitAll + 1;
						}
							

						for (var i = 0, limit = tempLimitAll; i < limit; i++) {

							if(i>limitAll)
								continue;
							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .daySelector').append('<li class="days"><span class="dateLabel '+i+'">'+i+'</span></li>');
							x++;
						}
						if(limitAll==30){
							x = x+1;
						}
						$(parentId + ' span.0,' + parentId + ' span.'+x).html('&nbsp;');

					}

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector .'+dd).parent().addClass('selectedDay');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li').each(function(){

						if($(this).hasClass('selectedDay')){

								var totalPrevDayListHeight = 0;

								var currentDaysListHeight = $(this).prevAll().each(function(){

									totalPrevDayListHeight += $(this).outerHeight();

								});

								var finalDayListHeight = totalPrevDayListHeight - ($(this).outerHeight());

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').css({

									'margin-top':'-'+finalDayListHeight+'px'
								
								});


						}


					});		
				

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .yearHolder .yearSelector').val().length == 0) {

						for (var i = 1900, limit = yyyyLimit; i < limit; i++) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .yearSelector').append('<li class="years"><span class="dateLabel '+i+'">'+i+'</span></li>');

						}

					}		

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector .'+yyyy).parent().addClass('selectedYear');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li').each(function(){

						if($(this).hasClass('selectedYear')){

								var totalPrevYearListHeight = 0;

								var currentYearListHeight = $(this).prevAll().each(function(){

									totalPrevYearListHeight += $(this).outerHeight();

								});

								var finalYearListHeight = totalPrevYearListHeight - ($(this).outerHeight());

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').css({

									'margin-top':'-'+finalYearListHeight+'px'
								
								});

						}


					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls li').each(function(){

						$(this).append('<span class="controlArrow"></span>')

					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .topControls .monthControl').click(function(){

						monthListSelectorA('top');



					});			

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .topControls .dayControl').click(function(){

						dayListSelectorA('top');		

					});			

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .topControls .yearControl').click(function(){

						yearListSelectorA('top');
				


					});					
						

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls .monthControl').click(function(){

						monthListSelectorA('bottom');
					});		


					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls .dayControl').click(function(){

						dayListSelectorA('bottom');

					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls .yearControl').click(function(){

						yearListSelectorA('bottom');

					});				




					var scriptUrl = 'js/jquery.mousewheel.js';

					var listDOMMonth = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li');

					var listDOMDay = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li');

					var listDOMYear = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li');


					var mouseWheelCode = function() {					

						var totalDelta = 0;

						listDOMMonth.bind('mousewheel',function(event,delta){			

							totalDelta += delta;

							if (delta > 0) {

								monthListSelectorA('top');


							}	else {

								monthListSelectorA('bottom');

							}


							event.preventDefault();

						});

						listDOMDay.bind('mousewheel',function(event,delta){

							totalDelta += delta;

							if (delta > 0) {

								dayListSelectorA('top');


							}	else {

								dayListSelectorA('bottom');

							}


							event.preventDefault();

						});

						listDOMYear.bind('mousewheel',function(event,delta){

							if (delta > 0) {

								yearListSelectorA('top');


							}	else {

								yearListSelectorA('bottom');

							}


							event.preventDefault();

						});

					}						


					loadScript(scriptUrl,mouseWheelCode);	


				} else if (wType == 'dateRange') {

					var getParentId = $(element).parent().attr('id');

					var parentId = '#'+getParentId;

					/* ========== dom creation ========== */

						$(mainDatePickerHolder).appendTo(parentId);

						$(bigArrowHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(parentId + '> .mainDatePickerHolder').addClass('dateRangeActive');

						$(upperHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(lowerHolder).appendTo(parentId + '> .mainDatePickerHolder');

						/* This is for column1 DOM */

							$(columnHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

							$(fromLabelHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder');

							$(parentId  + ' .columnHolder .fromLabelHolder').html('<span>From</span>');

							$(datePickerDetailsHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder');

							$(controlsHolderTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder');

							$(topControls).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderTop');

							$(monthControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderTop .topControls');

							$(dayControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderTop .topControls');

							$(yearControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderTop .topControls');				

							$(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderTop .topControls li').each(function(){

								$(this).append('<span class="controlArrow"></span>')

							});

							$(mainDatePickerContents).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder');

							$(topShadow).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents');

							$(bottomShadow).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents');

							$(dateContensHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents');

							$(monthHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder');

							$(dayHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder');

							$(yearHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder');

							$(monthSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder .monthHolder');

							$(daySelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder .dayHolder');

							$(yearSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder .yearHolder');

							$(controlsHolderBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder');

							$(bottomControls).appendTo(parentId + '> .mainDatePickerHolder .upperHolder  .controlsHolderBottom');

							$(monthControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderBottom .bottomControls');

							$(dayControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderBottom .bottomControls');

							$(yearControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .controlsHolderBottom .bottomControls');		

							$(finalMonth).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder  .monthHolder ');

							$(finalDay).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder  .dayHolder');		

							$(finalYear).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder .datePickerDetailsHolder .mainDatePickerContents .dateContensHolder  .yearHolder ');

							$(stringData).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder');

						/* This is for column1 DOM */	

						/* This is for column2 DOM */

							$(columnHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

							$(fromLabelHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2');

							$(parentId  + ' .columnHolder2 .fromLabelHolder2').html('<span>To</span>');

							$(datePickerDetailsHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2');

							$(controlsHolderTop2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2');

							$(topControls2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderTop2');

							$(monthControlTop2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderTop2 .topControls2');

							$(dayControlTop2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderTop2 .topControls2');

							$(yearControlTop2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderTop2 .topControls2');				

							$(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderTop2 .topControls2 li').each(function(){

								$(this).append('<span class="controlArrow2"></span>')

							});

							$(mainDatePickerContents2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2');

							$(topShadow2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2');

							$(bottomShadow2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2');

							$(dateContensHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2');

							$(monthHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2');

							$(dayHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2');

							$(yearHolder2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2');

							$(monthSelector2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2 .monthHolder2');

							$(daySelector2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2 .dayHolder2');

							$(yearSelector2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2 .yearHolder2');

							$(controlsHolderBottom2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2');

							$(bottomControls2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder  .controlsHolderBottom2');

							$(monthControlBottom2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderBottom2 .bottomControls2');

							$(dayControlBottom2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderBottom2 .bottomControls2');

							$(yearControlBottom2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .controlsHolderBottom2 .bottomControls2');		

							$(finalMonth2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 ');

							$(finalDay2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2  .dayHolder2');		

							$(finalYear2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2 .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 ');

							$(stringData2).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .columnHolder2 .datePickerDetailsHolder2');					


						/* This is for column2 DOM */		

						/* bottom Options DOM */

							$(bottomOptions).appendTo(parentId + '> .mainDatePickerHolder .upperHolder ');

							$(calendarOption).appendTo(parentId + '> .mainDatePickerHolder .upperHolder  .bottomOptions');

							$(calendarOptionList).appendTo(parentId + '> .mainDatePickerHolder .upperHolder  .bottomOptions .calendarOption');

							$(calendarOptionListIcon).appendTo(parentId + '> .mainDatePickerHolder .upperHolder  .bottomOptions .calendarOption .calendarOptionList');

							$(calendarOptionListLabel).appendTo(parentId + '> .mainDatePickerHolder .upperHolder  .bottomOptions .calendarOption .calendarOptionList');

							$('.calendarOptionListLabel').html('Apply');

							$(calendarOptionClose).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption');

							$(calendarClose).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .calendarOption .calendarOptionClose');					

						/* bottom Options DOM */

					/* ========== dom creation ========== */


					var today = new Date();
					
					var dd = today.getDate();
					
					var monthsList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
					
					var dayList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

					var mm = monthsList[today.getMonth()];
					
					var yyyy = today.getFullYear();		

					/* ========== END OF LEAP YEAR ============ */

						var yyyyLimit = yyyy + maxYear;

						var now=mm+'/'+dd+'/'+yyyy;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];
						
						var limitAll = 0;

						var limitFeb = 0;

						if (yyyy%4==0){

							limitFeb = 29;

						} else {

							limitFeb = 28;

						}

						var newSelectedIndex = 	jQuery.inArray(mm, monthsList );

						if(newSelectedIndex<=6){

							if(newSelectedIndex%2 == 0){

								limitAll=31;

							}else if (newSelectedIndex == 1){

								limitAll = limitFeb;

							}else{

								limitAll=30;

							}
						}else{

							if(newSelectedIndex%2 != 0){

								limitAll=31;

							}else{

								limitAll=30;

							}

						}

					/* ========== END OF LEAP YEAR ============ */

					var selectedDate = 0;	

					var fMonth = mm;

					var fDay = today.getDate();

					var fYear = today.getFullYear();

					if ( showDay == 'yes') {

							dayTodayStr = ' - ' + dayToday;

					} else {

							dayTodayStr = '';

					}	

					var fString = $(parentId + ' .stringData, ' + parentId + ' .stringData2').html(fMonth+' '+fDay+', '+fYear+dayTodayStr);	

					$(element).val($(parentId + ' .stringData, ' + parentId + ' .stringData2').html());		

					function getLimitofDate(){

							var newSelectedIndex = 	jQuery.inArray($('.mainDatePickerContents .selectedMonth, .mainDatePickerContents2 .selectedMonth ').text(), monthsList )-1;
						
							var currentYear = $('.mainDatePickerContents .selectedYear, .mainDatePickerContents2 .selectedYear').text();

							var currentDate=$('.mainDatePickerContents .selectedDay, .mainDatePickerContents2 .selectedDay').text();

							var lastDate=$( "ul.daySelector li:last span, ul.daySelector2 li:last span" ).text();

							var leap=false;
							
									var templimitAll=0;

									/*FOR LEAP YEAR*/

									if(currentYear%4==0){

										limitFeb = 29;

										leap=true;

									}else{

										limitFeb = 28;

									}
									

									if(newSelectedIndex<=6){

										if(newSelectedIndex%2 == 0){

											templimitAll=31;

										}else if (newSelectedIndex == 1){

											templimitAll = limitFeb;

										}else{

											templimitAll=30;

										}

									}else{

										if(newSelectedIndex%2 != 0){

											templimitAll=31;

										}else{

											templimitAll=30;

										}

									}
									
									/*END OF LEAP YEAR*/

									if(lastDate!=templimitAll){

										var diff=templimitAll-lastDate;

										var x=0;

										var isChose=false;

										/*CHECK IF DAYS WILL BE ERASE*/

										if(diff<0){ /* DAYS WILL BE ERASE */
											
											while(templimitAll!=lastDate){

												if(currentDate==lastDate){

													isChose=true;

												}
												
												$( "ul.daySelector li span."+lastDate + ", ul.daySelector2 li span."+lastDate ).parent().remove();

												lastDate--;

											}
											
										}else{ /* DAYS WILL BE ADDED */

											while(templimitAll>lastDate){

												++lastDate;

												var htmlContent='<li class="days"><span class="dateLabel '+lastDate+'">'+lastDate+'</span></li>';

												var htmlContent2='<li class="days"><span class="dateLabel2 '+lastDate+'">'+lastDate+'</span></li>';

												$( "ul.daySelector").append(htmlContent);

												$( "ul.daySelector2").append(htmlContent2);
												
											}

										}

										if(isChose==true){ /*CHECK IF THE CHOSEN DAY WILL BE ERASED */

											var diff=currentDate-templimitAll;

											var lessMargin=diff*20;
											
											$( "ul.daySelector li span."+templimitAll ).parent().addClass('selectedDay');

											$( "ul.daySelector2 li span."+templimitAll ).parent().addClass('selectedDay');
											
											var currMargin=$( "ul.daySelector").css('marginTop').replace(/[^-\d\.]/g, '');

											var currMargin2=$( "ul.daySelector2").css('marginTop').replace(/[^-\d\.]/g, '');
											
											var updateMargin=parseInt(currMargin)+parseInt(lessMargin);

											var updateMargin2=parseInt(currMargin2)+parseInt(lessMargin);

											$( "ul.daySelector").css('marginTop',updateMargin+'px');

											$( "ul.daySelector2").css('marginTop',updateMargin2+'px');

										}
										
									}


					}

					function monthListSelector(option) {
						
						if (option == 'top') {

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li');

							var currIndex = $(parentId + ' .mainDatePickerContents .selectedMonth').index();

							listName.removeClass('selectedMonth');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child('+nextIndex+')').addClass('selectedMonth');

							//getLimitofDate();

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents .selectedMonth').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();
							
							var ulHeight = 0;
								
								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});						

							//var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);
								
							if (newSelectedIndex > 12) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child(2)').addClass('selectedMonth');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							}

							
						} else if (option == 'bottom') {

								var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li');

								var currIndex = $(parentId + ' .mainDatePickerContents .selectedMonth').index();

								listName.removeClass('selectedMonth');

								var nextIndex = currIndex - parseInt(0);

								var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child('+nextIndex+')').addClass('selectedMonth');

								//getLimitofDate();

								var newSelectedIndex = 	$( parentId +  ' .mainDatePickerContents .selectedMonth').index();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();
								
								var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

								var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);							

								if (newSelectedIndex <= 0) {								

									listName.removeClass('selectedMonth');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li:nth-child(13)').addClass('selectedMonth');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

										'margin-top':'-'+newMarginTop

									},sSpeed);

									

									//console.log(newSelectedIndex+' '+newMarginTop);	

								} else {
						

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').animate({

									'margin-top':'-'+totalSelectedIndexHeight+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);

								}

						}

					
						

						selectedDate = $(parentId + ' .mainDatePickerContents .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .mainDatePickerContents .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .mainDatePickerContents .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

								dayTodayStr = ' - ' + dayToday;

						} else {

								dayTodayStr = '';

						}							
						
						var fString = $(parentId +  ' .stringData').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html() + ' to ' + $(parentId + ' .stringData2').html());
		
					}

					function monthListSelector2(option) {
						
						if (option == 'top') {

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li');

							var currIndex = $(parentId + ' .mainDatePickerContents2 .selectedMonth').index();

							listName.removeClass('selectedMonth');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li:nth-child('+nextIndex+')').addClass('selectedMonth');

							//getLimitofDate();

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents2 .selectedMonth').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();
							
							var ulHeight = 0;
								
								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});						

							//var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);
								
							if (newSelectedIndex > 12) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li:nth-child(2)').addClass('selectedMonth');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							}

							
						} else if (option == 'bottom') {

								var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li');

								var currIndex = $(parentId + ' .mainDatePickerContents2 .selectedMonth').index();

								listName.removeClass('selectedMonth');

								var nextIndex = currIndex - parseInt(0);

								var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li:nth-child('+nextIndex+')').addClass('selectedMonth');

								//getLimitofDate();

								var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents2 .selectedMonth').index();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();
								
								var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

								var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);							

								if (newSelectedIndex <= 0) {								

									listName.removeClass('selectedMonth');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li:nth-child(13)').addClass('selectedMonth');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2').animate({

										'margin-top':'-'+newMarginTop

									},sSpeed);

									

									//console.log(newSelectedIndex+' '+newMarginTop);	

								} else {
						

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2').animate({

									'margin-top':'-'+totalSelectedIndexHeight+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);

								}

						}

					
						

						selectedDate = $(parentId + ' .mainDatePickerContents2 .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .mainDatePickerContents2 .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .mainDatePickerContents2 .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

								dayTodayStr = ' - ' + dayToday;

						} else {

								dayTodayStr = '';

						}						
						
						var fString = $(parentId + ' .stringData2').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html() + ' to ' + $(parentId + ' .stringData2').html());		
		
					}				

					function dayListSelector(option) {

						if (option == 'top') {

							var x = $(parentId + ' .daySelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents .selectedDay').index();

							listName.removeClass('selectedDay');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child('+nextIndex+')').addClass('selectedDay');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents .selectedDay').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							if (newSelectedIndex == -1) {

							listName.removeClass('selectedDay');	

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child(2)').addClass('selectedDay');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			


							}

						} else if (option == 'bottom') {

							var x = $('.daySelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents .selectedDay').index();

							listName.removeClass('selectedDay');

							var nextIndex = currIndex - parseInt(0);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child('+nextIndex+')').addClass('selectedDay');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents .selectedDay').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3)+20;	

							

						
							var	limit=parseInt($( "ul.daySelector li:last span" ).text())+1;
							
						
							if (newSelectedIndex <= 0) {

								listName.removeClass('selectedDay');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li:nth-child('+limit+')').addClass('selectedDay');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

									'margin-top':'-'+newMarginTop+'px'

								},sSpeed);	

							} else {
					

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);	

							//console.log(newSelectedIndex);

							}

						}

						selectedDate = $(parentId + ' .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

								dayTodayStr = ' - ' + dayToday;

						} else {

								dayTodayStr = '';

						}							
						
						var fString = $(parentId + ' .stringData').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html() + ' to ' + $(parentId + ' .stringData2').html());

					}

					function dayListSelector2(option) {

						if (option == 'top') {

							var x = $('.daySelector2 li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents2 .selectedDay').index();

							listName.removeClass('selectedDay');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li:nth-child('+nextIndex+')').addClass('selectedDay');

							var newSelectedIndex = 	$('.mainDatePickerContents2 .selectedDay').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							if (newSelectedIndex == -1) {

							listName.removeClass('selectedDay');	

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li:nth-child(2)').addClass('selectedDay');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			


							}

						} else if (option == 'bottom') {

							var x = $('.daySelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents2 .selectedDay').index();

							listName.removeClass('selectedDay');

							var nextIndex = currIndex - parseInt(0);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li:nth-child('+nextIndex+')').addClass('selectedDay');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents2 .selectedDay').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3)+20;	

							

						
							var	limit=parseInt($( "ul.daySelector li:last span" ).text())+1;
							
						
							if (newSelectedIndex <= 0) {

								listName.removeClass('selectedDay');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li:nth-child('+limit+')').addClass('selectedDay');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').animate({

									'margin-top':'-'+newMarginTop+'px'

								},sSpeed);	

							} else {
					

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);	

							//console.log(newSelectedIndex);

							}

						}

						selectedDate = $(parentId + ' .mainDatePickerContents2 .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .mainDatePickerContents2 .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .mainDatePickerContents2 .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);

						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

								dayTodayStr = ' - ' + dayToday;

						} else {

								dayTodayStr = '';

						}						
						
						var fString = $(parentId + ' .stringData2').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html() + ' to ' + $(parentId + ' .stringData2').html());

					}				

					function yearListSelector(option) {

						if (option == 'top') {

							var x = $('.yearSelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents .selectedYear').index();

							listName.removeClass('selectedYear');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child('+nextIndex+')').addClass('selectedYear');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents .selectedYear').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var limit=parseInt(yyyyLimit)-1900-1;

							//getLimitofDate();
							
							if (newSelectedIndex >= limit) {

							listName.removeClass('selectedYear');	

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child(2)').addClass('selectedYear');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							//console.log(newSelectedIndex);

							}

						} else if ('bottom') {

							var x = $('.yearSelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents .selectedYear').index();

							listName.removeClass('selectedYear');

							var nextIndex = currIndex - parseInt(0);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child('+nextIndex+')').addClass('selectedYear');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents .selectedYear').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);	

							var limit=parseInt(yyyyLimit)-1900-1;

							//getLimitofDate();

							if (newSelectedIndex <= 0) {

								listName.removeClass('selectedYear');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li:nth-child('+limit+')').addClass('selectedYear');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

									'margin-top':'-'+newMarginTop+'px'

								},sSpeed);	

							} else {
					

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);	

							//console.log(newSelectedIndex);

							}

						}

						selectedDate = $(parentId + ' .mainDatePickerContents .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .mainDatePickerContents .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .mainDatePickerContents .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);
				
						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

								dayTodayStr = ' - ' + dayToday;

						} else {

								dayTodayStr = '';

						}							
						
						var fString = $(parentId + ' .stringData').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html() + ' to ' + $(parentId + ' .stringData2').html());	


					}

					function yearListSelector2(option) {

						if (option == 'top') {

							var x = $('.yearSelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents2 .selectedYear').index();

							listName.removeClass('selectedYear');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li:nth-child('+nextIndex+')').addClass('selectedYear');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents2 .selectedYear').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var limit=parseInt(yyyyLimit)-1900-1;

							//getLimitofDate();
							
							if (newSelectedIndex >= limit) {

							listName.removeClass('selectedYear');	

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li:nth-child(2)').addClass('selectedYear');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').animate({

								'margin-top':0+'px'

							},sSpeed);	

							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							//console.log(newSelectedIndex);

							}

						} else if ('bottom') {

							var x = $('.yearSelector li').outerHeight();

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li');

							var y = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').css('margin-top').replace(/[^-\d\.]/g, '');

							var deductMargin = y - x;

							var currIndex = $(parentId + ' .mainDatePickerContents2 .selectedYear').index();

							listName.removeClass('selectedYear');

							var nextIndex = currIndex - parseInt(0);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li:nth-child('+nextIndex+')').addClass('selectedYear');

							var newSelectedIndex = 	$(parentId + ' .mainDatePickerContents2 .selectedYear').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
									
									listName.each(function(){

										ulHeight += $(this).outerHeight();

									});		

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);	

							var limit=parseInt(yyyyLimit)-1900-1;

							//getLimitofDate();

							if (newSelectedIndex <= 0) {

								listName.removeClass('selectedYear');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li:nth-child('+limit+')').addClass('selectedYear');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').animate({

									'margin-top':'-'+newMarginTop+'px'

								},sSpeed);	

							} else {
					

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);	

							//console.log(newSelectedIndex);

							}

						}

						selectedDate = $(parentId + ' .mainDatePickerContents2 .selectedMonth span').attr('class').split(' ')[1];

						selectedDay = $(parentId + ' .mainDatePickerContents2 .selectedDay span').attr('class').split(' ')[1];

						selectedYear = $(parentId + ' .mainDatePickerContents2 .selectedYear span').attr('class').split(' ')[1];

						fMonth = selectedDate;

						var now=selectedDate+'/'+selectedDay+'/'+selectedYear;

						var today2 = new Date(now);
				
						var dayToday=dayList[today2.getDay()];

						if ( showDay == 'yes') {

								dayTodayStr = ' - ' + dayToday;

						} else {

								dayTodayStr = '';

						}						
						
						var fString = $(parentId + ' .stringData2').html(fMonth+' '+selectedDay+', '+selectedYear+dayTodayStr);	

						$(element).val($(parentId + ' .stringData').html() + ' to ' + $(parentId + ' .stringData2').html());			


					}				


					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector').val().length == 0) {

						var monthsList = ['&nbsp;','January','February','March','April','May','June','July','August','September','October','November','December','&nbsp;']

						$.each(monthsList, function(index,value) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .monthSelector').append('<li class="months"><span class="dateLabel '+value+'">'+value+'</span></li>');

						});

					}

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2').val().length == 0) {

						var monthsList = ['&nbsp;','January','February','March','April','May','June','July','August','September','October','November','December','&nbsp;']

						$.each(monthsList, function(index,value) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2 .monthSelector2').append('<li class="months"><span class="dateLabel2 '+value+'">'+value+'</span></li>');

						});

					}				
					

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector .'+mm).parent().addClass('selectedMonth');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 .'+mm).parent().addClass('selectedMonth');
				

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li').each(function(){

						if($(this).hasClass('selectedMonth')){

								var totalPrevListHeight = 0;

								var currentListHeight = $(this).prevAll().each(function(){

									totalPrevListHeight += $(this).outerHeight();

								});

								var finalListHeight = totalPrevListHeight - ($(this).outerHeight());

								$(this).parent().css({

									'margin-top':'-'+finalListHeight+'px'
								
								});

								//console.log(totalPrevMonthListHeight);

						}

					});

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li').each(function(){

						if($(this).hasClass('selectedMonth')){

								var totalPrevListHeight = 0;

								var currentListHeight = $(this).prevAll().each(function(){

									totalPrevListHeight += $(this).outerHeight();

								});

								var finalListHeight = totalPrevListHeight - ($(this).outerHeight());

								$(this).parent().css({

									'margin-top':'-'+finalListHeight+'px'
								
								});

								//console.log(totalPrevMonthListHeight);

						}

					});				

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .dayHolder .daySelector').val().length == 0) {
						var x=0;
						var tempLimitAll=limitAll;

						if(limitAll==30){
							tempLimitAll = tempLimitAll + 2;
						}else{
							tempLimitAll = tempLimitAll + 1;
						}
							

						for (var i = 0, limit = tempLimitAll; i < limit; i++) {

							if(i>limitAll)
								continue;
							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .daySelector').append('<li class="days"><span class="dateLabel '+i+'">'+i+'</span></li>');
							x++;
						}
						if(limitAll==30){
							x = x+1;
						}
						$(parentId + ' span.0, ' + parentId + ' span.'+x).html('&nbsp;');

					}

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2 .dayHolder2 .daySelector2').val().length == 0) {
						var x=0;
						var tempLimitAll=limitAll;

						if(limitAll==30){
							tempLimitAll = tempLimitAll + 2;
						}else{
							tempLimitAll = tempLimitAll + 1;
						}
							

						for (var i = 0, limit = tempLimitAll; i < limit; i++) {

							if(i>limitAll)
								continue;
							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2 .daySelector2').append('<li class="days"><span class="dateLabel2 '+i+'">'+i+'</span></li>');
							x++;
						}
						if(limitAll==30){
							x = x+1;
						}

						$(parentId + ' span.0, ' + parentId + ' span.'+x).html('&nbsp;');
					
					}				

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector .'+dd).parent().addClass('selectedDay');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 .'+dd).parent().addClass('selectedDay');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li').each(function(){

						if($(this).hasClass('selectedDay')){

								var totalPrevDayListHeight = 0;

								var currentDaysListHeight = $(this).prevAll().each(function(){

									totalPrevDayListHeight += $(this).outerHeight();

								});

								var finalDayListHeight = totalPrevDayListHeight - ($(this).outerHeight());

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector').css({

									'margin-top':'-'+finalDayListHeight+'px'
								
								});


						}


					});

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li').each(function(){

						if($(this).hasClass('selectedDay')){

								var totalPrevDayListHeight = 0;

								var currentDaysListHeight = $(this).prevAll().each(function(){

									totalPrevDayListHeight += $(this).outerHeight();

								});

								var finalDayListHeight = totalPrevDayListHeight - ($(this).outerHeight());

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2').css({

									'margin-top':'-'+finalDayListHeight+'px'
								
								});


						}


					});							
				

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .yearHolder .yearSelector').val().length == 0) {

						for (var i = 1900, limit = yyyyLimit; i < limit; i++) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .yearSelector').append('<li class="years"><span class="dateLabel '+i+'">'+i+'</span></li>');

						}

					}	

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2 .yearHolder2 .yearSelector2').val().length == 0) {

						for (var i = 1900, limit = yyyyLimit; i < limit; i++) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2 .yearSelector2').append('<li class="years"><span class="dateLabel2 '+i+'">'+i+'</span></li>');

						}

					}		


					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector .'+yyyy).parent().addClass('selectedYear');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 .'+yyyy).parent().addClass('selectedYear');				

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li').each(function(){

						if($(this).hasClass('selectedYear')){

								var totalPrevYearListHeight = 0;

								var currentYearListHeight = $(this).prevAll().each(function(){

									totalPrevYearListHeight += $(this).outerHeight();

								});

								var finalYearListHeight = totalPrevYearListHeight - ($(this).outerHeight());

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector').css({

									'margin-top':'-'+finalYearListHeight+'px'
								
								});

						}


					});	

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li').each(function(){

						if($(this).hasClass('selectedYear')){

								var totalPrevYearListHeight = 0;

								var currentYearListHeight = $(this).prevAll().each(function(){

									totalPrevYearListHeight += $(this).outerHeight();

								});

								var finalYearListHeight = totalPrevYearListHeight - ($(this).outerHeight());

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2').css({

									'margin-top':'-'+finalYearListHeight+'px'
								
								});

						}


					});							

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls li').each(function(){

						$(this).append('<span class="controlArrow"></span>')

					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom2 .bottomControls2 li').each(function(){

						$(this).append('<span class="controlArrow2"></span>')

					});					

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .monthControl').click(function(){

						monthListSelector('top');

					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop2 .monthControl2').click(function(){

						monthListSelector2('top');

					});	

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .dayControl').click(function(){

						dayListSelector('top');		

					});									

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop2 .dayControl2').click(function(){

						dayListSelector2('top');		

					});							

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop  .yearControl').click(function(){

						yearListSelector('top');
				
					});			

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop2 .yearControl2').click(function(){

						yearListSelector2('top');
				
					});								
						

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom  .monthControl').click(function(){

						monthListSelector('bottom');

					});	

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom2 .monthControl2').click(function(){

						monthListSelector2('bottom');

					});						


					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .dayControl').click(function(){

						dayListSelector('bottom');

					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom2 .dayControl2').click(function(){

						dayListSelector2('bottom');

					});					

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .yearControl').click(function(){

						yearListSelector('bottom');

					});				

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom2 .yearControl2').click(function(){

						yearListSelector2('bottom');

					});	


					var scriptUrl = 'js/jquery.mousewheel.js';

					var listDOMMonth = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .monthHolder .monthSelector li');

					var listDOMDay = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .dayHolder .daySelector li');

					var listDOMYear = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .yearHolder .yearSelector li');

					var listDOMMonth2 = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .monthHolder2 .monthSelector2 li');

					var listDOMDay2 = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .dayHolder2 .daySelector2 li');

					var listDOMYear2 = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents2 .dateContensHolder2  .yearHolder2 .yearSelector2 li');				


					var mouseWheelCode = function() {					

						var totalDelta = 0;

						listDOMMonth.bind('mousewheel',function(event,delta){			

							totalDelta += delta;

							if (delta > 0) {

								monthListSelector('top');


							}	else {

								monthListSelector('bottom');

							}


							event.preventDefault();

						});

						listDOMMonth2.bind('mousewheel',function(event,delta){			

							totalDelta += delta;

							if (delta > 0) {

								monthListSelector2('top');


							}	else {

								monthListSelector2('bottom');

							}


							event.preventDefault();

						});					

						listDOMDay.bind('mousewheel',function(event,delta){

							totalDelta += delta;

							if (delta > 0) {

								dayListSelector('top');


							}	else {

								dayListSelector('bottom');

							}


							event.preventDefault();

						});

						listDOMDay2.bind('mousewheel',function(event,delta){

							totalDelta += delta;

							if (delta > 0) {

								dayListSelector2('top');


							}	else {

								dayListSelector2('bottom');

							}


							event.preventDefault();

						});					

						listDOMYear.bind('mousewheel',function(event,delta){

							if (delta > 0) {

								yearListSelector('top');


							}	else {

								yearListSelector('bottom');

							}


							event.preventDefault();

						});

						listDOMYear2.bind('mousewheel',function(event,delta){

							if (delta > 0) {

								yearListSelector2('top');


							}	else {

								yearListSelector2('bottom');

							}


							event.preventDefault();

						});					

					}						


					loadScript(scriptUrl,mouseWheelCode);	


				} else if  (wType == 'time') {

					/* ========= dom creation ======== */

						var getParentId = $(element).parent().attr('id');

						var parentId = '#'+getParentId;

						$(mainDatePickerHolder).appendTo(parentId);

						$(bigArrowHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(upperHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(lowerHolder).appendTo(parentId + '> .mainDatePickerHolder');

						$(controlsHolderTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(topControls).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop');

						$(hoursControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls');

						$(minutesControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls');

						$(ampmControlTop).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls');				

						$(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderTop .topControls li').each(function(){

							$(this).append('<span class="controlArrow"></span>')

						});



						$(mainDatePickerContents).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(topShadow).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents');

						$(bottomShadow).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents');

						$(dateContensHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents');

						$(hoursHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder');

						$(minutesHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder');

						$(ampmHolder).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder');

						$(hoursSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder .hoursHolder');

						$(minutesSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder .minutesHolder');

						$(ampmSelector).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder .ampmHolder');

						$(controlsHolderBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(bottomOptions).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(timeOption).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions');

						$(timeOptionList).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .timeOption');

						$(timeOptionListIcon).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .timeOption .timeOptionList');

						$(timeOptionListLabel).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .timeOption .timeOptionList');

						$('.timeOptionListLabel').html('Set Time');

						$(timeOptionClose).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .timeOption');

						$(timeClose).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .bottomOptions .timeOption .timeOptionClose');

						$(bottomControls).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom');

						$(hoursControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls');

						$(minutesControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls');

						$(ampmControlBottom).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls');		

						$(finalHours).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder  .hoursHolder ');

						$(finalMinutes).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder  .minutesHolder');		

						$(finalAmPm).appendTo(parentId + '> .mainDatePickerHolder .upperHolder .mainDatePickerContents .dateContensHolder  .ampmHolder ');

						$(stringData).appendTo(parentId + '> .mainDatePickerHolder .upperHolder');

						$(parentId + '> .mainDatePickerHolder .upperHolder .controlsHolderBottom .bottomControls li').each(function(){

							$(this).append('<span class="controlArrow"></span>')

						});

					/* ========= dom creation ======== */

					var today = new Date();

					
					var hours = today.getHours();

					var newHour = 0;


					if (hours > 12) {

						var tempHr = hours - 12;

						newHour = '0'+tempHr;

					} else {

						if (hours <= 9) {

							newHour = '0'+hours;

						} else {

							newHour = hours;

						}

					}

					//console.log(newHour);

					var minutes = today.getMinutes();

					var newMinutes = 0;

					if (minutes <= 9) {

						newMinutes = '0'+minutes;

					} else {

						newMinutes = minutes;

					}

					 //console.log(newMinutes);

					var currentampm = (hours+24-2)%24;

					var mid = 'AM';

						if (hours==0){
					    		
					    		hours=12;
					    
					    } else if (hours>12) {

						    hours=hours%12;
						    
						    mid='PM';
					    
					    }

					 //console.log(mid);   

					var selectedTime = 0;	

					var fHours = newHour;

					var fMinutes = newMinutes;

					var fMid = mid;

					$(parentId + ' .stringData').html(fHours+' : '+fMinutes+' '+fMid);			

					$(element).val($(parentId + ' .stringData').html());		

					function hoursListSelector(option) {

						if (option == 'top') {

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li');

							var currIndex = $(parentId + ' .selectedHour').index();

							listName.removeClass('selectedHour');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child('+nextIndex+')').addClass('selectedHour');

							var newSelectedIndex = 	$(parentId + ' .selectedHour').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
								
								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});						

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);


							//console.log(newSelectedIndex);


							if (newSelectedIndex == 11) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child(12)').addClass('selectedHour');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

								'margin-top':'-'+newMarginTop+'px'

							},sSpeed);	


							} else if (newSelectedIndex == 12) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child(0)').addClass('selectedHour');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

								'margin-top': '-'+newMarginTop - listName.outerHeight() +'px'

							},sSpeed);	


							} else if (newSelectedIndex < 0) {

							listName.removeClass('selectedHour');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child(1)').addClass('selectedHour');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

								'margin-top': listName.outerHeight()+'px'

							},sSpeed);	


							} else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							}

							
						} else if (option == 'bottom') {

								var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li');

								var currIndex = $(parentId + ' .selectedHour').index();

								listName.removeClass('selectedHour');

								var nextIndex = currIndex - parseInt(0);

								var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child('+nextIndex+')').addClass('selectedHour');

								var newSelectedIndex = 	$(parentId + ' .selectedHour').index();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

								var ulHeight = 0;

								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});

								var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*2);



								//console.log(ulHeight);

								if (newSelectedIndex == 0) {

									listName.removeClass('selectedHour');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child(1)').addClass('selectedHour');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

										'margin-top': listName.outerHeight()+'px'

									},sSpeed);	
									



								} else if ( newSelectedIndex < 0) {

									listName.removeClass('selectedHour');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li:nth-child(13)').addClass('selectedHour');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

										'margin-top': '-'+newMarginTop +'px'

									},sSpeed);	


								} else {
						
								console.log(newSelectedIndex);

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').animate({

									'margin-top':'-'+totalSelectedIndexHeight+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);

								}

						}

						selectedTime = $(parentId + ' .selectedHour span').attr('class').split(' ')[1];

						fHours = selectedTime;

						var fString = $(parentId + ' .stringData').html(fHours+' : '+fMinutes+' '+fMid);	

						$(element).val($(parentId + ' .stringData').html());		

					}

					function minutesListSelector(option) {

						if (option == 'top') {

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li');

							var currIndex = $(parentId + ' .selectedMinutes').index();

							listName.removeClass('selectedMinutes');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child('+nextIndex+')').addClass('selectedMinutes');

							var newSelectedIndex = 	$(parentId + ' .selectedMinutes').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;
								
								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});						

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);	

							//console.log(newSelectedIndex);					

							if (newSelectedIndex == 59) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child(0)').addClass('selectedMinutes');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

								'margin-top':'-'+newMarginTop+'px'

							},sSpeed);	

							} else if (newSelectedIndex == 60) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child(1)').addClass('selectedMinutes');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

								'margin-top': listName.outerHeight()+'px'

							},sSpeed);	


							} else if (newSelectedIndex < 0) {

							listName.removeClass('selectedHour');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child(0)').addClass('selectedMinutes');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

								'margin-top': listName.outerHeight()+'px'

							},sSpeed);	


							}  else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							}

							//console.log(newSelectedIndex);

							
						} else if (option == 'bottom') {

								var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li');

								var currIndex = $(parentId + ' .selectedMinutes').index();

								listName.removeClass('selectedMinutes');

								var nextIndex = currIndex - parseInt(0);

								var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child('+nextIndex+')').addClass('selectedMinutes');

								var newSelectedIndex = 	$(parentId + ' .selectedMinutes').index();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

								var ulHeight = 0;

								listName.each(function(){

									ulHeight += $(this).outerHeight();

								});

								var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight()*3);				

								//console.log(newSelectedIndex);			

								if (newSelectedIndex == 0) {

									listName.removeClass('selectedMinutes');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child(1)').addClass('selectedMinutes');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

										'margin-top':listName.outerHeight()+'px'

									},sSpeed);	

								} else if ( newSelectedIndex < 0) {

									listName.removeClass('selectedHour');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li:nth-child(60)').addClass('selectedMinutes');

									$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

										'margin-top': '-'+newMarginTop+'px'

									},sSpeed);	


								} else {
						

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').animate({

									'margin-top':'-'+totalSelectedIndexHeight+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);

								}

						}

						selectedTime = $(parentId + ' .selectedMinutes span').attr('class').split(' ')[1];

						fMinutes = selectedTime;

						var fString = $(parentId + ' .stringData').html(fHours+' : '+fMinutes+' '+fMid);	

						$(element).val($(parentId + ' .stringData').html());		

					}

					function midListSelector(option) {

						if (option == 'top') {

							var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li');

							var currIndex = $(parentId + ' .selectedMid').index();

							listName.removeClass('selectedMid');

							var nextIndex = currIndex + parseInt(2);

							var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li:nth-child('+nextIndex+')').addClass('selectedMid');

							var newSelectedIndex = 	$(parentId + ' .selectedMid').index();

							var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

							var ulHeight = 0;

								listName.each(function(){

									ulHeight += $(this).outerHeight();

							});

							var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight());				

							console.log(newSelectedIndex);							

							if (newSelectedIndex ==  1) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li:nth-child(0)').addClass('selectedMid');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector').animate({

								'margin-top':0+'px'

							},sSpeed);	

							 // /console.log(newMarginTop);

							}  else if (newSelectedIndex <= 0 ) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li:nth-child(1)').addClass('selectedMid');

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector').animate({

								'margin-top':listName.outerHeight()+'px'

							},sSpeed);	

							// console.log(newSelectedIndex);

							} else {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector').animate({

								'margin-top':'-'+totalSelectedIndexHeight+'px'

							},sSpeed);			

							}

							
						} else if (option == 'bottom') {

								var listName = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li');

								var currIndex = $(parentId + ' .selectedMid').index();

								listName.removeClass('selectedMid');

								var nextIndex = currIndex - parseInt(0);

								var moveToNext = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li:nth-child('+nextIndex+')').addClass('selectedMid');

								var newSelectedIndex = 	$(parentId + ' .selectedMid').index();

								var totalSelectedIndexHeight = newSelectedIndex * listName.outerHeight() - listName.outerHeight();

								var ulHeight = 0;

									listName.each(function(){

										ulHeight += $(this).outerHeight();

								});

								var newMarginTop = parseInt(ulHeight) - parseInt(listName.outerHeight());							

								if (newSelectedIndex == 0) {

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li:nth-child(1)').addClass('selectedMid');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector').animate({

									'margin-top':listName.outerHeight()+'px'

								},sSpeed);

								//console.log(newSelectedIndex);	

								} else if (newSelectedIndex < 0) {

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li:nth-child(2)').addClass('selectedMid');

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector').animate({

								'margin-top':0+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);								

								} else {
						

								$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector').animate({

									'margin-top':0+'px'

								},sSpeed);	

								//console.log(newSelectedIndex);

								}

						}

						selectedTime = $(parentId + ' .selectedMid span').attr('class').split(' ')[1];

						fMid = selectedTime;

						var fString = $(parentId + ' .stringData').html(fHours+' : '+fMinutes+' '+fMid);	

						$(element).val($(parentId + ' .stringData').html());		

					}

					//console.log($('.selectedMid').index());



					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector').val().length == 0) {

						for (var i = 0, limit = 10; i < limit; i++) {


							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .hoursSelector').append('<li class="time"><span class="timeLabel '+0+i+'">'+0+i+'</span></li>');

						}
						for (var i = 10, limit = 13; i < limit; i++) {


							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .hoursSelector').append('<li class="time"><span class="timeLabel '+i+'">'+i+'</span></li>');

						}					



					}
					

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector .'+newHour).parent().addClass('selectedHour');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li').each(function(){

						if($(this).hasClass('selectedHour')){

								var parentUl = $(this).parent().css('margin-top').replace('px','');

								var selectedIndex = $(this).index();

								var newTotal = parseInt(parentUl) - parseInt((selectedIndex * $(this).outerHeight())) + parseInt($(this).outerHeight());

								$(this).parent().css({

										'margin-top':newTotal+'px'

								});

								//console.log(totalPrevMonthListHeight);

						}

					});		

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector').val().length == 0) {

						for (var i = 0, limit =10; i < limit; i++) {


							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .minutesSelector').append('<li class="time"><span class="timeLabel '+0+i+'">'+0+i+'</span></li>');

						}

						for (var i = 10, limit = 61; i < limit; i++) {


							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .minutesSelector').append('<li class="time"><span class="timeLabel '+i+'">'+i+'</span></li>');

						}

					}

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector .'+newMinutes).parent().addClass('selectedMinutes');

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li').each(function(){

						if($(this).hasClass('selectedMinutes')){

								var parentUl = $(this).parent().css('margin-top').replace('px','');

								var selectedIndex = $(this).index();

								var newTotal = parseInt(parentUl) - parseInt((selectedIndex * $(this).outerHeight())) + parseInt($(this).outerHeight());

								$(this).parent().css({

										'margin-top':newTotal+'px'

								});

								//console.log(totalPrevMonthListHeight);

						}

					});		

					if ($(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .ampmHolder .ampmSelector').val().length == 0) {

						var midList = ['AM','PM']

						$.each(midList, function(index,value) {

							$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder .ampmSelector').append('<li class="time"><span class="timeLabel '+value+'">'+value+'</span></li>');

						});

					}		

					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector .'+mid).parent().addClass('selectedMid');									


					$(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li').each(function(){

						if($(this).hasClass('selectedMid')){

								var parentUl = $(this).parent().css('margin-top').replace('px','');

								var selectedIndex = $(this).index();

								var newTotal = parseInt(parentUl) - parseInt((selectedIndex * $(this).outerHeight())) + parseInt($(this).outerHeight());

								$(this).parent().css({

										'margin-top':newTotal+'px'

								});

						}

					});	

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .topControls .hoursControlTop').click(function(){

						hoursListSelector('top');

					});			

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .topControls .minutesControlTop').click(function(){

						minutesListSelector('top');		

					});			

					$(parentId + '> .mainDatePickerHolder .controlsHolderTop .topControls .ampmControlTop').click(function(){

						midListSelector('top');
				
					});					
						

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls .hoursControlBottom').click(function(){

						hoursListSelector('bottom');
					});		


					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls .minutesControlBottom').click(function(){

						minutesListSelector('bottom');

					});		

					$(parentId + '> .mainDatePickerHolder .controlsHolderBottom .bottomControls .ampmControlBottom').click(function(){

						midListSelector('bottom');

					});				


					var scriptUrl = 'js/jquery.mousewheel.js';

					var listDOMHour = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .hoursHolder .hoursSelector li');

					var listDOMMinutes = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .minutesHolder .minutesSelector li');

					var listDOMAmPm = $(parentId + '> .mainDatePickerHolder .mainDatePickerContents .dateContensHolder  .ampmHolder .ampmSelector li');

					var mouseWheelCode = function() {

						var totalDelta = 0;

						listDOMHour.bind('mousewheel',function(event,delta){			

							totalDelta += delta;

							if (delta > 0) {

								hoursListSelector('top');


							}	else {

								hoursListSelector('bottom');

							}


							event.preventDefault();

						});

						listDOMMinutes.bind('mousewheel',function(event,delta){

							totalDelta += delta;

							if (delta > 0) {

								minutesListSelector('top');


							}	else {

								minutesListSelector('bottom');

							}


							event.preventDefault();

						});

						listDOMAmPm.bind('mousewheel',function(event,delta){

							if (delta > 0) {

								midListSelector('top');


							}	else {

								midListSelector('bottom');

							}


							event.preventDefault();

						});

					}

					loadScript(scriptUrl,mouseWheelCode);

				}

			/* main date picker implementation */


			$(element).click(function(){

				$('.mainDatePickerHolder').css({

					'z-index':'0'

				});		


				$('.mainDatePickerHolder').css({

					'visibility':'hidden'

				},100);					

				$(parentId + '> .mainDatePickerHolder').css({

					'z-index':101

				});				

				$(parentId + '> .mainDatePickerHolder').css({

					'visibility':'visible'

				},500);
	

			});

			$(parentId +'> .mainDatePickerHolder .calendarClose').click(function(){

				$(parentId + '> .mainDatePickerHolder').css({

					'visibility':'hidden'

				});

				$(parentId + '> .mainDatePickerHolder').css({

						'z-index':0

				});		

			});


			$(parentId +'> .mainDatePickerHolder .timeClose').click(function(){			

				$(parentId + '> .mainDatePickerHolder').css({

					'visibility':'hidden'

				});

				$(parentId + '> .mainDatePickerHolder').css({

						'z-index':0

				});				

			});			

		});

	});


};

})(jQuery);
