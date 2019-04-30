import { Component, AfterContentInit } from '@angular/core';
import * as gsap from 'gsap';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterContentInit {

  ngAfterContentInit() {

    var inflate = new gsap.TimelineMax({
      paused: true,
      onStart: function() {
        gsap.TweenLite.set('replayBtn', { autoAlpha: 0 });
      },
      onComplete: function() {
        explode();
      }
    });
    
    var inflateOpts = {
      scale: rnd(1, 1.2),
      rotation: rnd(-2, 2),
      force3D: true,
      ease: gsap.RoughEase.ease.config({
        template: gsap.Power0.easeNone,
        strength: 0.5,
        points: 200,
        taper: "in",
        randomize: true,
        clamp: true
      })
    };
    
    var fireOptsYellow = {
      fill: '#fccb13',
      stroke: '#fccb13',
      ease: gsap.Linear.easeNone
    };
    
    var fireOptsRed = {
      fill: '#e2192d',
      stroke: '#e2192d',
      ease: gsap.Linear.easeNone
    };
    
    inflate.to('#explode', 5, inflateOpts);
    inflate.to('#explode path', 2.5, fireOptsYellow, 0);
    inflate.to('#explode path', 2.5, fireOptsRed, 2.5);
    inflate.play();
    
    function explode() {
      var piece = document.getElementById('explode').querySelectorAll('path');
      for(var i = 0; i < piece.length; i++) {
        var explodeOpts = {
          x: rnd(-100, 100),
          y: rnd(0, 500),
          rotation: rnd(0, 180),
          scale: rnd(1, 1.5),
          autoAlpha: 0,
          ease: gsap.SlowMo.ease,
        };
        gsap.TweenLite.to(piece[i], 10, explodeOpts);
      };
    };
    
    function reset() {
      var svgDefaults = {
        scale: 1,
        rotation: 0
      };
      var pathDefaults = {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        fill: '#fff',
        stroke: '#fff',
        autoAlpha: 1
      };
      gsap.TweenLite.set('#explode', svgDefaults);
      gsap.TweenLite.set('#explode path', pathDefaults);
    };
    
    function rnd(min, max) {
      return Math.random() * (max - min + 1) + min;
    };
  }
}
