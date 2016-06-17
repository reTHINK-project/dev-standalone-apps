// jshint browser:true, jquery: true
// jshint varstmt: true

// reTHINK modules
// import RuntimeUA from 'runtime-core/dist/runtimeUA';
//
// import SandboxFactory from '../resources/sandboxes/SandboxFactory';
// let sandboxFactory = new SandboxFactory();
var avatar = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

// You can change this at your own domain
var  domain ="luis.dev" ;
var config = {runtimeURL: "https://" +domain+ "/runtime/Runtime", development: true} ;

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

  button.removeClass("hide");
  progress.addClass("hide");
}


function enable(){
            console.log('enable bluetooth');
            bluetoothle.enable(function(a){console.log('status',a)},function(b){console.log('status',b)});
}

function disconnect(){
        console.log('disconnect');
        var bleAddress = document.getElementById("test").value;
        console.log('Disconnecting to ->', bleAddress);
        bluetoothle.disconnect(function(a){console.log('status',a)},function(b){console.log('status',b)},{
        address: bleAddress
      });

}

function close(){
  console.log('close');
  var bleAddress = document.getElementById("test").value;
  console.log('Closing to ->', bleAddress);
  bluetoothle.close(function(a){console.log('status',a)},function(b){console.log('status',b)},{
  address: bleAddress
});
}

function readSteps()
{
  console.log('read');
  var bleAddress = document.getElementById("test").value;
	console.log('read STEPS from device->', bleAddress);
	var read = bluetoothle.read(function(a){console.log('status',a);
                                var b = bluetoothle.encodedStringToBytes(a.value);
                                var valor = (0xff & b[0] | (0xff & b[1]) << 8);
                                console.log("STEPS>: ",valor);
  },function(b){console.log('status',b)},{
		address: bleAddress,
		service: "fee0",
		characteristic: "ff06"
    	});
}

function readBattery()
{
  console.log('read');
  var bleAddress = document.getElementById("test").value;
	console.log('read Battery from device->', bleAddress);
	var read = bluetoothle.read(function(a){console.log('status',a);
                                var b = bluetoothle.encodedStringToBytes(a.value);
                                var valor = b[0];
                                console.log("array de bytes->", b);
                                console.log("Battery>: ",valor);
  },function(b){console.log('status',b)},{
		address: bleAddress,
		service: "fee0",
		characteristic: "ff0c"
    	});
}
