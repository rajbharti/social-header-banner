interface IconConfig {
  src: string;
  width: number;
  lineBreak?: boolean;
}

function getImgUrl(url: string) {
  return new URL(`./assets/icons/${url}`, import.meta.url).href;
}

function getImgUrlFromDevIcons(url: string) {
  return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${url}`;
}

export const iconConfig: IconConfig[] = [
  {
    src: getImgUrlFromDevIcons("typescript/typescript-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("javascript/javascript-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("react/react-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("nextjs/nextjs-original-wordmark.svg"),
    width: 70,
  },
  {
    src: getImgUrl('zustand.svg'),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("redux/redux-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("nodejs/nodejs-original-wordmark.svg"),
    width: 70,
  },
  {
    src: getImgUrlFromDevIcons("/nestjs/nestjs-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("/prisma/prisma-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("/postgresql/postgresql-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("/redis/redis-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("mongodb/mongodb-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons(
      "amazonwebservices/amazonwebservices-original-wordmark.svg"
    ),
    width: 50,
    lineBreak: true,
  },
  {
    src: getImgUrlFromDevIcons("jest/jest-plain.svg"),
    width: 32,
  },
  {
    src: getImgUrlFromDevIcons("playwright/playwright-original.svg"),
    width: 40,
  },
  { src: getImgUrl("chartjs.svg"), width: 65 },
  {
    src: getImgUrlFromDevIcons("d3js/d3js-original.svg"),
    width: 32,
  },
  {
    src: getImgUrlFromDevIcons("/okta/okta-original-wordmark.svg"),
    width: 80,
  },
  {
    src: getImgUrlFromDevIcons("terraform/terraform-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("webpack/webpack-original-wordmark.svg"),
    width: 100,
  },
  {
    src: getImgUrlFromDevIcons("gulp/gulp-plain.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("docker/docker-original-wordmark.svg"),
    width: 45,
  },
  {
    src: getImgUrlFromDevIcons("linux/linux-original.svg"),
    width: 40,
    lineBreak: true,
  },
  {
    src: getImgUrlFromDevIcons("html5/html5-original-wordmark.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("css3/css3-original-wordmark.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("tailwindcss/tailwindcss-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("materialui/materialui-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("figma/figma-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("sketch/sketch-original.svg"),
    width: 35,
  },
  {
    src: getImgUrl("invision.svg"),
    width: 35,
  },
];
