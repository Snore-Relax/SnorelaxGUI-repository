var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1, 0.5, 0.5, 3);

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
}

window.onload = init;
