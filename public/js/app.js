"use strict";$(function(){function e(t,a,o){clearTimeout(d);var n=t*o.width()/a;o.find("#bar").animate({width:n},500).html(t+"s"),t>0&&(d=setTimeout(function(){e(t-1,a,o)},1e3)),0===t&&(console.log(r),$(".gameRunning").hide(),r.pause(),$(".gameover").fadeIn(),i())}function t(){m.html(""),l.html("Nice. <br>On to the next one.")}function i(){m.html(""),l.html("")}function a(){var t=c.title.shuffle();m.empty();for(var i=0;i<t.length;i++)m.append("<li data-index="+i+">"+t[i]+"</li>");e(15,15,$("#progressBar")),$("#movie_picture").css("background-image","url(public/assets/"+c.image+")"),r.src="public/assets/"+c.audio+".mp3",r.loop=!0,r.play(),u.text(c.hint)}function o(){$(".welcome").fadeOut(),a()}function n(){$(".gameover").hide(),$(".gameRunning").show(),h=0,c=s[h],a()}console.log("Guess Movie Game");var r=$("audio")[0],l=$("#result_list"),m=$("#letters_list"),u=$("#dropdownHint"),s=[{title:"SCREAM",image:"scream.bmp",audio:"scream",hint:"What's your favourite Scary Movie?"},{title:"IRONMAN",image:"ironman.bmp",audio:"ironman",hint:"Heroes aren't born. They're built."},{title:"PREDATOR",image:"predator.bmp",audio:"predator",hint:"Soon the hunt will begin."},{title:"ROBOCOP",image:"robocop.bmp",audio:"robocop",hint:"Part man. Part machine. All cop."},{title:"BATMAN_VS_SUPERMAN",image:"batmanvssuperman.bmp",audio:"batmanvssuperman",hint:"Dawn of Justice"},{title:"GLADIATOR",image:"gladiator.bmp",audio:"gladiator",hint:"Father of a murdered son, husband to a murdered wife and I shall have my vengeance in this life or the next."},{title:"FRIDAY_THE_13TH",image:"fridaythe13th.bmp",audio:"fridaythe13th",hint:"Fridays will never be the same again."},{title:"V_FOR_VENDETTA",image:"vforvendetta.bmp",audio:"vforvendetta",hint:"Remember, remember the 5th of November."},{title:"PHANTOM_OF_THE_OPERA",image:"phantomoftheopera.bmp",audio:"phantomoftheopera"}],h=0,c=s[h],d=null;console.log("Movie:",c),String.prototype.shuffle=function(){for(var e=this.split(""),t=e.length,i=t-1;i>0;i--){var a=Math.floor(Math.random()*(i+1)),o=e[i];e[i]=e[a],e[a]=o}return e.join("")},$("#welcomeBtn").on("click",o),$("#restartBtn").on("click",n),m.on("click","li",function(e){$(e.target).hide();var o=$(e.target).text(),n=$(e.target).data("index");console.log(o),l.append("<li data-index="+n+">"+o+"</li>"),l.text()===c.title&&(clearTimeout(d),r.src="public/assets/correct.mp3",r.loop=!1,r.play(),t(),h<s.length-1&&(h++,c=s[h],i(),setTimeout(a,1800)))}),l.on("click","li",function(e){var t=$(e.target).data("index");m.children().filter(function(e){return e===t}).show(),$(e.target).remove(),console.log($(e.target))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwidGltZXJJZCIsInRpbWVsZWZ0IiwidGltZXRvdGFsIiwiJGVsZW1lbnQiLCJjbGVhclRpbWVvdXQiLCJwcm9ncmVzc0JhcldpZHRoIiwiYW5pbWF0ZSIsIndpZHRoIiwiaHRtbCIsImZpbmQiLCJjb25zb2xlIiwibG9nIiwiYXVkaW8iLCJoaWRlIiwiZmFkZUluIiwiJGxldHRlcnMiLCIkcmVzdWx0IiwiY29uZ3JhdHMiLCJjbGVhckxldHRlcnMiLCJzaHVmZmxlZFdvcmQiLCJjdXJyZW50VGl0bGUiLCJ0aXRsZSIsInNodWZmbGUiLCJlbXB0eSIsImFwcGVuZCIsImxlbmd0aCIsImkiLCJwcm9ncmVzcyIsImNzcyIsImltYWdlIiwibG9vcCIsInBsYXkiLCIkaGludCIsInRleHQiLCJoaW50IiwiaGlkZVdlbGNvbWUiLCJkaXNwbGF5V29yZCIsInJlc3RhcnRHYW1lIiwiY3VycmVudEluZGV4Iiwic2hvdyIsIm1vdmllVGl0bGVzIiwiU3RyaW5nIiwicHJvdG90eXBlIiwiYSIsInRoaXMiLCJzcGxpdCIsIm4iLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG1wIiwiam9pbiIsIm9uIiwidGFyZ2V0IiwiZSIsImxldHRlciIsImluZGV4IiwiZGF0YSIsInNldFRpbWVvdXQiLCJjaGlsZHJlbiIsImZpbHRlciIsImRhdGFJbmRleCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IllBQUFBLEdBQUUsV0F5REEsUUFBSUMsR0FBSkMsRUFBQUMsRUFBQUMsR0FHRUMsYUFBYUosRUFEZixJQUFBSyxHQUFrQkosRUFBVUMsRUFBV0MsUUFBVUQsQ0FDL0NFLEdBQUFBLEtBQWFKLFFBQWJNLFNBQUFDLE1BQUFGLEdBQUEsS0FBQUcsS0FBQVAsRUFBQSxLQUNBQSxFQUFJSSxJQUNKRixFQUFTTSxXQUFhSCxXQUNuQkwsRUFBQUEsRUFBYyxFQUFBQyxFQUFBQyxJQUNmSCxNQUFBLElBQVVDLElBR1hTLFFBQUFDLElBQUFDLEdB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LDRCQUNBQSxFQUFNbUIsTUFBTixFQUNBZCxFQUFBQSxPQUFBQSxJQUtFRyxFQUFlb0IsRUFBWUYsT0FBQUEsSUFDM0JwQixJQUNBeUMsRUFBV3ZCLEVBQWFFLEdBSjFCcEIsSUFNRXlDLFdBQUF2QixFQUFBLFVBc0JKcEIsRUFBQXFDLEdBQUEsUUFBQSxLQUFBLFNBQUFFLEdBQ0E3QyxHQUFBQSxHQUFnQjRDLEVBQUFBLEVBQUpBLFFBQVpJLEtBQUEsUUFURjNDLEdBQUE2QyxXQUFBQyxPQUFBLFNBQUFKLEdBbExGLE1BQUFBLEtBQUFLLElBc0xPdkIsT0FXUHhDLEVBQUF3RCxFQUFBRCxRQUFBUyxTQU5JckQsUUFBUUMsSUFBSVosRUFBRXdELEVBQUVEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnR3Vlc3MgTW92aWUgR2FtZScpO1xuXG4gIGNvbnN0IGF1ZGlvID0gJCgnYXVkaW8nKVswXTtcbiAgY29uc3QgJHJlc3VsdCA9ICQoJyNyZXN1bHRfbGlzdCcpO1xuICBjb25zdCAkbGV0dGVycyA9ICQoJyNsZXR0ZXJzX2xpc3QnKTtcbiAgY29uc3QgJGhpbnQgPSAkKCcjZHJvcGRvd25IaW50Jyk7XG4gIGNvbnN0IG1vdmllVGl0bGVzID0gW3tcbiAgICB0aXRsZTogJ1NDUkVBTScsXG4gICAgaW1hZ2U6ICdzY3JlYW0uYm1wJyxcbiAgICBhdWRpbzogJ3NjcmVhbScsXG4gICAgaGludDogJ1doYXRcXCdzIHlvdXIgZmF2b3VyaXRlIFNjYXJ5IE1vdmllPydcblxuICB9LCB7XG4gICAgdGl0bGU6ICdJUk9OTUFOJyxcbiAgICBpbWFnZTogJ2lyb25tYW4uYm1wJyxcbiAgICBhdWRpbzogJ2lyb25tYW4nLFxuICAgIGhpbnQ6ICdIZXJvZXMgYXJlblxcJ3QgYm9ybi4gVGhleVxcJ3JlIGJ1aWx0LidcblxuICB9LCB7XG4gICAgdGl0bGU6ICdQUkVEQVRPUicsXG4gICAgaW1hZ2U6ICdwcmVkYXRvci5ibXAnLFxuICAgIGF1ZGlvOiAncHJlZGF0b3InLFxuICAgIGhpbnQ6ICdTb29uIHRoZSBodW50IHdpbGwgYmVnaW4uJ1xuICB9LCB7XG4gICAgdGl0bGU6ICdST0JPQ09QJyxcbiAgICBpbWFnZTogJ3JvYm9jb3AuYm1wJyxcbiAgICBhdWRpbzogJ3JvYm9jb3AnLFxuICAgIGhpbnQ6ICdQYXJ0IG1hbi4gUGFydCBtYWNoaW5lLiBBbGwgY29wLidcbiAgfSwge1xuICAgIHRpdGxlOiAnQkFUTUFOX1ZTX1NVUEVSTUFOJyxcbiAgICBpbWFnZTogJ2JhdG1hbnZzc3VwZXJtYW4uYm1wJyxcbiAgICBhdWRpbzogJ2JhdG1hbnZzc3VwZXJtYW4nLFxuICAgIGhpbnQ6ICdEYXduIG9mIEp1c3RpY2UnXG4gIH0sIHtcbiAgICB0aXRsZTogJ0dMQURJQVRPUicsXG4gICAgaW1hZ2U6ICdnbGFkaWF0b3IuYm1wJyxcbiAgICBhdWRpbzogJ2dsYWRpYXRvcicsXG4gICAgaGludDogJ0ZhdGhlciBvZiBhIG11cmRlcmVkIHNvbiwgaHVzYmFuZCB0byBhIG11cmRlcmVkIHdpZmUgYW5kIEkgc2hhbGwgaGF2ZSBteSB2ZW5nZWFuY2UgaW4gdGhpcyBsaWZlIG9yIHRoZSBuZXh0LidcbiAgfSwge1xuICAgIHRpdGxlOiAnRlJJREFZX1RIRV8xM1RIJyxcbiAgICBpbWFnZTogJ2ZyaWRheXRoZTEzdGguYm1wJyxcbiAgICBhdWRpbzogJ2ZyaWRheXRoZTEzdGgnLFxuICAgIGhpbnQ6ICdGcmlkYXlzIHdpbGwgbmV2ZXIgYmUgdGhlIHNhbWUgYWdhaW4uJ1xuICB9LCB7XG4gICAgdGl0bGU6ICdWX0ZPUl9WRU5ERVRUQScsXG4gICAgaW1hZ2U6ICd2Zm9ydmVuZGV0dGEuYm1wJyxcbiAgICBhdWRpbzogJ3Zmb3J2ZW5kZXR0YScsXG4gICAgaGludDogJ1JlbWVtYmVyLCByZW1lbWJlciB0aGUgNXRoIG9mIE5vdmVtYmVyLidcbiAgfSwge1xuICAgIHRpdGxlOiAnUEhBTlRPTV9PRl9USEVfT1BFUkEnLFxuICAgIGltYWdlOiAncGhhbnRvbW9mdGhlb3BlcmEuYm1wJyxcbiAgICBhdWRpbzogJ3BoYW50b21vZnRoZW9wZXJhJ1xuICB9XTtcblxuICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgbGV0IGN1cnJlbnRUaXRsZSA9IG1vdmllVGl0bGVzW2N1cnJlbnRJbmRleF07XG4gIGxldCB0aW1lcklkID0gbnVsbDtcblxuICBmdW5jdGlvbiBwcm9ncmVzcyh0aW1lbGVmdCwgdGltZXRvdGFsLCAkZWxlbWVudCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB2YXIgcHJvZ3Jlc3NCYXJXaWR0aCA9IHRpbWVsZWZ0ICogJGVsZW1lbnQud2lkdGgoKSAvIHRpbWV0b3RhbDtcbiAgICAkZWxlbWVudC5maW5kKCcjYmFyJykuYW5pbWF0ZSh7IHdpZHRoOiBwcm9ncmVzc0JhcldpZHRoIH0sIDUwMCkuaHRtbCh0aW1lbGVmdCArICdzJyk7XG4gICAgaWYodGltZWxlZnQgPiAwKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvZ3Jlc3ModGltZWxlZnQgLSAxLCB0aW1ldG90YWwsICRlbGVtZW50KTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBpZih0aW1lbGVmdCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmxvZyhhdWRpbyk7XG4gICAgICAkKCcuZ2FtZVJ1bm5pbmcnKS5oaWRlKCk7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgJCgnLmdhbWVvdmVyJykuZmFkZUluKCk7XG4gICAgICBjbGVhckxldHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZygnTW92aWU6JywgY3VycmVudFRpdGxlKTtcblxuICBmdW5jdGlvbiBjb25ncmF0cygpIHtcbiAgICAkbGV0dGVycy5odG1sKCcnKTtcbiAgICAkcmVzdWx0Lmh0bWwoJ05pY2UuIDxicj5PbiB0byB0aGUgbmV4dCBvbmUuJyk7XG5cbiAgfVxuICBmdW5jdGlvbiBjbGVhckxldHRlcnMoKSB7XG4gICAgJGxldHRlcnMuaHRtbCgnJyk7XG4gICAgJHJlc3VsdC5odG1sKCcnKTtcbiAgfVxuXG5cbiAgLy8gc2h1ZmZsZSBmdW5jdGlvblxuICBTdHJpbmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGEgPSB0aGlzLnNwbGl0KCcnKSxcbiAgICAgIG4gPSBhLmxlbmd0aDtcblxuICAgIGZvcih2YXIgaSA9IG4gLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgdmFyIHRtcCA9IGFbaV07XG4gICAgICBhW2ldID0gYVtqXTtcbiAgICAgIGFbal0gPSB0bXA7XG4gICAgfVxuICAgIHJldHVybiBhLmpvaW4oJycpO1xuICB9O1xuXG5cbiAgLy8gc2h1ZmZsZWQgd29yZCBhbmQgcGxhY2UgaW4gbGV0dGVyc1xuICBmdW5jdGlvbiBkaXNwbGF5V29yZCgpe1xuICAgIGNvbnN0IHNodWZmbGVkV29yZCA9IGN1cnJlbnRUaXRsZS50aXRsZS5zaHVmZmxlKCk7XG4gICAgJGxldHRlcnMuZW1wdHkoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2h1ZmZsZWQgd29yZCcsIHNodWZmbGVkV29yZCk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgc2h1ZmZsZWRXb3JkLmxlbmd0aDsgaSsrICkge1xuICAgICAgJGxldHRlcnMuYXBwZW5kKGA8bGkgZGF0YS1pbmRleD0ke2l9PiR7c2h1ZmZsZWRXb3JkW2ldfTwvbGk+YCk7XG4gICAgfVxuICAgIHByb2dyZXNzKDE1LCAxNSwgJCgnI3Byb2dyZXNzQmFyJykpO1xuXG4gICAgLy8gaW1hZ2UgY2hhbmdlIHdoZW4gbW92aWUgdGl0bGUgY2hhbmdlc1xuICAgICQoJyNtb3ZpZV9waWN0dXJlJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybChwdWJsaWMvYXNzZXRzLyR7Y3VycmVudFRpdGxlLmltYWdlfSlgKTtcbiAgICAvLyBhdWRpbyBjaGFuZ2Ugd2hlbiBtb3ZpZSB0aXRsZSBjaGFuZ2VzXG4gICAgYXVkaW8uc3JjID0gYHB1YmxpYy9hc3NldHMvJHtjdXJyZW50VGl0bGUuYXVkaW99Lm1wM2A7XG4gICAgYXVkaW8ubG9vcCA9IHRydWU7XG4gICAgYXVkaW8ucGxheSgpO1xuICAgIC8vIC8vIGhpbnQgY2hhbmdlcyB3aGVuIG1vdmllIHRpdGxlIGNoYW5nZXNcbiAgICAvLyAkKCcjZHJvcGRvd25IaW50JykuaHRtbDtcbiAgICAkaGludC50ZXh0KGN1cnJlbnRUaXRsZS5oaW50KTtcbiAgfVxuXG4vLyBzdGFydCBvbiB3ZWxjb21lIHNjcmVlbi4gY2xpY2sgYnV0dG9uIHRvIGhpZGUgd2VsY29tZSBwYWdlIGFuZCBydW4gZ2FtZVxuICBmdW5jdGlvbiBoaWRlV2VsY29tZSgpIHtcbiAgICAkKCcud2VsY29tZScpLmZhZGVPdXQoKTtcbiAgICBkaXNwbGF5V29yZCgpO1xuICB9XG4gICQoJyN3ZWxjb21lQnRuJykub24oJ2NsaWNrJywgaGlkZVdlbGNvbWUpO1xuXG4gIC8vcmVzdGFydCBnYW1lXG4gIGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCl7XG4gICAgJCgnLmdhbWVvdmVyJykuaGlkZSgpO1xuICAgICQoJy5nYW1lUnVubmluZycpLnNob3coKTtcbiAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgIGN1cnJlbnRUaXRsZSA9IG1vdmllVGl0bGVzW2N1cnJlbnRJbmRleF07XG4gICAgZGlzcGxheVdvcmQoKTtcbiAgfVxuICAkKCcjcmVzdGFydEJ0bicpLm9uKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblxuICAvLyBoaWRpbmcgbGV0dGVycyB3aGVuIGNsaWNrZWQgaW4gdGhlIGxldHRlcnNfbGlzdCBhbmQgc2hvdyBpbiByZXN1bHRfbGlzdFxuICAkbGV0dGVycy5vbignY2xpY2snLCdsaScsIChlKSA9PiB7XG4gICAgJChlLnRhcmdldCkuaGlkZSgpO1xuICAgIGNvbnN0IGxldHRlciA9ICQoZS50YXJnZXQpLnRleHQoKTtcbiAgICBjb25zdCBpbmRleCA9ICQoZS50YXJnZXQpLmRhdGEoJ2luZGV4Jyk7XG4gICAgY29uc29sZS5sb2cobGV0dGVyKTtcbiAgICAkcmVzdWx0LmFwcGVuZChgPGxpIGRhdGEtaW5kZXg9JHtpbmRleH0+JHtsZXR0ZXJ9PC9saT5gKTtcbiAgICBpZiAoJHJlc3VsdC50ZXh0KCkgPT09IGN1cnJlbnRUaXRsZS50aXRsZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgYXVkaW8uc3JjID0gYHB1YmxpYy9hc3NldHMvY29ycmVjdC5tcDNgO1xuICAgICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgY29uZ3JhdHMoKTtcblxuXG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgbW92aWVUaXRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgY3VycmVudFRpdGxlID0gbW92aWVUaXRsZXNbY3VycmVudEluZGV4XTtcbiAgICAgICAgY2xlYXJMZXR0ZXJzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZGlzcGxheVdvcmQsIDE4MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2FtZSBvdmVyIGxvZ2ljXG5cbiAgICAgIH1cblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhjbGVhckxldHRlcnMoKSk7XG4gICAgICAvLyByZXR1cm4gY3VycmVudFRpdGxlLmRpc3BsYXlXb3JkXG5cbiAgICB9XG5cblxuICB9KTtcblxuICAvLyBoaWRpbmcgbGV0dGVycyB3aGVuIGNsaWNrZWQgaW4gcmVzdWx0X2xpc3QgYW5kIHNob3cgaW4gbGV0dGVyc19saXN0XG4gICRyZXN1bHQub24oJ2NsaWNrJywgJ2xpJywgKGUpID0+IHtcbiAgICBjb25zdCBkYXRhSW5kZXggPSAkKGUudGFyZ2V0KS5kYXRhKCdpbmRleCcpO1xuICAgICRsZXR0ZXJzLmNoaWxkcmVuKCkuZmlsdGVyKChpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09PSBkYXRhSW5kZXg7XG4gICAgfSkuc2hvdygpO1xuICAgICQoZS50YXJnZXQpLnJlbW92ZSgpO1xuXG4gICAgLy8gdXNlIHRoZSBkYXRhIGluZGV4IHRvIGRpc3BsYXkgdGhlIHBhcnRpY3VsYXIgTElcbiAgICAvLyBkaXNwbGF5IG5vbmUgdGhlIExJIHdlIGp1c3QgY2xpY2tlZCB0byBtb3ZlIGJhY2sgZG93blxuICAgIGNvbnNvbGUubG9nKCQoZS50YXJnZXQpKTtcbiAgfSk7XG59KTtcblxuXG5cbi8vQWN0aW9uICBQbGFuOlxuLy8gQ3JlYXRlIGJhc2ljIGxheW91dCBjb250YWluaW5nIDEyIGRpdnMuIDEgbWFpbiBjb250YWluZXIuIDEgaGVhZGVyIGNvbnRhaW5pbmcgMyBoZWFkZXJzIGZvciBsb2dvLCB0aW1lciBhbmQgc2NvcmUuIDEgJ3RvcCcgZGl2IGNvbnRhaW5pbmcgMyBkaXZzIGZvciBtb3ZpZSBwaWN0dXJlLCBtb3ZpZSB0aXRsZSByZXN1bHQsIGdhbWUgb3B0aW9ucy4gMSAnYm90dG9tJyBkaXYgY29udGFpbmluZyBhIGxldHRlcnMgZGl2IHdpdGggYW4gdW5vcmRlcmVkIGxldHRlcnMgbGlzdCB3aXRoaW4uXG5cbi8vIFdvcmsgb24gdGhlIHNodWZmbGUgZnVuY3Rpb24gYW5kIGZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgZWFjaCBzaHVmZmxlZCBsZXR0ZXIgY2xpY2thYmxlIGFzIHdlbGwgYXMgbWFrZSBpdCBkaXNzYXBlYXIgYW5kIHNob3cgaW4gdGhlICdtb3ZpZSB0aXRsZScgZGl2LiBUaGUgbGV0dGVycyB3aWxsIGJlIHBsYWNlZCBpbiBvcmRlciBvZiBjbGlja3MgYW5kIGFuc3dlciBpcyBvbmx5IGNvcnJlY3Qgd2hlbiBsZXR0ZXJzIGFyZSBpbiB0aGUgcmlnaHQgb3JkZXIuIFVzZSB0aGUgc3BsaXRlZCBhcnJheSB3aXRoIGEgZm9yRWFjaCBzdGF0ZW1lbnQgd2hlbiBjcmVhdGluZyB0aGUgYm94ZXMuXG5cbi8vIGNoYW5nZSBtb3ZpZSB0aXRsZSAtIGRvbmVcbi8vIGNsZWFyIGV4aXN0aW5nIGxldHRlcnNfbGlzdCAtIGRvbmVcbi8vIHNodWZmbGUgdGhlIHdvcmQgLSBkb25lXG4vLyBkaXNwbGF5IHNodWZmbGVkIGxldHRlcnMgLSBkb25lXG4vLyBkaXNwbGF5IGNvcnJlY3QgaW1hZ2UgYW5kIGNoYW5nZSBmb3IgdGl0bGUgLSBkb25lXG4vLyBwbGF5IGNvcnJlY3QgYXVkaW8gYW5kIGNoYW5nZSBmb3IgdGl0bGUgLSBkb25lXG4vLyBnaXZlIGhpbnQgdmFsdWUgaW4gZWFjaCBvYmplY3QgYW5kIGNoYW5nZSBlYWNoIHRpdGxlIC1cblxuLy9UaXBzOlxuLy9NaWtlOiBTcGxpdCBmaWxtLCBjcmVhdGUgYSBmb3IgbG9vcCBhbmQgYXBwZW5kIHRvIERPTS5cblxuLy9TdGFja292ZXJmbG93OiBZb3UgZG9uJ3QgbmVlZCB0byBoaWRlIHRoZSBsZXR0ZXJzLCB1c2UgZGF0YS1hdHRyaWJ1dGVzIHRvIGlkZW50aWZ5IHRoZSByaWdodCBwb3NpdGlvbiBvZiB0aGVtIGluIHRoZSBNb3ZpZSBUaXRsZSBjb250YWluZXIgYW5kIGFwcGVuZCB0aGF0IGluIHRoZSBlbXB0eSBib3hlcy4gVGhlIGxldHRlcnMgdGhhdCBkb2Vzbid0IGNvcnJlc3BvbmQgdG8gdGhlIG1vdmllIHRpdGxlIGp1c3QgcHV0IHdpdGggZGF0YS1hdHRyaWJ1dGVzIGVtcHR5IGFuZCB5b3VyIGFsZ29yaXRobSB3aWxsIGZpbHRlciB0aGF0IHB1dHRpbmcgYSByZWQgYm9yZGVyIGludG8gc2VsZWN0ZWQgd3JvbmcgbGV0dGVyIGFuZCBzdHVmZjtcbiJdfQ==
