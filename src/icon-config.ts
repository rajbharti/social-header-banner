interface IconConfig {
  src: string;
  width: number;
  lineBreak?: boolean;
}

function getImgUrl(url: string) {
  return new URL(`./assets/icons/${url}`, import.meta.url).href;
}

export const iconConfig: IconConfig[] = [
  {
    src: getImgUrl("javascript.svg"),
    width: 40,
  },
  {
    src: getImgUrl("typescript.svg"),
    width: 40,
  },
  {
    src: getImgUrl("react.svg"),
    width: 40,
  },
  {
    src: getImgUrl("redux.svg"),
    width: 40,
  },
  { src: getImgUrl("nextjs.svg"), width: 70 },
  {
    src: getImgUrl("aws.svg"),
    width: 80,
  },
  {
    src: getImgUrl("nodejs.svg"),
    width: 90,
  },
  {
    src: getImgUrl("express.svg"),
    width: 70,
  },
  {
    src: getImgUrl("mongodb.svg"),
    width: 70,
  },
  {
    src: getImgUrl("mysql.svg"),
    width: 70,
  },
  {
    src: getImgUrl("docker.svg"),
    width: 40,
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
    width: 40,
  },
  {
    src: getImgUrl("git.svg"),
    width: 40,
  },
  {
    src: getImgUrl("jest.svg"),
    width: 40,
  },
  { src: getImgUrl("chartjs.svg"), width: 60 },
  {
    src: getImgUrl("d3.svg"),
    width: 40,
  },
  {
    src: getImgUrl("terraform.svg"),
    width: 60,
  },
  {
    src: getImgUrl("okta.svg"),
    width: 80,
  },
  {
    src: getImgUrl("webpack.svg"),
    width: 100,
  },
  {
    src: getImgUrl("gulp.svg"),
    width: 40,
  },
  {
    src: getImgUrl("postman.svg"),
    width: 40,
  },
  {
    src: getImgUrl("linux.svg"),
    width: 40,
    lineBreak: true,
  },
  {
    src: getImgUrl("html5.svg"),
    width: 40,
  },
  {
    src: getImgUrl("css3.svg"),
    width: 40,
  },
  {
    src: getImgUrl("sass.svg"),
    width: 40,
  },
  {
    src: getImgUrl("material-ui.svg"),
    width: 40,
  },
  {
    src: getImgUrl("tailwindcss.svg"),
    width: 40,
  },
  {
    src: getImgUrl("bootstrap.svg"),
    width: 40,
  },
  {
    src: getImgUrl("invision.svg"),
    width: 40,
  },
  {
    src: getImgUrl("figma.svg"),
    width: 40,
  },
  {
    src: getImgUrl("github.svg"),
    width: 40,
  },
  {
    src: getImgUrl("bitbucket.svg"),
    width: 40,
  },
  {
    src: getImgUrl("gitlab.svg"),
    width: 40,
  },
];
