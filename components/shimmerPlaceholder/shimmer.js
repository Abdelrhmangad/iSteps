const shimmer = (w, h) => `
    <svg
      width="${w}"
      height="${h}"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="g">
          <stop stop-color="#691a10" offset="20%" />
          <stop stop-color="#aa0116" offset="50%" />
          <stop stop-color="#691a10" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#691a10" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate
        xlinkHref="#r"
        attributeName="x"
        from="-${w}"
        to="${w}"
        dur="1s"
        repeatCount="indefinite"
      />
    </svg>`;

export default shimmer;

export const toBase64 = (str) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);
