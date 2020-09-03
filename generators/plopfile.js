module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/Component.jsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.spec.js',
        templateFile: 'templates/test.spec.js.hbs',
      },
    ],
  });
};
