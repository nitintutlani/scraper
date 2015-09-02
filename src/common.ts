export function lpad(str: string, length: number) {
	while (str.length < length)
		str = "0" + str;
	return str;
};
