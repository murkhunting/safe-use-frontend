import React from "react";
import authService from "./auth-service"; // IMPORT functions for axios requests to API
const { Consumer, Provider } = React.createContext();

// HOC to create a Consumer
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ login, signup, logout, user, isLoggedIn }) => {
            return (
              <WrappedComponent
                user={user}
                isLoggedIn={isLoggedIn}
                login={login}
                signup={signup}
                logout={logout}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};


// Provider
class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    authService
      .me()
      .then((user) =>{
        this.setState({ isLoggedIn: true, user: user, isLoading: false })
      })
      .catch(err =>
        this.setState({ isLoggedIn: false, user: null, isLoading: false })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    // luego de que se actualice el componente, verificamos si el estado anterior es diferente al actual, y de ser así traemos los datos del usuario y modificamos el estado
    if (prevState.isLoggedIn !== this.state.isLoggedIn) {
      authService
        .me()
        .then((res) => {
          if (res.email && this.state.isLoggedIn) {
            this.setState({ isLoggedIn: true, user: res, isLoading: false });
          }
        })
        .catch((err) =>
          this.setState({
            isLoggedIn: false,
            user: null,
            isLoading: false,
          })
        );
    }
  }

  signup = (email, password) => {
    authService
      .signup({ email, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));
  };

  login = (email, password) => {
    authService
      .login({ email, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch(err => console.log(err));
  };

  render() {
    const { isLoading, isLoggedIn, user } = this.state;
    const { login, logout, signup } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider value={{ isLoggedIn, user, login, logout, signup }}>
        {this.props.children}
      </Provider>
    );
    /*
      <Provider> `value={}` data will be available to all <Consumer> components 
    */
  }
}

export { withAuth, AuthProvider };

//      Consumer ,  Provider
