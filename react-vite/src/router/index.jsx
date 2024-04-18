import { createBrowserRouter } from 'react-router-dom';
// import LoginFormPage from '../components/LoginFormPage';
// import SignupFormPage from '../components/SignupFormPage';
import HomePage from '../components/HomePage';
import Layout from './Layout';
import SongDetails from '../components/SongDetails';
import SongFormPage from '../components/SongFormPage';
<<<<<<< HEAD
<<<<<<< HEAD
import UserProfile from '../components/UserProfile/profile';
import LoginFormPage from '../components/LoginFormPage/LoginFormPage';
import UserTracks from '../components/UserProfile/UserTracks/userTracks';
import LikedSongs from '../components/UserProfile/UserLikes/userLikes';
=======
>>>>>>> parent of 7bd8685 (fix conflict)
=======
>>>>>>> parent of 7bd8685 (fix conflict)

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/songs/:songId",
        element: <SongDetails/> 
      },
      {
        path: "/songs/new",
        element: <SongFormPage/>,
      },
<<<<<<< HEAD
<<<<<<< HEAD
      {
        path: "/login",
        element: <LoginFormPage />,
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
=======
=======
>>>>>>> parent of 7bd8685 (fix conflict)
      // {
      //   path: "/login",
      //   element: <LoginFormPage />,
      // },
<<<<<<< HEAD
>>>>>>> parent of 7bd8685 (fix conflict)
=======
>>>>>>> parent of 7bd8685 (fix conflict)
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
