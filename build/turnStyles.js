!function(){var t,e,n=(t=function(t,e){t.exports={version:"5.6.4"}},function(n){return e||t(e={exports:{},parent:n},e.exports),e.exports});const i=function(t,e){for(let n in t){let i=t[n];if(null!=i&&i[e])return i}};const s=t=>`\n  <div id="ts_wrap">\n    <div id="turnStyles">\n      ${o}\n      ${a(t)}\n\n      ${l(t)}\n      ${d(t)}\n      ${r(t)}\n      ${h(t)}\n\n      ${m(t)}\n    </div>\n  </div>\n`,o='\n  <h3 id="ts_menu" class="ts_menu_toggle">\n    <span class="open">\u2261</span>\n    <span class="close">\u2716</span>\n    tS\n  </h3>\n\n  <div id="ts_tabs">\n    <div class="tab_opts active">Options</div>\n    <div class="tab_room">Room</div>\n    <div class="tab_ding">Notify</div>\n    <div class="tab_css">Custom Css</div>\n  </div>\n',a=t=>`\n  <div id="ts_quick">\n    ${c(t,"is_afk","Go AFK")}\n    ${c(t,"autobop","Autobop")}\n    ${c(t,"nextdj","Next DJ Spot")}\n    ${c(t,"pingdj","Wait For Ping")}\n  </div>\n`,l=t=>`\n  <div class="ts_tab tab_opts active">\n    <div>\n      <h4>General Features</h4>\n      ${c(t,"autobop","Autobop")}\n      ${c(t,"has_vol","Control Volume")}\n      ${c(t,"nextdj","Next DJ Spot")}\n      ${c(t,"pingdj","Wait For Ping")}\n    </div>\n    <div>\n      <h4>Hide Elements</h4>\n      ${c(t,"no_bub","Hide Chat Bubbles")}\n      ${c(t,"no_aud","Hide Audience")}\n      ${c(t,"no_vid","Hide Player")}\n    </div>\n    <div>\n      <h4>Visual Options</h4>\n      ${u(t,"theme")}\n      ${u(t,"style")}\n    </div>\n  </div>\n`,d=t=>`\n  <div class="ts_tab tab_room">\n    <div>\n      <h4>Room Features</h4>\n      ${c(t,"is_afk","Go AFK")}\n      <input type="text" id="ts_afk_ping" class="ts_inputs"\n        value="${t.config.afk_ping}" />\n      ${g("afk_ping","Save AFK Response")}\n    </div>\n    <div>\n      <h4>Automated Reminder</h4>\n      ${u(t,"remind",!0)} \n      <input type="text" id="ts_reminder" class="ts_inputs"\n        value="${t.config.reminder}" />\n      ${g("reminder","Save Reminder")}\n    </div>\n    <div>\n      <h4>turnstyles</h4>\n      ${c(t,"logging","Show Logs In Room Tab")}\n      ${p("reload","Reload turnStyles")}\n    </div>\n    <div>\n      <h4>turntable</h4>\n      ${p("reloadMusic","Reload Music Players")}\n    </div>\n  </div>\n`,r=t=>`\n  <div class="ts_tab tab_ding">\n    <div>\n      <h4>Messages In Chat</h4>\n      ${c(t,"chat_song","Last Song Stats")}\n      ${c(t,"chat_spun","Dropped DJ Stats")}\n      ${c(t,"chat_snag","User Snags")}\n      ${c(t,"chat_join","User Joins")}\n      ${c(t,"chat_left","User Leaves")}\n    </div>\n    <div>\n      <h4>Desktop Notifications</h4>\n      ${c(t,"ping_pm","On DMs")}\n      ${c(t,"ping_chat","On Mentions")}\n      ${c(t,"ping_song","On New Songs")}\n    </div>\n  </div>\n`,h=t=>`\n  <div class="ts_tab tab_css">\n    <div>\n      <h4>Custom CSS</h4>\n      <textarea id="ts_user_css" class="ts_inputs" cols="60" rows="10">${t.config.user_css}</textarea>\n      ${g("user_css","Save And Apply Styles")}\n    </div>\n  </div>\n`,c=(t,e,n)=>`\n  <label class="ts_toggle">\n    <input id="ts_${e}" class="ts_option" type="checkbox"\n      ${t.config[e]?"checked":""}>\n    </input>\n    <span>\u2022</span>\n    ${n}\n  </label>\n`,u=(t,e,n)=>{return`\n  <select id="ts_${e}" class="ts_option ts_inputs">\n    ${n?"":(i=e,`<option value="">No ${s=i,s[0].toUpperCase()+s.substring(1)}</option>`)}\n    ${Object.keys(t.options[e]).map(n=>`\n      <option value="${n}" ${t.config[e]==n?"selected":""}>\n        ${t.options[e][n]}\n      </option>\n    `).join("")}\n  </select>\n`;var i,s},g=(t,e)=>`\n  <button class="ts_inputs ts_optbtn" id="ts_btn_${t}">${e}</button>\n`,p=(t,e)=>`\n  <button class="ts_inputs" onclick="$tS.${t}()">${e}</button>\n`,m=t=>`\n  <div class="ts_credits">\n    <small id="ts_close" class="ts_menu_toggle">\u2714\ufe0e CLOSE</small>\n    <small>v${t.config.version}</small>\n    <small>\n      <a href="https://discord.gg/jnRs4WnPjM" target="_blank">\n        Join me on the TT Discord\n      </a>\n    </small>\n  </div>\n`;const f=function(t){let e=document.createElement("style");e.classList.add("tScss"),e.type="text/css",e.innerHTML=t,$("style.tScss").remove(),document.head.append(e)},_=function(t,e,n){return`${n?`${t}/${n}`:""+t}/${e}.css`},v=function(t,e,n){let i=document.createElement("link");i.classList.add("tS-"+(n||"core")),i.type="text/css",i.rel="stylesheet",i.href=_(t,e,n),document.head.append(i)},b=function(t,e,n){let i=$("link.tS-"+n);if(!e)return!!i.length&&i.remove();i.length?i.attr("href",_(t,e,n)):v(t,e,n)};const w="DOMSubtreeModified",y=function(){let t=window.turntable.playlist;t.isFiltering&&t.clearSearchBar(),$("#queue-header").removeClass("normal").addClass("edit"),t.queue.batchEditMode()},k=function(){let t=$("#playlist-header .text")[0],e=window.turntable.playlist.fileids.length,n=t.innerHTML.split("<em>")[0];t.innerHTML=`${n} <em>${e}</em>`},S=function(){if($(".profile.modal .statslink").length)return;let t=$(".profile.modal .userid"),e=t.length?t[0].innerHTML:"";24==e.length&&($(".profile.modal .section.web-links").show(),$(".profile.modal .website").append(j(e)))},j=t=>`\n  <a class="statslink" href="https://ttstats.info/user/${t}" \n    target="_blank" onclick="$('.modal .close-x')[0].click()">\n    ttStats Profile\n  </a>\n`;const C=t=>Math.log(t/100)/Math.LN2+4,x=t=>{let e=t||window.util.getSetting("volume");return 100*Math.pow(2,e-4)},T=`\n  <div id="ts_volume">\n    <span id="ts_mute"></span>\n    <input id="ts_slider" type="range" \n      min="0" max="100" value="${x()}">\n    </input>\n    <em id="ts_muted">Muted For One Song</em>\n  </div>\n`;const M=()=>{$(window).focus();let t={bubbles:!0,cancelable:!0,view:window},e=document.querySelectorAll(".awesome-button")[0],n=new MouseEvent("click",t);return!e.dispatchEvent(n)};const N=(t,e,n="")=>`\n  <div class="message ${n}">\n    <em>\n      <span class="subject">${t}</span>\n      <span class="text">${e}</span>\n    </em>\n  </div>\n`;const L={};(t=>{t.logBook=[],t.Log=e=>{this.logBook=this.logBook||t.logBook;let n=`[${(new Date).toLocaleTimeString("en-US")}]`;this.logBook.push(`[tS] ${n} <span>${e}</span>`),console.info(`${n} turnStyles :: ${e}`),this.logBook.length>50&&this.logBook.shift();let i=$("#ts_logs")[0];i&&(i.innerHTML=this.logBook.join("<br>"),i.scrollTop=i.scrollHeight)},t.user=()=>window.turntable.user,t.view=()=>window.turntable.topViewController,t.speak=function(t){window.turntable.sendMessage({text:t,api:"room.speak",roomid:this.view().roomId,section:this.view().section})},t.icon=()=>this.__base+"/images/icon128.png",t.userName=e=>{let n=t.view().userMap[e];return n?n.attributes.name:"Someone"},t.buddyName=t=>{let e=window.turntable.buddyList.pmWindows[t];return!!e&&e.otherUser.attributes.name},t.pinged=e=>{let n="@"+t.user().attributes.name.toLowerCase();return e.toLowerCase().indexOf(n)>-1},t.toggleClass=(t,e)=>{let n=$("body").hasClass(t);e&&!n&&$("body").addClass(t),n&&!e&&$("body").removeClass(t)},t.holding={},t.suspend=function(t,e,n){this.holding[n]?clearTimeout(this.holding[n]):t&&t();let i=1e3*e;this.holding[n]=setTimeout((()=>{delete this.holding[n]}).bind(this),i)}})(L),(t=>{t.on=function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e.bind(this))},t.emit=function(t,e,n){let i=this.events[t];if(i)for(let s of i)s(e,n)},t.handle=function(t){t.command&&this.emit(t.command,t)},t.events={}})(L),(t=>{t.default={logging:!1,theme:"dark",style:"",autobop:!0,nextdj:!1,pingdj:!1,has_vol:!1,no_aud:!1,no_vid:!1,no_bub:!1,ping_pm:!1,ping_song:!1,ping_chat:!1,chat_song:!1,chat_spun:!1,chat_snag:!1,chat_join:!1,chat_left:!1,is_afk:!1,afk_ping:"I'm AFK - Back in a sec!",beats:0,remind:0,reminder:"",user_css:""},t.options={theme:{dark:"Dark Mode",night:"Night Mode",forest:"Forest",cosmic:"Cosmic",midnight:"Midnight"},style:{pink:"Pink",blue:"Blue",teal:"Teal",green:"Green",purple:"Purple"},remind:{0:"Don't Remind",15:"Every 15m",30:"Every 30m",60:"Every 1h",120:"Every 2h"}},t.saveConfig=function(t){let e="checkbox"==t.target.type,n=t.target.id.split("ts_").join(""),i=e?t.target.checked:t.target.value;0===n.indexOf("btn_")&&(n=n.split("btn_").join(""),i=$("#ts_"+n).val()),this.writeConfig(n,i);let s="style"==n||"theme"==n||"user_css"==n;this.lobby?s&&this.updateThemes(n,i):this.emit("update",n,i)},t.writeConfig=function(t,e){this.config[t]=e;let n=JSON.stringify(this.config);window.localStorage.setItem("tsdb",n),this.mirroredOpt(t,e),this.Log("saved config")},t.mirroredOpt=function(t,e){let n="boolean"==typeof e;$(`#ts_quick #ts_${t}, .ts_tab #ts_${t}`).prop(n?"checked":"value",e)}})(L),(t=>{t.last_played={},t.now_playing={},t.current_djs={},t.buildCache=function(t){for(let e of t.djids)this.cacheNewDJ(e);this.cacheTrack(t.currentSong)},t.cacheTrack=function(t){let e=t&&t.room?t.room.metadata.current_song:t,n=t&&t.upvoters?t.upvoters.length:0,i=!!e&&e.djid,s={...this.now_playing},o={love:n,hate:0,snag:0,dj:i};this.last_played=s,this.now_playing=e?{...e.metadata,...o}:{},s.song&&this.current_djs[s.dj]?(this.current_djs[s.dj].spun+=1,this.current_djs[s.dj].love+=s.love,this.current_djs[s.dj].hate+=s.hate,this.current_djs[s.dj].snag+=s.snag):s.song&&this.cacheNewDJ(s.dj,s);let a=!1;s.song&&(a=`${s.love}\u2764\ufe0f${s.hate}\ud83d\udc94${s.snag}\ud83d\udc96`),this.emit("tracked",a),this.Log("new song: "+(this.now_playing.song||"none"))},t.cacheNewDJ=function(t,e){let n=t.user?t.user[0].userid:t;this.current_djs[n]||(this.current_djs[n]={spun:e&&e.spun?e.spun:0,love:e&&e.love?e.love:0,hate:e&&e.hate?e.hate:0,snag:e&&e.snag?e.snag:0});let i=this.userName(n);this.Log(`new dj: [${i}] (${n})`)},t.cacheSnags=function(){this.now_playing.snag+=1},t.cacheVotes=function(t){this.now_playing.love=t.room.metadata.upvotes,this.now_playing.hate=t.room.metadata.downvotes},t.clearOldDJ=function(t){let e=t.user[0].name,n=t.user[0].userid;if(!this.current_djs[n])return;let i={...this.current_djs[n]},s=`${i.love}\u2764\ufe0f${i.hate}\ud83d\udc94${i.snag}\ud83d\udc96${i.spun}\u25b6\ufe0f`;delete this.current_djs[n],this.emit("dropped",e,s),this.Log(`old dj: [${e}] (${n})`)},t.on("attach",t.buildCache),t.on("add_dj",t.cacheNewDJ),t.on("rem_dj",t.clearOldDJ),t.on("nosong",t.cacheTrack),t.on("newsong",t.cacheTrack),t.on("snagged",t.cacheSnags),t.on("update_votes",t.cacheVotes)})(L),(t=>{t.init=function(){if(this.__base)return;this.chrome=!!window.tsBase,this.__base=window.tsBase||"https://ts.pixelcrisis.co/build";let t=window.localStorage.getItem("tsdb"),e=t?JSON.parse(t):{},i=n({}).version;this.config={...this.default,...e,version:i},this.config.is_afk=!1,this.emit("loaded",this.config),this.attach()},t.attach=function(){let e=window.turntable;if(!e)return this.Log("no room");if(this.lobby=$("#turntable #topBG").length,this.lobby)return this.buildWindow();let n=()=>setTimeout(t.attach.bind(this),150);if(!e.user)return n();let s=i(e,"roomId");return s&&i(s,"roomData")?(this.heart=setInterval(t.beat.bind(this),6e4),$(".room-info-nav").after('<div id="ts_logs"></div>'),this.realVolume=window.turntablePlayer.realVolume,this.handler=this.handle.bind(this),e.addEventListener("message",this.handler),this.emit("attach",s),void this.Log("loaded room")):n()},t.beat=function(){this.config.beats=parseInt(this.config.beats)+1,this.emit("heartbeat",this.config.beats)},t.reload=function(){clearInterval(this.heart),window.turntable.removeEventListener("message",this.handler),$('script[src*="turnStyles.js"]').remove();const t=document.createElement("script");t.src=`${this.__base}/turnStyles.js?${Math.random()}`,t.type="text/javascript",this.Log("reloading"),document.body.append(t)}})(L),(t=>{t.buildWindow=function(){$("#ts_wrap").remove(),$(".header-bar").append(s(this)),$(".ts_menu_toggle").on("click",()=>{$("#turnStyles").toggleClass("active")}),$("#ts_tabs div").on("click",t=>{$("#ts_tabs div, .ts_tab").removeClass("active"),$("."+t.currentTarget.className).addClass("active")}),$(".ts_optbtn").on("click",t.saveConfig.bind(this)),$(".ts_option").on("change",t.saveConfig.bind(this))},t.on("attach",t.buildWindow)})(L),(t=>{t.loadThemes=function(t){$("link.tS-core").remove(),v(this.__base,"turnStyles"),$("link.tS-themes").remove(),v(this.__base,t.theme,"themes"),$("link.tS-styles").remove(),v(this.__base,t.style,"styles"),f(t.user_css)},t.updateThemes=function(t,e){"theme"==t&&b(this.__base,e,"themes"),"style"==t&&b(this.__base,e,"styles"),"user_css"==t&&f(e)},t.on("loaded",t.loadThemes),t.on("update",t.updateThemes)})(L),(t=>{t.modify=function(){$("#songs-wrapper").on(w,"#songs",k),k(),$("#maindiv").on(w,".overlay .profile",S),this.hidden("no_vid",this.config.no_vid),this.hidden("no_aud",this.config.no_aud),this.hidden("no_bub",this.config.no_bub),this.hidden("logging",this.config.logging),$("#upload-button").after('<div id="ts_upload"></div>'),$("#ts_upload").on("click",y)},t.hidden=function(t,e){"no_vid"==t&&this.toggleClass("ts_hide_videos",e),"no_aud"==t&&this.toggleClass("ts_hide_audience",e),"no_bub"==t&&this.toggleClass("ts_hide_bubbles",e),"logging"==t&&this.toggleClass("ts_has_logging",e)},t.reloadMusic=function(){let t=window.youtube,e=window.soundcloudplayer;e.song&&(e.songTime=e.player.currentTime()/1e3,e.previewStartTime=Date.now()-1e3,e.resumeSong(e.song)),t.song&&(t.songTime=t.player[0].getCurrentTime(),t.previewStartTime=Date.now()-3e3,t.resumeSong(t.song)),$("#turnStyles").removeClass("active")},t.on("attach",t.modify),t.on("update",t.hidden)})(L),(t=>{t.loadVolume=function(){let t=this.config.has_vol,e=$("body").hasClass("has-volume");this.toggleClass("has-volume",t),e&&!t&&this.remVolume(),t&&!e&&this.addVolume()},t.addVolume=function(){$(".header-content").append(T),$("#ts_mute").on("click",this.toggleMute.bind(this)),$("#ts_slider").on("input",this.saveVolume.bind(this)),$("#ts_slider").on("DOMMouseScroll mousewheel",this.onVolWheel.bind(this))},t.remVolume=function(){$("#ts_volume").remove(),window.turntablePlayer.realVolume=this.realVolume},t.saveVolume=function(t){let e=(t=t.target?t.target.value:t)>0?C(t):-3;window.turntablePlayer.realVolume=e>6?this.realVolume:x,window.turntablePlayer.setVolume(e),window.util.setSetting("volume",e)},t.onVolWheel=function(t){const e=x();let n=t.originalEvent.shiftKey?1:5,i=t.originalEvent.deltaY>0?e-n:e+n;return i=i<0?0:i>100?100:i,$("#ts_slider")[0].value=i,this.saveVolume(i),!1},t.checkMuted=function(){this.mute&&this.toggleMute()},t.toggleMute=function(){this.mute=!this.mute,$("#ts_volume").toggleClass("muted",this.mute);let t=this.mute?-3:C(x());window.turntablePlayer.setVolume(t),this.Log("turned mute "+(this.mute?"on":"off"))},t.on("attach",t.loadVolume),t.on("update",t.loadVolume),t.on("nosong",t.checkMuted),t.on("newsong",t.checkMuted)})(L),(t=>{t.autoBop=function(){if(this.bopping&&clearTimeout(this.bopping),!this.config.autobop)return;let t=7*Math.random()*100;this.bopping=setTimeout(M,t)},t.on("attach",t.autoBop),t.on("newsong",t.autoBop)})(L),(t=>{t.checkDecks=function(){this.config.nextdj&&(this.config.pingdj?this.suspend(null,2,"nextdj"):this.tryJumping())},t.tryJumping=function(){if(!$(".become-dj").length)return this.Log("nextdj: no spot");this.Log("nextdj: taking spot"),this.view().becomeDj()},t.isSpinning=function(t){if(!this.config.nextdj)return;if(this.user().id!=t.user[0].userid)return;this.writeConfig("nextdj",!1);let e="You've Hopped On Deck!",n="NextDJ is now disabled.";this.sendNotify({head:e,text:n}),this.postToChat(e,n)},t.nextOnPing=function(t){this.pinged(t.text)&&this.holding.nextdj&&this.tryJumping()},t.on("attach",t.checkDecks),t.on("update",t.checkDecks),t.on("rem_dj",t.checkDecks),t.on("add_dj",t.isSpinning),t.on("speak",t.nextOnPing)})(L),(t=>{t.notifyAuth=function(){let t=this.config;return!(!(t.ping_chat||t.ping_pm||t.ping_song)||this.chrome||!("Notification"in window)||"denied"===Notification.permission||"default"===Notification.permission&&(this.Log("requesting notifcation permission"),Notification.requestPermission(),1))},t.stopNotify=function(){return!!document.hasFocus()||!this.chrome&&!this.notifyAuth()},t.sendNotify=function(t,e){if(this.stopNotify())return;let n=this.notifyType(t);return e?this.suspend(n,5,e):n()},t.notifyType=function(t){let e={type:"tsNotify",notification:t},n={icon:this.icon(),body:t.text};return this.chrome?()=>window.postMessage(e):()=>{let e=new Notification(t.head,n);e.onclick=()=>{window.focus(),e.close()}}},t.postToChat=function(t,e,n){$(".chat .messages").append(N(t,e,n)),this.view().updateChatScroll()},t.on("attach",t.notifyAuth),t.on("update",t.notifyAuth)})(L),(t=>{t.alertSong=function(t){let e=this.now_playing.song;if(e&&this.config.ping_song){let n="Now Playing: "+e,i=t||"By: "+this.now_playing.artist;this.sendNotify({head:n,text:i})}if(t&&this.config.chat_song){let e=this.last_played,n=`${e.song} by ${e.artist}`;this.postToChat(t,n,"stat")}},t.alertDrop=function(t,e){if(this.config.chat_spun){let n=`${t} - ${e}`,i="- is done spining!";this.postToChat(n,i,"stat")}},t.alertPm=function(t){if(this.config.ping_pm){let e=this.buddyName(t.senderid),n=e?"New PM from: "+e:"New PM";this.sendNotify({head:n,text:t.text},"ping_pm")}},t.alertPing=function(t){let e=this.pinged(t.text);if(t.userid==this.user().id&&this.config.is_afk&&t.text!=this.config.afk_ping&&(this.writeConfig("is_afk",!1),this.postToChat("Welcome Back!","I've turned off AFK for you!","stat")),e&&this.config.ping_chat){let e=`[${this.view().roomData.name}] @${t.name}`;this.sendNotify({head:e,text:t.text},"ping_chat")}e&&this.config.is_afk&&this.config.afk_ping&&this.speak(this.config.afk_ping)},t.alertSnag=function(t){if(this.config.chat_snag){let e=this.userName(t.userid),n="has snagged this track!";this.postToChat(e,n,"snag")}},t.alertJoin=function(t){let e=t.user[0];this.Log(`[${e.name}](${e.userid}) joined. `),this.config.chat_join&&this.postToChat(e.name,"joined.","join")},t.alertLeft=function(t){let e=t.user[0];this.Log(`[${e.name}](${e.userid}) left.`),this.config.chat_left&&this.postToChat(e.name,"left.","left")},t.alertVote=function(t){let e=t.room.metadata.votelog,n=e[e.length-1],i=this.userName(n[0]);this.Log(`[${i}] voted: ${n[1]}`)},t.alertAfk=function(t,e){"is_afk"==t&&e&&this.config.afk_ping&&this.speak(this.config.afk_ping)},t.sendReminder=function(t){t%parseInt(this.config.remind)==0&&this.config.reminder&&this.speak(this.config.reminder)},t.on("pmmed",t.alertPm),t.on("update",t.alertAfk),t.on("speak",t.alertPing),t.on("snagged",t.alertSnag),t.on("tracked",t.alertSong),t.on("dropped",t.alertDrop),t.on("registered",t.alertJoin),t.on("deregistered",t.alertLeft),t.on("update_votes",t.alertVote),t.on("heartbeat",t.sendReminder)})(L),window.$tS=L,window.$tS.init()}();