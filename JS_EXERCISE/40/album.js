function make_album(artist_name,album_title,track=0){
   return {artist: artist_name, album: album_title, tracks: track}
}
console.log(make_album("Jack","some title"));
console.log(make_album("Tom","Tom & Jerry"));
console.log(make_album("Haris","Haris and Friends",10));