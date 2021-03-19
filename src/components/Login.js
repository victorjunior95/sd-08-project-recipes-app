import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isNotValid: true,
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validButton = this.validButton.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
  }
	
	handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => this.validButton());
  }

  handleLogin() {
    const { history } = this.props;
    // await getToken();
    history.push('/game');
	}
	
	validButton() {
    const { email, name } = this.state;
    const { handleLogin } = this.props;
    if (email.length > 0 && name.length > 0) {
      this.setState({ isNotValid: false });
      handleLogin({ email, name });
    }
	}
	
	renderLogin() {
    const { email, name, isNotValid } = this.state;
    return (
      <div>
        <img src={ logo } className="App-logo" alt="logo" />
        <form>
          <div className="login-input">
            <label htmlFor="email">
              Enter you email:
              <input
                type="email"
                name="email"
                onChange={ this.handleChange }
                data-testid="email-input"
                value={ email }
                placeholder="exemplo@exemplo.com"
                required
              />
            </label>
          </div>
          <div className="login-input">
            <label htmlFor="name">
              Enter you password:
              <input
                type="text"
                name="password"
                onChange={ this.handleChange }
                data-testid="password-input"
                value={ name }
                placeholder="Barak Obama"
                required
              />
            </label>
          </div>
          <button
            type="button"
            onClick={ this.handleLogin }
            disabled={ isNotValid }
            className="button-jogar"
            data-testid="btn-play"
          >
            Jogar
          </button>
        </form>
        <button onClick={ this.handleSettings } data-testid="btn-settings" type="button">
          Configurações
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>

        <div>
          <label htmlFor="email">
            Email
            <input data-testid="email-input" type="email" id="email" name="email" />

          </label>
          <label htmlFor="password">
            Senha
            <input data-testid="password-input" type="password" name="password" id="password" />

          </label>
        </div>
        <button type="button" data-testid="login-submit-btn"> Entrar </button>
      </div>

    );
  }
}

export default Login;
