import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_USER_ITEMS = gql`
  {
    userItems {
      id
      name
      amount
    }
  }
`;

const Items = () => (
  <Query query={GET_USER_ITEMS}>
    {({ loading, error, data }) => {
      if (loading) return <p>"Cargando..."</p>;
      if (error) return <p>¡Error! {error.message}</p>;
      return data.userItems.map(item => (
        <div key={item.id} className="card text-center" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Precio: ${item.amount}</h6>
            <button className="btn btn-danger">Eliminar</button>
          </div>
        </div>
      ));
    }}
  </Query>
);

export default Items;