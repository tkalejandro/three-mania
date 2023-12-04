varying vec2 vUv;
uniform float uFull;

void main()
{
    vec3 blackColor = vec3(0.0);
    vec3 uvColor = vec3(0.66, 1.0, 0.94);

    float strength = mod(vUv.y * 10.0, 1.0);
    strength = step(uFull, strength);

    vec3 colorShape = mix(blackColor, uvColor, strength);

    // If color is Black do
    // not render it
    if (colorShape.z < 0.5)
    {
      discard;
    }

    gl_FragColor = vec4(vec3(colorShape), 1.);
}