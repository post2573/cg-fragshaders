#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 final_color = texture(image, texcoord);
	final_color.x = round(final_color.x * 4.0) / 4.0;
	final_color.y = round(final_color.y * 4.0) / 4.0;
	final_color.z = round(final_color.z * 4.0) / 4.0;
    FragColor = final_color * texture(image, texcoord);
}
