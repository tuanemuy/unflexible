const mock = {
  title: "SAMPLE",
  description: "sample stacked lp",
  navigation: {
    logo: "great-success.png",
    position: "fixed",
    links: [
      {
        name: "About",
        to: "/about"
      }
    ]
  },
  eyecatch: {
    wrap: "wrapped",
    align: "center",
    background_url: "https://images.unsplash.com/photo-1447433865958-f402f562b843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80",
    background_color: "rgba(0, 0, 0, .5)",
    url: "/library/stacked-eyecatch.json",
    params: {
      heading: 'Stacked.',
      subheading: 'いちばん簡単なホームページ制作',
      color: '#ffffff',
      position: 'center',
      main_size: '5.5',
      sub_size: '1.25'
    }
  },
  sections: [
    {
      type: "normal",
      wrap: "wrapped",
      align: "center",
      columns: 3,
      background_url: "",
      background_color: "rgba(0, 0, 0, .25)",
      heading: {
        status: "shown",
        url: "/library/heading.json",
        params: {
          heading: "見出し",
          subheading: "Heading"
        }
      },
      components: [
        {
          url: "/library/sample.json",
          params: {
            heading: "sample1",
            color: "#242424"
          }
        },
        {
          url: "/library/sample.json",
          params: {
            heading: "sample2",
            color: "blue"
          }
        },
        {
          url: "/library/sample.json",
          params: {
            heading: "sample3",
            color: "red"
          }
        }
      ]
    },
    {
      type: "normal",
      wrap: "wrapped",
      align: "center",
      columns: 3,
      background_url: "",
      background_color: "rgba(0, 0, 0, .1)",
      heading: {
        status: "hidden",
        url: "/library/heading.json",
        params: {
          heading: "見出し",
          subheading: "Heading"
        }
      },
      components: [
        {
          url: "/library/sample.json",
          params: {
            heading: "sample"
          }
        }
      ]
    }
  ]
};

export default mock;
