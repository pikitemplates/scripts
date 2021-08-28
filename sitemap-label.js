var totalposts = 9999;
var standardstyling = true;
function showrecentposts(json) {
for (var a = 0; a < totalposts; a++) {
var entry = json.feed.entry[a];
var posttitle = entry.title.$t;
var posturl;
if (a == json.feed.entry.length) break;
for (var b = 0; b < entry.link.length; b++) {
if (entry.link[b].rel == 'alternate') {
posturl = entry.link[b].href;
break;
}}
posttitle = posttitle.link(posturl);
if (standardstyling) document.write('<p>');
document.write(posttitle);}
if (standardstyling) document.write('</p>');
}
