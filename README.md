# Overview

This is a NextJS project which is intended to provide the user a way to search for cities to visit and to be able to save the returned information into a database so that it can be accesesed later.

The user can view the cities saved to "Favourites" on a map and can check the weather for a certain city by going to its page.
On the map there are two types of markers: for cities that are just on the "Favourites" list and for cities that are on the "Favourites" list but that are also "Top" cities (marked with a heart icon).

Tip: for every city saved as a favourite you cand click on a link ( it's hard to miss :D ) and be redirected to Booking.com to find accommodation and/or transportation.

## Update

In order to gain full access to the application (saving/deleting cities to/from Favourites, marking them as "top city" etc.), the user must sign in (below you'll find the credentials to test the auth). For that, I implemented a simple authentication flow with a JWT (I used the "jose" library) stored in Cookies.

## Credentials:

user: travelzzzilla@test.com
password: Brasov2024

### Built with:

Next.js, MongoDB with Mongoose, Leaflet, Tailwind CSS, React Icons,React World Flags

## Getting Started

Run the development server:

```bash
npm install
&
npm run dev
```

If you want to run the app on your local machine make sure to add your own MongoDB URI in the "./db/mongodb.js" file or to create a .env file where you can save your MongoDb URI in a variable called "MONGO_URI".

## DEPLOYMENT LINK

https://travelzzzilla.vercel.app/

## IMPORTANT

There are separate branches in this repo corresponding to each stage of the project's development.
