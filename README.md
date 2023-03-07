# Thunkable app

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Built for the [Thunkable](https://thunkable.com/) Technical Assessment.

## Features

### Display project list
![project list image](/src/assets/list.png)

### Add a new project
![create project gif](/src/assets/create.gif)

### Rename project
![edit project gif](/src/assets/edit.gif)

### Delete project
![delete project gif](/src/assets/delete.gif)

## Getting Started
Install required dependencies

```
npm install
```
Start application by executing the following command. The app will run locally on [http://localhost:3000](http://localhost:3000) in the browser.

```
npm start
```

Launch test runner
```
npm test
```

## Task

> Complete as many features in a 1-4 hour time frame. If you must choose between quality or quantity of these features, please choose quality.
> ### Main features:
> - Add new project
> - Rename project
> - Delete project
> 
> \* recommend implementing the UI using elements from [Ant Design](https://ant.design/)
> ### Additional features if there is time:
> - Responsive and mobile friendly
> - Drag and drop project ( Please find the example in the mock-up, artboard #10 )
> - Use a state management library such as Redux
> - Any additional functionality you would like to add to the page (either UI or server side)

## Process
A *functionality-first* approach was taken to ensure that the main features are working as expected for the MVP. I also started a [project board](https://github.com/users/kjgamis/projects/1/) on Github to keep track of tasks and create prioritization order.

### Initialization - 15min
- The application was initialized by bootstrapping with [Create-React-App](https://github.com/facebook/create-react-app) to minimize configuration efforts, and then Redux was set up right away as it will be used for state management using the [Redux Toolkit](https://redux-toolkit.js.org/).
  - The CRA also comes with a [React Redux Template](https://github.com/abhishek70/.react-redux-template) but I opted not to use it as I wanted to learn how to set up Redux using the [Redux Toolkit](https://github.com/abhishek70/react-redux-template) as a learning opportunity as I have not used it before to set up Redux in a React app.

### Redux - 2hr
- CRUD operations on Redux were built next to enable creation, reading, updating and deletion of projects. A minimalist approach for building components was taken, mostly to ensure that the redux was working as expected, with little regards to the styling. Styling was intended to be applied later.
  - This took a while to complete as I had to learn how to use the [Redux Toolkit](https://redux-toolkit.js.org/) and also do a review on how to use Redux for state management. Many errors and failures were encountered to get each operation to work, but expecially the `UPDATE` operation which for some reason I couldn't figure out how to modify the object in the redux store.
  - Another reason this took a while was because I had troubles getting Redux to work when I accidentally used the same reducer name as a local state configued with `useState`. When I started to clean my code and make the components reusable I moved  where `dispatch` was called to another file, and in that same file was where I was using a local state of the same name.

### Building Components and Efforts for Reusability - 1-1.5hr
- This process was occured throughout the duration of building the application.
- The app started by having all functionality residing in the `App.js` file while making sure that the user interactions were communicating with Redux, and the the reducers were configured properly.
- One of the difficulties I had in ensuring reusability was using the same `form` component when a user `create` or `edit` a project
  - I had to make sure that the redux action that gets dispatched are different depending on the purpose of the form.
- Another component that I had difficulties ensuring was reusable was the `ProjectItem` component
  - this component needed to have conditional renders depending on its purpose, such as when creating a project, the `edit` and `delete` buttons must be hidden.

### Styling - 45min
- I have used Ant Design in the past, and other Design Systems so I was least concerned about getting the app to match the mocks as best as possible.
- I left this for last and as a result I was not able to match the mocks exactly as I had little time to spare. I wish I had been able to address the following:
  - button hover styling changes
    - on edit and delete button hover, the icon changes
    - on create button hover, the background color changes
  - there is additional space under the the `ProjectForm` that is messing the alignment of the `ProjectItem`

### Unit testing - 45 min
Unit tests are added to ensure the app is working as expected
- Due to the time constraints, I was only able to complete writing unit tests for the Redux setup.
  - I encountered numerous errors trying to mock the `new Date()` functionally used in the `createProject` reducer.
  - I used the [example unit test file](https://github.com/reduxjs/cra-template-redux/blob/master/template/src/features/counter/counterSlice.spec.js) from the CRA React Redux Template to help me write tests for my Redux setup.

### Other considerations
- I initally wanted to start the app from scratch using Webpack and Babel, however I ended up not going along this route as I did not want to shift focus from building the main features of this app. It potentially could have added another hour before getting started on the getting the CRUD operations to work.
- I did not see the mobile section of the mocks until the end when I was poking around in Figma. I thought it was not included. Had I known that the mobile designs were available, I would have started to apply styling with a mobile-first approach
### Additional features if I had more time
Tickets have been created in my [project board](https://github.com/users/kjgamis/projects/1) for these tasks
- Remove remnamts of CRA and replace them with Webpack and Babel as a learning opportunity
- Add more unit tests, such as:
  - App logo is present
  - On start, `ProjectList` returns no `ProjectItems`
  - On create button click, `ProjectForm` is present
  - After new project creation, `ProjectFrom` is not present but `ProjectItem` is present with `Edit` and `Delete` Buttons
  - On edit button click, `ProjectForm` is present but `Edit` and `Delete` Buttons are not present
  - On delete project click, delete confirmation modal is present
- Responsive and Mobile-friendly
- Fix styling bugs and missing features
- Configure a styling theme and use design tokens
- Add form validations
  - This could have been helpful in adding styling to hover interactions a lot easier
- Create a REST API and use it for the CRUD operations


## Resources:
- [Mocks](https://www.figma.com/file/itK1QmuOcnWZTPzo9hqiL6/UI-assignment_Thunkable-(Mobile--tablet)?node-id=0%3A1) and [Assets](https://drive.google.com/drive/folders/1iFS-9GUEnRGnKQdS_J3ILjwXHY2O0VMd)
- [Project Board](https://github.com/users/kjgamis/projects/1/)
- [Ant Design](https://ant.design/)
- [Redux Toolkit](https://github.com/abhishek70/react-redux-template)
- [React Redux Template](https://github.com/abhishek70/react-redux-template)

\* Disclaimer: the time presented are approximations only as I was building and learning at the same time. I tried to take time researching into consideration, however the time I allocated into building this application was also fragmented due to the limited time I had available when I was presented with this technical assessment.
