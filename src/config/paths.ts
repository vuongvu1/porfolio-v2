export const paths = {
  home: {
    getHref: () => "/",
  },

  about: {
    root: {
      getHref: () => "/about",
    },
  },
} as const;
