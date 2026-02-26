// Get the path part of the URL (excluding the domain)
var path = window.location.pathname;

// Support both `/index.html` and `/` as the home page.
if (path.endsWith('/')) {
  path += 'index.html';
}

// Get all the navigation links
var links = document.querySelectorAll('nav a');

// Iterate through each link and check if it matches the current page
for (var i = 0; i < links.length; i++) {
  var link = links[i];

  // Get the href attribute value of the link
  var linkHref = link.getAttribute('href');

  if (path.endsWith(linkHref)) {
    link.classList.add('active'); // Add the "active" class
    break; // Stop iterating once a match is found
  }
}
