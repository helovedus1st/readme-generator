// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![MIT license](https://img.shields.io/badge/license-MIT-green.svg)`;
      break;
    case "ISC":
      return `![ISC license](https://img.shields.io/badge/license-ISC-blue.svg)`;
      break;
    case "None":
      return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT license information](https://opensource.org/licenses/MIT)`;
      break;
    case "ISC":
      return `[ISC license information](https://opensource.org/licenses/ISC)`;
      break;
    case "None":
      return `[NO license. View Githib's relevant "Terms of Service."](https://docs.github.com/en/github/site-policy/github-terms-of-service#d-user-generated-content)`
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This application has been created under the MIT open source license.
      Follow the link below to learn more.
      `;
      break;
    case "ISC":
      return `This application has been created under the ISC open source license.
      Follow the link below to learn more.
      `;
      break;
    case "None":
      return `This application was not created under any license, and is not available for use as open source except by those rights granted automatically under Github's "Terms of Service." You can learn more by following the link below.
      `
  }}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions?](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## Contributing
${answers.contribute}

## Tests
${answers.test}

## License
${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}

## Questions?
To submit any issues or security concerns about this application, please visit https://github.com/${answers.gituser}/${answers.repo}.

Contact me directly via email at [${answers.email}](mailto:${answers.email}?subject=${answers.repo}).
`;
}

module.exports = generateMarkdown;
