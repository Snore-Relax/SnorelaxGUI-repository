
var cube = undefined;
var gl = undefined;
var angle = 0;

function init() {
  var canvas = document.getElementById( "webgl-canvas" );

  gl = WebGLUtils.setupWebGL( canvas );

  if ( !gl ) {
    alert("Unable to setup WebGL");
    return;
  }

  gl.clearColor( 1, 0.5, 0.5, 3 );
  gl.enable( gl.DEPTH_TEST );

  cube = new Cube();

  render();
}

function render() {
  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

  angle += 2.0; // degrees

  cube.MV = rotate( angle, [-1.5, 1.5, -0.5] );

  cube.render();

  requestAnimationFrame( render ); // schedule another call to render()
}

window.onload = init;