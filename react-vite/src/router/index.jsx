import { createBrowserRouter } from 'react-router-dom';
// import LoginFormPage from '../components/LoginFormPage';
// import SignupFormPage from '../components/SignupFormPage';
import HomePage from '../components/HomePage';
import Layout from './Layout';
import UserProfile from '../components/UserProfile/profile';
import LoginFormPage from '../components/LoginFormPage/LoginFormPage';
import UserTracks from '../components/UserProfile/UserTracks/userTracks';
import LikedSongs from '../components/UserProfile/UserLikes/userLikes';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
<<<<<<< HEAD
        path: "/login",
        element: <LoginFormPage />,
=======
        path: "/songs/:songId",
        element: <SongDetails/>
>>>>>>> parent of 93c5d29 (checking out into dev)
      },
      {
        path: "/user/current",
        element: <UserProfile />,
        children: [
          {
            path: "tracks",
            element: <UserTracks />
          },
        ]
      },
      {
        path: 'user/current/likes',
        element: <LikedSongs />
      }
      // {
      //   path: "/signup",
      //   element: <SignupFormPage />,
      // },
      // {
      //   path: "test",
      //   element: <TestPage />
      // }
    ],
  },
]);
