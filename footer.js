var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var today = new Date();
var currentMonth = monthNames[today.getMonth()];
var currentYear = today.getFullYear();

document.write(
  '<footer class="site-footer">' +
  '<p>Last Updated: ' + currentMonth + ' ' + currentYear +
  '. Backgrounds from <a href="https://unsplash.com/s/photos/website-background?license=free">unspash.com</a></p>.</p>' +
  '</footer>'
);


//<!--document.write(
//  '<footer class="site-footer">' +
//  '<p>Last Updated: July 2026. Backgrounds from <a href="https://unsplash.com/s/photos/website-background?license=free">unspash.com</a></p>' +
//  '</footer>' 
//)

