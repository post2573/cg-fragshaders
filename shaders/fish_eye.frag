#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec2 tex_coords = (texcoord * 2.0) - 1.0;
	float theta = atan(tex_coords.y, tex_coords.x);
	float radius = pow(length(tex_coords), 1.5);
    vec2 final_tex_coord = vec2(radius * cos(theta), radius * sin(theta));
    final_tex_coord = (final_tex_coord + 1.0) * 0.5;
    FragColor = texture(image, final_tex_coord);
}
