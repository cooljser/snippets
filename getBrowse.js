function getBrowse() {
  var browser = {};
  var userAgent = navigator.userAgent.toLowerCase();
  var browser = {
    ie: userAgent.match(/msie ([\d.]+)/),
    firefox: userAgent.match(/firefox\/([\d.]+)/),
    chrome: userAgent.match(/chrome\/([\d.]+)/),
    opera: userAgent.match(/opera.([\d.]+)/),
    safari: userAgent.match(/version\/([\d.]+).*safari/)
  };
  var versions = [`IE ${browser.ie}`, 'Firefox', 'Chrome', 'Opera', 'Safari'];
  var _versions = [`ie`, 'firefox', 'chrome', 'opera', 'safari'];
  var browserIndex = _versions.findIndex(function (_browser) {
    return browser[_browser] !== null;
  });
  if (browserIndex === -1) {
    return '未知浏览器';
  }
  return versions[browserIndex];
}
