const idGen = (start: number) => () => (start += 1)

const counter = idGen(0)

export const DATA = [
  {
    id: counter(),
    img: 'http://lorempixel.com/400/200/',
    text:
      'Sit exercitation occaecat veniam aliquip occaecat cillum excepteur tempor reprehenderit eiusmod ea minim laboris ad. Velit elit et nisi consectetur do voluptate proident est. Commodo incididunt ex aute ex occaecat amet consequat velit aliquip minim sunt deserunt aute sunt. Irure reprehenderit cupidatat cupidatat aute Lorem velit. Sint deserunt voluptate proident ea voluptate amet amet laboris. Pariatur ullamco occaecat aliquip et. Aliqua commodo eiusmod in Lorem exercitation culpa veniam sunt duis nulla aliquip tempor id.',
    date: new Date().toJSON(),
    booked: true
  },
  {
    id: counter(),
    img: 'http://lorempixel.com/400/200/',
    text:
      'Sit exercitation occaecat veniam aliquip occaecat cillum excepteur tempor reprehenderit eiusmod ea minim laboris ad. Velit elit et nisi consectetur do voluptate proident est. Commodo incididunt ex aute ex occaecat amet consequat velit aliquip minim sunt deserunt aute sunt. Irure reprehenderit cupidatat cupidatat aute Lorem velit. Sint deserunt voluptate proident ea voluptate amet amet laboris. Pariatur ullamco occaecat aliquip et. Aliqua commodo eiusmod in Lorem exercitation culpa veniam sunt duis nulla aliquip tempor id.',
    date: new Date().toJSON(),
    booked: false
  },
  {
    id: counter(),
    img: 'http://lorempixel.com/400/200/',
    text:
      'Sit exercitation occaecat veniam aliquip occaecat cillum excepteur tempor reprehenderit eiusmod ea minim laboris ad. Velit elit et nisi consectetur do voluptate proident est. Commodo incididunt ex aute ex occaecat amet consequat velit aliquip minim sunt deserunt aute sunt. Irure reprehenderit cupidatat cupidatat aute Lorem velit. Sint deserunt voluptate proident ea voluptate amet amet laboris. Pariatur ullamco occaecat aliquip et. Aliqua commodo eiusmod in Lorem exercitation culpa veniam sunt duis nulla aliquip tempor id.',
    date: new Date().toJSON(),
    booked: true
  },
  {
    id: counter(),
    img: 'http://lorempixel.com/400/200/',
    text:
      'Sit exercitation occaecat veniam aliquip occaecat cillum excepteur tempor reprehenderit eiusmod ea minim laboris ad. Velit elit et nisi consectetur do voluptate proident est. Commodo incididunt ex aute ex occaecat amet consequat velit aliquip minim sunt deserunt aute sunt. Irure reprehenderit cupidatat cupidatat aute Lorem velit. Sint deserunt voluptate proident ea voluptate amet amet laboris. Pariatur ullamco occaecat aliquip et. Aliqua commodo eiusmod in Lorem exercitation culpa veniam sunt duis nulla aliquip tempor id.',
    date: new Date().toJSON(),
    booked: false
  },
  {
    id: counter(),
    img: 'http://lorempixel.com/400/200/',
    text:
      'Sit exercitation occaecat veniam aliquip occaecat cillum excepteur tempor reprehenderit eiusmod ea minim laboris ad. Velit elit et nisi consectetur do voluptate proident est. Commodo incididunt ex aute ex occaecat amet consequat velit aliquip minim sunt deserunt aute sunt. Irure reprehenderit cupidatat cupidatat aute Lorem velit. Sint deserunt voluptate proident ea voluptate amet amet laboris. Pariatur ullamco occaecat aliquip et. Aliqua commodo eiusmod in Lorem exercitation culpa veniam sunt duis nulla aliquip tempor id.',
    date: new Date().toJSON(),
    booked: true
  },
  {
    id: counter(),
    img: 'http://lorempixel.com/400/200/',
    text:
      'Sit exercitation occaecat veniam aliquip occaecat cillum excepteur tempor reprehenderit eiusmod ea minim laboris ad. Velit elit et nisi consectetur do voluptate proident est. Commodo incididunt ex aute ex occaecat amet consequat velit aliquip minim sunt deserunt aute sunt. Irure reprehenderit cupidatat cupidatat aute Lorem velit. Sint deserunt voluptate proident ea voluptate amet amet laboris. Pariatur ullamco occaecat aliquip et. Aliqua commodo eiusmod in Lorem exercitation culpa veniam sunt duis nulla aliquip tempor id.',
    date: new Date().toJSON(),
    booked: false
  }
]
