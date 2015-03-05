var templateInline =  _.template($('#template-inline').html());

$('#output-1').text(template({name: 'Fred'}));
$('#output-2').text(templateInline({name: 'John'}));
