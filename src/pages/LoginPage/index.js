import React from 'react';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

import WrapperContainer from '../../styled-components/WrapperContainer';

const LoginPage = () => {
  const onSubmit = values => console.log(values);
  return (
    <WrapperContainer>
      <h2>
        <FormattedMessage id="loginPage.title" defaultMessage="Login" />
      </h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <FormattedMessage id="loginPage.email" defaultMessage="Email" />
              </label>
              <Field name="email" component="input" type="email" />
            </div>

            <div>
              <label>
                <FormattedMessage id="loginPage.password" defaultMessage="Password" />
              </label>
              <Field name="password" component="input" type="password" />
            </div>

            <div>
              <button type="submit" disabled={submitting || pristine}>
                <FormattedMessage id="button.login" defaultMessage="Log in" />
              </button>
            </div>
          </form>
        )}
      />
    </WrapperContainer>
  );
};

LoginPage.displayName = 'LoginPage';

export default LoginPage;
