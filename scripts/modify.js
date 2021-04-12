// modify.js | changing the code/style of TT

module.exports = tS => {

  tS.modify = function modifyTurntable () {
    // song counter
    const list = '#songs'
    const song = '#songs-wrapper'
    $(song).on(modified, list, countSongs)
    countSongs()

    // ttStats link
    const main = '#maindiv'
    const user = '.overlay .profile'
    $(main).on(modified, user, attachStats)

    // hide elements
    this.hidden('no_vid',  this.config.no_vid)
    this.hidden('no_aud',  this.config.no_aud)
    this.hidden('no_bub',  this.config.no_bub)
    this.hidden('logging', this.config.logging)
    
    // replace upload with organize
    $('#upload-button').after(`<div id="ts_upload"></div>`)
    $('#ts_upload').on('click', orderSongs)
  }

  tS.hidden = function toggleHiddenElements (key, value) {
    if (key == "no_vid")  this.toggleClass('ts_hide_videos', value)
    if (key == "no_aud")  this.toggleClass('ts_hide_audience', value)
    if (key == "no_bub")  this.toggleClass('ts_hide_bubbles', value)
    if (key == "logging") this.toggleClass('ts_has_logging', value)
  }

  tS.reloadMusic = function reloadPlayers () {
    let yt = window.youtube
    let sc = window.soundcloudplayer
    
    if (sc.song) {
      sc.songTime = sc.player.currentTime() / 1e3
      sc.previewStartTime = Date.now() - 1000
      sc.resumeSong(sc.song)
    }
    
    if (yt.song) {
      yt.songTime = yt.player[0].getCurrentTime()
      yt.previewStartTime = Date.now() - 3000
      yt.resumeSong(yt.song)
    }
    $('#turnStyles').removeClass('active')
  }

  tS.on('attach', tS.modify)
  tS.on('update', tS.hidden)

}

const modified = 'DOMSubtreeModified'

const orderSongs = function orderSongs () {
  let playlist = window.turntable.playlist
  if (playlist.isFiltering) playlist.clearSearchBar()
  $("#queue-header").removeClass("normal").addClass("edit")
  playlist.queue.batchEditMode()
}

const countSongs = function countSongs () {
  let head = $('#playlist-header .text')[0]
  let data = window.turntable.playlist.fileids.length
  let name = head.innerHTML.split('<em>')[0]
  head.innerHTML = `${name} <em>${data}</em>`
}

const attachStats = function attachStats () {
  if ($('.profile.modal .statslink').length) return
  // find the userid of the user
  let data = $('.profile.modal .userid')
  let find = data.length ? data[0].innerHTML : ''
  if (find.length != 24) return // not a valid id yet
  $('.profile.modal .section.web-links').show()
  $('.profile.modal .website').append(layout(find))
}

const layout = id => `
  <a class="statslink" href="https://ttstats.info/user/${id}" 
    target="_blank" onclick="$('.modal .close-x')[0].click()">
    ttStats Profile
  </a>
`