var templateInline = dust.compile($('#template-inline').html(), 'hello-2');

dust.loadSource(template);
dust.loadSource(templateInline);

dust.render('hello-1', {name: 'Fred'}, function(err, out) {
  $('#output-1').text(out);
});

dust.render('hello-2', {name: 'John'}, function(err, out) {
  $('#output-2').text(out);
});
