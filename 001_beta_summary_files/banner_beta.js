(function (url) {
  var div = document.createElement('div');
  div.style.padding = '10px';
  div.style.width = '1020px';
  div.style.marginRight = 'auto';
  div.style.marginLeft = 'auto';
  div.innerHTML = '<p style="margin-top: 0px; margin-bottom: 0px;"><strong style="color:white;background-color:#f47738;padding:2px 4px 0px 4px;text-transform:uppercase;margin-right:8px;display:inline-block;font-size:12px;">BETA</strong><span>This is a new service. Your <a href="' + url + '" target="_blank">feedback</a> will help us to improve it.</span></p>';
  document.body.insertBefore(div, document.body.firstChild);
}('https://docs.google.com/forms/d/1ndI-0MqyO4p2bv21wrBYBZPNlodhKVcf_gQC5KO2ScA/viewform'));
