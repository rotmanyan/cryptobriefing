import React from 'react'
import Infinite from 'react-infinite-loading';
import WithoutInfinity from './components/withoutInfinity/WithoutInfinity'

export const BodyTableTableCoins = props =>
  <>
    <section className='boardBody__wrapper'>
      {props.infinity
        ? <Infinite
          handleLoading={() => props.sendRequest()}
          loading={props.isLoading}
        >
          <WithoutInfinity
            props={props}
          />
        </Infinite>
        : <div>
          <WithoutInfinity
            props={props}
          />
        </div>}
    </section>
  </>
