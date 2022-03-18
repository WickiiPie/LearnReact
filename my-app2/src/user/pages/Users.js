import React from "react";

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      name: "birb",
      placeCount: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
