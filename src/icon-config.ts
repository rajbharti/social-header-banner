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
    src: getImgUrlFromDevIcons("javascript/javascript-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("typescript/typescript-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("react/react-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("redux/redux-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("nextjs/nextjs-original-wordmark.svg"),
    width: 70,
  },
  {
    src: getImgUrlFromDevIcons(
      "amazonwebservices/amazonwebservices-original-wordmark.svg"
    ),
    width: 80,
  },
  {
    src: getImgUrlFromDevIcons("nodejs/nodejs-original-wordmark.svg"),
    width: 90,
  },
  {
    src: getImgUrlFromDevIcons("express/express-original-wordmark.svg"),
    width: 70,
  },
  {
    src: getImgUrlFromDevIcons("mongodb/mongodb-original-wordmark.svg"),
    width: 65,
  },
  {
    src: getImgUrlFromDevIcons("mysql/mysql-original-wordmark.svg"),
    width: 70,
  },
  {
    src: getImgUrlFromDevIcons("docker/docker-original-wordmark.svg"),
    width: 45,
  },
  {
    src: getImgUrl("rest-api.svg"),
    width: 40,
    lineBreak: true,
  },
  {
    src: getImgUrl("codeium.svg"),
    width: 100,
  },
  {
    src: getImgUrl("chatgpt.svg"),
    width: 35,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Google_Bard_logo.svg/600px-Google_Bard_logo.svg.png?20230425130013",
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("git/git-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("jest/jest-plain.svg"),
    width: 32,
  },
  { src: getImgUrl("chartjs.svg"), width: 65 },
  {
    src: getImgUrlFromDevIcons("d3js/d3js-original.svg"),
    width: 32,
  },
  {
    src: getImgUrlFromDevIcons("terraform/terraform-original.svg"),
    width: 35,
  },
  {
    src: getImgUrl("okta.svg"),
    width: 80,
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
    src: getImgUrlFromDevIcons("sass/sass-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("materialui/materialui-original.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("tailwindcss/tailwindcss-plain.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("bootstrap/bootstrap-original.svg"),
    width: 40,
  },
  {
    src: getImgUrl("invision.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("figma/figma-original.svg"),
    width: 35,
  },
  {
    src: getImgUrlFromDevIcons("github/github-original-wordmark.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("bitbucket/bitbucket-original-wordmark.svg"),
    width: 40,
  },
  {
    src: getImgUrlFromDevIcons("gitlab/gitlab-original-wordmark.svg"),
    width: 40,
  },
];
