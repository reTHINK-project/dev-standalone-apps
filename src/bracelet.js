// jshint browser:true, jquery: true
// jshint varstmt: true

// reTHINK modules
// import RuntimeUA from 'runtime-core/dist/runtimeUA';
//
// import SandboxFactory from '../resources/sandboxes/SandboxFactory';
// let sandboxFactory = new SandboxFactory();
var avatar = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

// You can change this at your own domain
var  domain ="hybroker.rethink.ptinovacao.pt" ;
//var config = {runtimeURL: "https://catalogue." +domain+ "/.well-known/runtime/Runtime", development: false} ;
var config = {runtimeURL: "https://" +domain+ "/.well-known/runtime/Runtime", development: true} ;
// Hack because the GraphConnector jsrsasign module;
window.KJUR = {};

// Check if the document is ready
if (document.readyState === 'complete') {
  documentReady();
} else {
  window.addEventListener('onload', documentReady, false);
  document.addEventListener('DOMContentLoaded', documentReady, false);
}


function documentReady() {

  var hyperty = 'hyperty-catalogue://' + domain + '/.well-known/hyperty/BraceletSensorReporter';
  //var hyperty = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/hyperty/BraceletSensorReporter';
  console.log('onDocumentReady');
  window.rethink.default.install(config)
      .then(function (runtime) {
          console.log(runtime, hyperty);
          runtime.requireHyperty(hyperty).then(hypertyDeployed).catch(function(reason) {
            console.log(reason);
          });
      });
}

var bracelet;

function hypertyDeployed(result) {

  console.log(result);

  bracelet = result.instance;
  var button = $('.discover-btn');
  var collection = $('.collection');
  var progress = $('.progress');

  button.on("click", function(event){ bracelet.Discover().then(function(result){
    collection.empty();
    result.forEach(function(item){
      collection.append('<a href="#!" class="collection-item" data-id='+item.id+' >'+item.name+'<span class="right">'+item.id+'</span></a>');

    });
    collection.find('.collection-item').on("click", function(event){

      var address = $(event.target).attr('data-id');
      bracelet.Connect(address);
    });
  })});

  bracelet.onDataChange(function(data) {
    var lblBattery = $('.bt-label');
    lblBattery.removeClass('hide');

    var lblSteps = $('.steps-label');
    lblSteps.removeClass('hide');

    var lblTime = $('.time-label');
    lblSteps.removeClass('hide');


    var stepValue = $('.value_step');
    var timeValue = $('.value_time');
    var batteryValue = $('.value_battery');


    console.log('new event', data);
    var type = data.type;
    console.log('type', type);

    var date = new Date(data.time);

    if (type === 'battery') {
      batteryValue.text(data.value);
      timeValue.text(date);
      console.log(data.value);
    } else if (type === 'user_steps') {
        stepValue.text(data.value);
        timeValue.text(date);
        console.log(data.value);
    }
  });


  button.removeClass("hide");
  progress.addClass("hide");
}
