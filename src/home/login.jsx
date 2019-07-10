import React from 'react';

export default class Login extends React.Component {

	render() {
		return (
			<div className="wrapper-max-width">
				<div id="login-form-container">
					<h3>welcome.</h3>
					<form id='email' action='/' method="POST" onSubmit={(e) => this.handlePost(e)}>
						<dl>
							<dt>Username</dt>
							<dd><input 
									name="username"
									placeholder="Required field"
								/></dd>
							<dt>Password</dt>
							<dd><input
									name="password"
									placeholder="Required field"
									type='password'
								/></dd>

						</dl>
						<dt style={{visibility: "hidden"}}>Here for spacing</dt>
						<button>Sign in</button>
					</form>
					<b id="sign-up-btn">Sign up</b>
				</div>
				<h1 className="landing-text">
					hi.<br/>
					lets get organized.
				</h1>
			</div>
		);
	}
}
