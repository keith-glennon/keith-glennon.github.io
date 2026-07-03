(function () {
  var cloudflareScript = document.createElement("script");

  cloudflareScript.defer = true;
  cloudflareScript.src = "https://static.cloudflareinsights.com/beacon.min.js";

  cloudflareScript.setAttribute(
    "data-cf-beacon",
    '{"token": "989e14d60ce54791b180b5d947008026"}'
  );

  document.head.appendChild(cloudflareScript);
})();
