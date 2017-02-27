(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hypertyDeployed = hypertyDeployed;
	exports.hypertyFail = hypertyFail;
	
	var _utils = __webpack_require__(1);
	
	var loading = false; // jshint browser:true, jquery: true
	// jshint varstmt: true
	
	function hypertyDeployed(hyperty) {
	
	  var $el = $('.main-content .notification');
	  removeLoader($el);
	
	  // Add some utils
	  (0, _utils.serialize)();
	
	  var $mainContent = $('.main-content').find('.row');
	
	  var template = '';
	  var script = '';
	
	  switch (hyperty.name) {
	    case 'QBWebRTC':
	      template = 'qbwebrtc/qbwebrtc';
	      script = 'qbwebrtc/dist/qbwebrtc.js';
	      break;
	
	    case 'Connector':
	      template = 'connector/Connector';
	      script = 'connector/demo.js';
	      break;
	
	    case 'GroupChatManager':
	      template = 'group-chat-manager/ChatManager';
	      script = 'group-chat-manager/demo.js';
	      break;
	
	    case 'HelloWorldObserver':
	      template = 'hello-world/helloWorld';
	      script = 'hello-world/helloObserver.js';
	      break;
	
	    case 'HelloWorldReporter':
	      template = 'hello-world/helloWorld';
	      script = 'hello-world/helloReporter.js';
	      break;
	
	    case 'SurveyReporter':
	      template = 'survey/surveyReporter';
	      script = 'survey/surveyReporter.js';
	      break;
	
	    case 'SurveyObserver':
	      template = 'survey/surveyObserver';
	      script = 'survey/surveyObserver.js';
	      break;
	
	    case 'GroupChat':
	      template = 'group-chat/groupChat';
	      script = 'group-chat/groupChat.js';
	      break;
	
	    case 'NotificationsReporter':
	      template = 'notifications/notificationsReporter';
	      script = 'notifications/notificationsReporter.js';
	      break;
	
	    case 'NotificationsObserver':
	      template = 'notifications/notificationsObserver';
	      script = 'notifications/notificationsObserver.js';
	      break;
	
	    case 'Location':
	      template = 'location/location';
	      script = 'location/location.js';
	      break;
	
	    case 'RoomClient':
	      template = 'room-ui/roomClient';
	      script = 'room-ui/roomClient.js';
	      break;
	
	    case 'RoomServer':
	      template = 'room-ui/roomServer';
	      script = 'room-ui/roomServer.js';
	      break;
	
	    case 'UserStatus':
	      template = 'user-status/UserStatus';
	      script = 'user-status/user-status.js';
	      break;
	
	    case 'BraceletSensorObserver':
	      template = 'bracelet/bracelet';
	      script = 'bracelet/BraceletSensorObserver.js';
	      break;
	
	    case 'DTWebRTC':
	      template = 'dtwebrtc/dtwebrtc';
	      script = 'dtwebrtc/dtwebrtc.js';
	      break;
	
	    case 'NodeHypertyObserver':
	      template = 'node-hyperty/NodeHyperty';
	      script = 'node-hyperty/NodeHypertyObserver.js';
	      break;
	  }
	
	  if (!template) {
	    throw Error('You must need specify the template for your example');
	  }
	
	  (0, _utils.getTemplate)(template, script).then(function (template) {
	    var html = template();
	    $mainContent.html(html);
	
	    if (typeof hypertyLoaded === 'function') {
	      hypertyLoaded(hyperty);
	    } else {
	      var msg = 'If you need pass the hyperty to your template, create a function called hypertyLoaded';
	      console.info(msg);
	      notification(msg, 'warn');
	    }
	
	    loading = false;
	  });
	}
	
	function hypertyFail(reason) {
	  console.error(reason);
	  notification(reason, 'error');
	}
	
	function removeLoader(el) {
	  el.find('.preloader').remove();
	  el.removeClass('center');
	}
	
	function notification(msg, type) {
	
	  var $el = $('.main-content .notification');
	  var color = type === 'error' ? 'red' : 'black';
	
	  removeLoader($el);
	  $el.append('<span class="' + color + '-text">' + msg + '</span>');
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.serialize = serialize;
	exports.getTemplate = getTemplate;
	// jshint browser:true, jquery: true
	// jshint varstmt: true
	/* global Handlebars */
	
	function serialize() {
	
	  $.fn.serializeObject = function () {
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function () {
	      if (o[this.name] !== undefined) {
	        if (!o[this.name].push) {
	          o[this.name] = [o[this.name]];
	        }
	
	        o[this.name].push(this.value || '');
	      } else {
	        o[this.name] = this.value || '';
	      }
	    });
	
	    return o;
	  };
	
	  $.fn.serializeObjectArray = function () {
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function () {
	      if (o[this.name] !== undefined) {
	        if (!o[this.name].push) {
	          o[this.name] = [o[this.name]];
	        }
	
	        o[this.name].push(this.value || '');
	      } else {
	        if (!o[this.name]) o[this.name] = [];
	        o[this.name].push(this.value || '');
	      }
	    });
	
	    return o;
	  };
	}
	
	function getTemplate(path, script) {
	
	  return new Promise(function (resolve, reject) {
	
	    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
	      Handlebars.templates = {};
	    } else {
	      resolve(Handlebars.templates[name]);
	    }
	
	    var templateFile = $.ajax({
	      url: path + '.hbs',
	      success: function success(data) {
	        Handlebars.templates[name] = Handlebars.compile(data);
	      },
	
	      fail: function fail(reason) {
	        return reason;
	      }
	    });
	
	    var scriptFile = $.getScript(script);
	
	    var requests = [];
	    if (path) requests.push(templateFile);
	    if (script) requests.push(scriptFile);
	
	    Promise.all(requests).then(function (result) {
	      resolve(Handlebars.templates[name]);
	    }).catch(function (reason) {
	      reject(reason);
	    });
	  });
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhZDVkNTNlY2FjNjVjZTBhYjdlZiIsIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiXSwibmFtZXMiOlsiaHlwZXJ0eURlcGxveWVkIiwiaHlwZXJ0eUZhaWwiLCJsb2FkaW5nIiwiaHlwZXJ0eSIsIiRlbCIsIiQiLCJyZW1vdmVMb2FkZXIiLCIkbWFpbkNvbnRlbnQiLCJmaW5kIiwidGVtcGxhdGUiLCJzY3JpcHQiLCJuYW1lIiwiRXJyb3IiLCJ0aGVuIiwiaHRtbCIsImh5cGVydHlMb2FkZWQiLCJtc2ciLCJjb25zb2xlIiwiaW5mbyIsIm5vdGlmaWNhdGlvbiIsInJlYXNvbiIsImVycm9yIiwiZWwiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsInR5cGUiLCJjb2xvciIsImFwcGVuZCIsInNlcmlhbGl6ZSIsImdldFRlbXBsYXRlIiwiZm4iLCJzZXJpYWxpemVPYmplY3QiLCJvIiwiYSIsInNlcmlhbGl6ZUFycmF5IiwiZWFjaCIsInVuZGVmaW5lZCIsInB1c2giLCJ2YWx1ZSIsInNlcmlhbGl6ZU9iamVjdEFycmF5IiwicGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiSGFuZGxlYmFycyIsInRlbXBsYXRlcyIsInRlbXBsYXRlRmlsZSIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwiZGF0YSIsImNvbXBpbGUiLCJmYWlsIiwic2NyaXB0RmlsZSIsImdldFNjcmlwdCIsInJlcXVlc3RzIiwiYWxsIiwicmVzdWx0IiwiY2F0Y2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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LE1BRU87QUFDTEgsZUFBUUUsV0FBV0MsU0FBWCxDQUFxQmxDLElBQXJCLENBQVI7QUFDRDs7QUFFRCxTQUFJbUMsZUFBZXpDLEVBQUUwQyxJQUFGLENBQU87QUFDeEJDLFlBQUtSLE9BQU8sTUFEWTtBQUV4QlMsZ0JBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0Qk4sb0JBQVdDLFNBQVgsQ0FBcUJsQyxJQUFyQixJQUE2QmlDLFdBQVdPLE9BQVgsQ0FBbUJELElBQW5CLENBQTdCO0FBQ0QsUUFKdUI7O0FBTXhCRSxhQUFNLGNBQVNoQyxNQUFULEVBQWlCO0FBQ3JCLGdCQUFPQSxNQUFQO0FBQ0Q7QUFSdUIsTUFBUCxDQUFuQjs7QUFXQSxTQUFJaUMsYUFBYWhELEVBQUVpRCxTQUFGLENBQVk1QyxNQUFaLENBQWpCOztBQUVBLFNBQUk2QyxXQUFXLEVBQWY7QUFDQSxTQUFJZixJQUFKLEVBQVVlLFNBQVNsQixJQUFULENBQWNTLFlBQWQ7QUFDVixTQUFJcEMsTUFBSixFQUFZNkMsU0FBU2xCLElBQVQsQ0FBY2dCLFVBQWQ7O0FBRVpaLGFBQVFlLEdBQVIsQ0FBWUQsUUFBWixFQUFzQjFDLElBQXRCLENBQTJCLFVBQVM0QyxNQUFULEVBQWlCO0FBQzFDZixlQUFRRSxXQUFXQyxTQUFYLENBQXFCbEMsSUFBckIsQ0FBUjtBQUNELE1BRkQsRUFFRytDLEtBRkgsQ0FFUyxVQUFTdEMsTUFBVCxFQUFpQjtBQUN4QnVCLGNBQU92QixNQUFQO0FBQ0QsTUFKRDtBQU1ELElBL0JNLENBQVA7QUFnQ0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZDVkNTNlY2FjNjVjZTBhYjdlZiIsIi8vIGpzaGludCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZVxuLy8ganNoaW50IHZhcnN0bXQ6IHRydWVcblxuaW1wb3J0IHtnZXRUZW1wbGF0ZSwgc2VyaWFsaXplfSBmcm9tICcuL3V0aWxzJztcblxubGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGh5cGVydHlEZXBsb3llZChoeXBlcnR5KSB7XG5cbiAgbGV0ICRlbCA9ICQoJy5tYWluLWNvbnRlbnQgLm5vdGlmaWNhdGlvbicpO1xuICByZW1vdmVMb2FkZXIoJGVsKTtcblxuICAvLyBBZGQgc29tZSB1dGlsc1xuICBzZXJpYWxpemUoKTtcblxuICBsZXQgJG1haW5Db250ZW50ID0gJCgnLm1haW4tY29udGVudCcpLmZpbmQoJy5yb3cnKTtcblxuICBsZXQgdGVtcGxhdGUgPSAnJztcbiAgbGV0IHNjcmlwdCA9ICcnO1xuXG4gIHN3aXRjaCAoaHlwZXJ0eS5uYW1lKSB7XG4gICAgY2FzZSAnUUJXZWJSVEMnOlxuICAgICAgdGVtcGxhdGUgPSAncWJ3ZWJydGMvcWJ3ZWJydGMnO1xuICAgICAgc2NyaXB0ID0gJ3Fid2VicnRjL2Rpc3QvcWJ3ZWJydGMuanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdDb25uZWN0b3InOlxuICAgICAgdGVtcGxhdGUgPSAnY29ubmVjdG9yL0Nvbm5lY3Rvcic7XG4gICAgICBzY3JpcHQgPSAnY29ubmVjdG9yL2RlbW8uanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdHcm91cENoYXRNYW5hZ2VyJzpcbiAgICAgIHRlbXBsYXRlID0gJ2dyb3VwLWNoYXQtbWFuYWdlci9DaGF0TWFuYWdlcic7XG4gICAgICBzY3JpcHQgPSAnZ3JvdXAtY2hhdC1tYW5hZ2VyL2RlbW8uanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdIZWxsb1dvcmxkT2JzZXJ2ZXInOlxuICAgICAgdGVtcGxhdGUgPSAnaGVsbG8td29ybGQvaGVsbG9Xb3JsZCc7XG4gICAgICBzY3JpcHQgPSAnaGVsbG8td29ybGQvaGVsbG9PYnNlcnZlci5qcyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0hlbGxvV29ybGRSZXBvcnRlcic6XG4gICAgICB0ZW1wbGF0ZSA9ICdoZWxsby13b3JsZC9oZWxsb1dvcmxkJztcbiAgICAgIHNjcmlwdCA9ICdoZWxsby13b3JsZC9oZWxsb1JlcG9ydGVyLmpzJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnU3VydmV5UmVwb3J0ZXInOlxuICAgICAgdGVtcGxhdGUgPSAnc3VydmV5L3N1cnZleVJlcG9ydGVyJztcbiAgICAgIHNjcmlwdCA9ICdzdXJ2ZXkvc3VydmV5UmVwb3J0ZXIuanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdTdXJ2ZXlPYnNlcnZlcic6XG4gICAgICB0ZW1wbGF0ZSA9ICdzdXJ2ZXkvc3VydmV5T2JzZXJ2ZXInO1xuICAgICAgc2NyaXB0ID0gJ3N1cnZleS9zdXJ2ZXlPYnNlcnZlci5qcyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0dyb3VwQ2hhdCc6XG4gICAgICB0ZW1wbGF0ZSA9ICdncm91cC1jaGF0L2dyb3VwQ2hhdCc7XG4gICAgICBzY3JpcHQgPSAnZ3JvdXAtY2hhdC9ncm91cENoYXQuanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdOb3RpZmljYXRpb25zUmVwb3J0ZXInOlxuICAgICAgdGVtcGxhdGUgPSAnbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zUmVwb3J0ZXInO1xuICAgICAgc2NyaXB0ID0gJ25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uc1JlcG9ydGVyLmpzJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnTm90aWZpY2F0aW9uc09ic2VydmVyJzpcbiAgICAgIHRlbXBsYXRlID0gJ25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uc09ic2VydmVyJztcbiAgICAgIHNjcmlwdCA9ICdub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnNPYnNlcnZlci5qcyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0xvY2F0aW9uJzpcbiAgICAgIHRlbXBsYXRlID0gJ2xvY2F0aW9uL2xvY2F0aW9uJztcbiAgICAgIHNjcmlwdCA9ICdsb2NhdGlvbi9sb2NhdGlvbi5qcyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1Jvb21DbGllbnQnOlxuICAgICAgdGVtcGxhdGUgPSAncm9vbS11aS9yb29tQ2xpZW50JztcbiAgICAgIHNjcmlwdCA9ICdyb29tLXVpL3Jvb21DbGllbnQuanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdSb29tU2VydmVyJzpcbiAgICAgIHRlbXBsYXRlID0gJ3Jvb20tdWkvcm9vbVNlcnZlcic7XG4gICAgICBzY3JpcHQgPSAncm9vbS11aS9yb29tU2VydmVyLmpzJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnVXNlclN0YXR1cyc6XG4gICAgICB0ZW1wbGF0ZSA9ICd1c2VyLXN0YXR1cy9Vc2VyU3RhdHVzJztcbiAgICAgIHNjcmlwdCA9ICd1c2VyLXN0YXR1cy91c2VyLXN0YXR1cy5qcyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0JyYWNlbGV0U2Vuc29yT2JzZXJ2ZXInOlxuICAgICAgdGVtcGxhdGUgPSAnYnJhY2VsZXQvYnJhY2VsZXQnO1xuICAgICAgc2NyaXB0ID0gJ2JyYWNlbGV0L0JyYWNlbGV0U2Vuc29yT2JzZXJ2ZXIuanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdEVFdlYlJUQyc6XG4gICAgICB0ZW1wbGF0ZSA9ICdkdHdlYnJ0Yy9kdHdlYnJ0Yyc7XG4gICAgICBzY3JpcHQgPSAnZHR3ZWJydGMvZHR3ZWJydGMuanMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdOb2RlSHlwZXJ0eU9ic2VydmVyJzpcbiAgICAgIHRlbXBsYXRlID0gJ25vZGUtaHlwZXJ0eS9Ob2RlSHlwZXJ0eSc7XG4gICAgICBzY3JpcHQgPSAnbm9kZS1oeXBlcnR5L05vZGVIeXBlcnR5T2JzZXJ2ZXIuanMnO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IG5lZWQgc3BlY2lmeSB0aGUgdGVtcGxhdGUgZm9yIHlvdXIgZXhhbXBsZScpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodGVtcGxhdGUsIHNjcmlwdCkudGhlbihmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgIGxldCBodG1sID0gdGVtcGxhdGUoKTtcbiAgICAkbWFpbkNvbnRlbnQuaHRtbChodG1sKTtcblxuICAgIGlmICh0eXBlb2YgaHlwZXJ0eUxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHlwZXJ0eUxvYWRlZChoeXBlcnR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1zZyA9ICdJZiB5b3UgbmVlZCBwYXNzIHRoZSBoeXBlcnR5IHRvIHlvdXIgdGVtcGxhdGUsIGNyZWF0ZSBhIGZ1bmN0aW9uIGNhbGxlZCBoeXBlcnR5TG9hZGVkJztcbiAgICAgIGNvbnNvbGUuaW5mbyhtc2cpO1xuICAgICAgbm90aWZpY2F0aW9uKG1zZywgJ3dhcm4nKTtcbiAgICB9XG5cbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gIH0pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBlcnR5RmFpbChyZWFzb24pIHtcbiAgY29uc29sZS5lcnJvcihyZWFzb24pO1xuICBub3RpZmljYXRpb24ocmVhc29uLCAnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTG9hZGVyKGVsKSB7XG4gIGVsLmZpbmQoJy5wcmVsb2FkZXInKS5yZW1vdmUoKTtcbiAgZWwucmVtb3ZlQ2xhc3MoJ2NlbnRlcicpO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb24obXNnLCB0eXBlKSB7XG5cbiAgbGV0ICRlbCA9ICQoJy5tYWluLWNvbnRlbnQgLm5vdGlmaWNhdGlvbicpO1xuICBsZXQgY29sb3IgPSB0eXBlID09PSAnZXJyb3InID8gJ3JlZCcgOiAnYmxhY2snO1xuXG4gIHJlbW92ZUxvYWRlcigkZWwpO1xuICAkZWwuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIicgKyBjb2xvciArICctdGV4dFwiPicgKyBtc2cgKyAnPC9zcGFuPicpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiLCIvLyBqc2hpbnQgYnJvd3Nlcjp0cnVlLCBqcXVlcnk6IHRydWVcbi8vIGpzaGludCB2YXJzdG10OiB0cnVlXG4vKiBnbG9iYWwgSGFuZGxlYmFycyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuXG4gICQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG8gPSB7fTtcbiAgICBsZXQgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob1t0aGlzLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgJC5mbi5zZXJpYWxpemVPYmplY3RBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvID0ge307XG4gICAgbGV0IGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcbiAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0pIG9bdGhpcy5uYW1lXSA9IFtdO1xuICAgICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvO1xuICB9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZShwYXRoLCBzY3JpcHQpIHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICBpZiAoSGFuZGxlYmFycy50ZW1wbGF0ZXMgPT09IHVuZGVmaW5lZCB8fCBIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBIYW5kbGViYXJzLnRlbXBsYXRlcyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICBsZXQgdGVtcGxhdGVGaWxlID0gJC5hamF4KHtcbiAgICAgIHVybDogcGF0aCArICcuaGJzJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0gPSBIYW5kbGViYXJzLmNvbXBpbGUoZGF0YSk7XG4gICAgICB9LFxuXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzY3JpcHRGaWxlID0gJC5nZXRTY3JpcHQoc2NyaXB0KTtcblxuICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgIGlmIChwYXRoKSByZXF1ZXN0cy5wdXNoKHRlbXBsYXRlRmlsZSk7XG4gICAgaWYgKHNjcmlwdCkgcmVxdWVzdHMucHVzaChzY3JpcHRGaWxlKTtcblxuICAgIFByb21pc2UuYWxsKHJlcXVlc3RzKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgcmVzb2x2ZShIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICByZWplY3QocmVhc29uKTtcbiAgICB9KTtcblxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=