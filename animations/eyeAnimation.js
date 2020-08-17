function updateEye(selector) {
    var element = document.getElementById(selector);
    TweenLite.set(element, {
      transformOrigin: "center"
    });
  
    var bbox = element.getBBox();
    var centerX = bbox.x + bbox.width / 2;
    var centerY = bbox.y + bbox.height / 2;
  
    function rotateTo(point) {
  
      var dx = point.x - centerX;
      var dy = point.y - centerY;
  
      var angle = Math.atan2(dy, dx);
  
      TweenLite.to(element, 0.3, {
        rotation: angle + "_rad_short"
      });
    }
  
    return {
      element: element,
      rotateTo: rotateTo
    };
  }
  function onFrame() {
    catList.forEach(cat => {
      let { point, leftEye, rightEye, svg, mouse } = cat;
      point = mouse.matrixTransform(svg.getScreenCTM().inverse());
      leftEye = leftEye.rotateTo(point);
      rightEye = rightEye.rotateTo(point);
    })
      requestId = null;
  }
  window.addEventListener("mousemove", onMouseMove)
  
  function onMouseMove(event) {
    catList.forEach((cat, index) => {
      let { mouse } = cat;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    })
    
    if(requestId === null) {
      requestId = requestAnimationFrame(onFrame);
    }
  }