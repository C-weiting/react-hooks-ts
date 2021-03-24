import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState, IHomeState } from '@/typings/state';
import mapDispathToProps from '@/store/actions/home';
import HomeHeader from './components/HomeHeader';

// type PropsWithChildren<P> = P & { children?: ReactNode };
type Props = PropsWithChildren<RouteComponentProps & IHomeState & typeof mapDispathToProps>;

function Home(props: Props) {
    return (
        <div>
            <HomeHeader currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
        </div>
    )
}

const mapStateToProps = (state: IRootState): IHomeState => state.home;

export default connect(mapStateToProps, mapDispathToProps)(Home);
