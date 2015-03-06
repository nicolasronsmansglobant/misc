requirejs.config({
  baseUrl: 'js', // will automatically try to load modules from there, if successfully loaded, they will be accessible globally
  paths: { // relative to the baseUrl
    jquery: '../node_modules/jquery/dist/jquery.min',
    namedModule: 'module-04' // needed for named modules
  }
});

requirejs(['jquery', 'module-01', 'module-02', 'module-03', 'namedModule'], function ($, module01, module02, module03, anyNameYouWant) {
  console.log(module01.desc);
  console.log(module02);
  console.log(module03);
  console.log(anyNameYouWant);
});
