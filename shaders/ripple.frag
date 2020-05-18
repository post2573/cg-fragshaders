#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec2 tex_coords = (texcoord * 2.0) - 1.0;
	float radius = length(tex_coords);
	vec2 offset = tex_coords * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
	vec2 final_tex_coord = texcoord + offset;
    FragColor = texture(image, final_tex_coord);
}
