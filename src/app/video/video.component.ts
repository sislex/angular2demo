import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  private cameras;
  ngOnInit(){
    this.cameras = [];
  }

  @ViewChild('video') video: ElementRef;

  ngAfterViewInit() {
    let enumerateDevices = null;
    let _this = this;
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      // Firefox 38+, Microsoft Edge, and Chrome 44+ seems having support of enumerateDevices
      enumerateDevices = function(callback) {
        navigator.mediaDevices.enumerateDevices().then(callback);
      };
    }

    function getAllAudioVideoDevices(successCallback, failureCallback, _this) {
      // if (!enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
      //   enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
      // }

      if (!enumerateDevices && navigator.mediaDevices.enumerateDevices) {
        enumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator);
      }

      if (!enumerateDevices) {
        failureCallback(null, 'Neither navigator.mediaDevices.enumerateDevices NOR MediaStreamTrack.getSources are available.');
        return;
      }

      var allMediaDevices = [];
      var allAudioDevices = [];
      var allVideoDevices = [];

      var audioInputDevices = [];
      var audioOutputDevices = [];
      var videoInputDevices = [];
      var videoOutputDevices = [];

      enumerateDevices(function(devices) {
        devices.forEach(function(_device) {
          var device = {};
          for (var d in _device) {
            device[d] = _device[d];
          }

          // make sure that we are not fetching duplicate devices
          var skip;
          allMediaDevices.forEach(function(d) {
            if (d.id === device['id']) {
              skip = true;
            }
          });

          if (skip) {
            return;
          }

          // if it is MediaStreamTrack.getSources
          if (device['kind'] === 'audio') {
            device['kind'] = 'audioinput';
          }

          if (device['kind'] === 'video') {
            device['kind'] = 'videoinput';
          }

          if (!device['deviceId']) {
            device['deviceId'] = device['id'];
          }

          if (!device['id']) {
            device['id'] = device['deviceId'];
          }

          if (!device['label']) {
            device['label'] = 'Please invoke getUserMedia once.';
          }

          if (device['kind'] === 'audioinput' || device['kind'] === 'audio') {
            audioInputDevices.push(device);
          }

          if (device['kind'] === 'audiooutput') {
            audioOutputDevices.push(device);
          }

          if (device['kind'] === 'videoinput' || device['kind'] === 'video') {
            videoInputDevices.push(device);
          }

          if (device['kind'].indexOf('audio') !== -1) {
            allAudioDevices.push(device);
          }

          if (device['kind'].indexOf('video') !== -1) {
            allVideoDevices.push(device);
          }

          // there is no 'videoouput' in the spec.
          // so videoOutputDevices will always be [empty]

          allMediaDevices.push(device);
        });

        if (successCallback) {
          successCallback({
            allMediaDevices: allMediaDevices,
            allVideoDevices: allVideoDevices,
            allAudioDevices: allAudioDevices,
            videoInputDevices: videoInputDevices,
            audioInputDevices: audioInputDevices,
            audioOutputDevices: audioOutputDevices
          });
        }
      });
    }

    getAllAudioVideoDevices(function(result) {
      if (result.allVideoDevices.length) {
        console.debug('Number of video devices available:', result.allVideoDevices.length);
      }

      if (result.videoInputDevices.length) {
        console.debug('Number of video-input devices available:', result.videoInputDevices.length);
      }

      if (result.allMediaDevices.length && result.allMediaDevices[0].label === 'Please invoke getUserMedia once.') {
        console.warn('It seems you did not invoke navigator-getUserMedia before using these API.');
      }

      // console.info('All video input devices:');
      result.videoInputDevices.forEach(function(device) {
        // console.log('Video input device id:', device.id, 'Device label:', device.label);
        // console.log('device label: ', device.label);
      });
      
      _this.cameras = result.videoInputDevices;
      // console.log('cameras: ', _this.cameras[0].label);
      
    }, function(error) {
      alert(error);
    }, _this);
  }
  
  showCamera(cameraId: string) {
    let constraints = {
      audio: false,
      video: {
        optional: [{sourceId: cameraId}]
      }
    };

    let _video = document.querySelector('video');
    navigator.getUserMedia(constraints, function (stream) {
          let vendorURL = window.URL;
          _video.src = vendorURL.createObjectURL(stream);
          _video.play();
        },
        function (err) {
          console.error("An error occured! " + err);
        });
  }

}
