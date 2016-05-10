import React from 'react';
import { Grid, Cell, Layout, Header } from 'react-mdl';
import LoginCheckpoint from '/client/modules/accounts/containers/login_checkpoint';

const MainLayout = ({content = () => null }) => (
  <div>
    <Layout fixedHeader>
      <Header title="Dolphin"/>
      <div style={{width: '80%', margin: '0 auto'}}>
        <Grid>
          <Cell col={12}>
            <LoginCheckpoint loginRequired>
              {content()}
            </LoginCheckpoint>
          </Cell>
        </Grid>
    </div>
    </Layout>
  </div>
);

export default MainLayout;
