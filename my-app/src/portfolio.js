  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Webdev Gallery and Fruit API',
      description:
        "Learning the basics of the front-end programming, responsiveness, and map/filter functions",
      stack: ['JavaScript', 'HTML/CSS', 'API/Asynchronous'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: '/webdev',
    },
    {
      name: 'Bakery V1',
      description:
        'Learning React - the use of states',
      stack: ['React', 'HTML/CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: '/bakeryv1',
    },
    {
      name: 'Bakery V2',
      description:
        'React - further polishing react skills with UI/UX concepts in mind',
      stack: ['React', 'HTML/CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: '/bakeryv2',
    },
    {
        name: 'Flutter - Predict Age',
        description:
          'Learning development of mobile applications with Flutter, and how to involve asynchronous calls',
        stack: ['Flutter', 'API/asynchronous'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        route: '/flutter',
      },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'johnsmith@mail.com',
  }
  
  export { projects, skills, contact }
  