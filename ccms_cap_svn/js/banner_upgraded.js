(function (url) {
  var div = document.createElement('div');
  div.style.padding = '10px';
  div.style.width = '1020px';
  div.style.marginRight = 'auto';
  div.style.marginLeft = 'auto';
  div.innerHTML = '<p style="margin-top: 0px; margin-bottom: 0px;"><span>Please provide <a href="' + url + '" target="_blank">feedback</a> to help us improve this service.</span></p>';
  document.body.insertBefore(div, document.body.firstChild);
}('https://docs.google.com/forms/d/1qrJyYkxCl9dpSX_e2Usq0NvL5OxqfG8yMREmyxI2Mkw/viewform'));
