import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { getAccounts, getLegacyAccounts } from '../../modules/home.module';
import Account from './Account';

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    legacy_accounts: state.legacy_accounts
  };
};

class Accounts extends Component {

  componentDidMount() {
    getAccounts(this.props.dispatch);
    getLegacyAccounts(this.props.dispatch);
  }



  render() {
    let accounts = Object.values(this.props.accounts).map((x, i) => { let rand = (Math.random() * 100) / 100; return <Account key={`account-0-${i}-${rand}`} account={x.account} type={0} /> });
    let legacy_accounts = Object.values(this.props.legacy_accounts).map((x, i) => { let rand = (Math.random() * 100) / 100; return <Account key={`account-1-${i}-${rand}`} account={x.account} type={1} /> });
    return (
      <>
        <Row>
          <Col>
            <h3>{this.props.t("accounts")}</h3>
          </Col>
        </Row>
        <Row style={{"max-height":"290px", "height":"290px","overflow-y":"auto"}}>
          <Col>
            {accounts}
            {legacy_accounts}
          </Col>
        </Row>
      </>

    );
  }
}
export default withTranslation('home')(connect(mapStateToProps)(Accounts));