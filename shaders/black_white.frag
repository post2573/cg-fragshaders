#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 color = texture(image, texcoord);
	float luminance = 0.299 * color.x + 0.587 * color.y + 0.114 * color.z;
	vec4 final_color = vec4(luminance, luminance, luminance, 1.0);
    FragColor = final_color;
}
