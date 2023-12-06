# Folder Structure
The frontend folder separates into app-wide elements and feature specific elements. Under `/app`,
there are componenets like `/components/BackButton.tsx` or `/screens/Spash.tsx` or `/middleware/loggerMiddlware.ts`
which is used across the app. Under `/features`, there another set of apis, components, middlware, that is
more specific to the feature. This layout makes adding features easier and more readable.

    .
    ├── app                            # app-wide elements
    │   ├── components                 
    │   ├── hooks
    │   ├── interfaces
    │   ├── middleware
    │   ├── screens
    │   └──  store.ts                  # redux store
    ├── assets                         # icons, logos, images              
    ├── features                       # feature-specific elements
    │   ├── auth
    │   │    ├── api       
    │   │    ├── components         
    │   │    ├── middleware
    │   │    ├── reducers
    │   │    ├── screens
    │   │    └── utils
    │   ├── postmatchfeedback
    │   │    ├── api
    │   │    ├── components
    │   │    ├── middleware
    │   │    ├── reducers
    │   │    ├── screens
    │   │    └── utils
    │   └── ...
    ├── navigation
    │   ├── AuthStackNavigator.tsx
    │   └── ...
    ├── theme
    │   └── GlobalStyles.ts 
    ├── utils
    │   └── apiConfig.ts 
    └── ...


