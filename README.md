# jungsoft-frontend-tech-challenge

Application responsible for showing and allowing the user to choose one from persisted subscription plans

## installation

- run `yarn install`

## development

- run `yarn dev`

## deployment

- deployment is automated through [vercel](https://vercel.com/github) and github connection. it is triggered when pushing to any remote branch

## user stories and behavior features

The testing and development of this application is driven by the following user story and behavior-driven features:

```
Story: Read and choose a subscription plan
  As a customer,
  I want to be able to read and navigate between the different types of subscription plans,
  so I can choose one of them to subscribe to

Feature: Read a subscription plan
  Given There is 2 subscription plans
  And The default plan is selected
  When The subscription plans list is accessed
  Then Expect to see the plans list with the default selected plan

Feature: Change the selected subscription plan
  Given There is 2 subscription plans
  And The default plan is selected
  And The subscription plans list is accessd
  When The current selected plan changes
  Then Expect to see the selected subscription plan
```
