precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;
uniform float timeIn;
uniform vec2 res;
# define PI 3.1459265358979
# define TAU PI * 2.0

float HexDist(vec2 pos) {
	pos = abs(pos);
	float c = dot(pos, normalize(vec2(1.0,1.73)));
	c = max(c, pos.x);
	return c;	
}

void main() {
  //vec2 coord = vTexCoord;
  vec2 uv = (gl_FragCoord.xy - 0.5 * res.xy)/res.y;
  vec3 color = vec3(93.0/255.0, 188.0/255.0, 210.0/255.0)- vec3(1.0);
  color += sin(HexDist(uv) * 50.0 + ((timeIn)));
 
  gl_FragColor = vec4(color, 1.0 );
}