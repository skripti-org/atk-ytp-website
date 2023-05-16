import React from 'react';
import { Helmet } from 'react-helmet';

const fragment = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float xScale;
uniform float yScale;
uniform float distortion;

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  
  float d = length(p) * distortion;
  
  float rx = p.x * (1.0 + d);
  float gx = p.x;
  float bx = p.x * (1.0 - d);

  float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
  float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
  float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

const YtpHelmet = () => {
  return (
    <Helmet>
      <script id='js-fragment-shader' type='x-shader/x-fragment'>
        {fragment}
      </script>
      <script src='/Stage.js' type='text/javascript' />
    </Helmet>
  );
};

export default YtpHelmet;
