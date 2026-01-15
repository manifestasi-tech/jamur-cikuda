export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import { Fragment, Suspense } from 'react';
import HomePageLayoutNavbar from './HomePageLayoutNavbar';
import HomePageLayoutFooter from './HomePageLayoutFooter';
import PageHead from '@/components/commons/PageHead';

interface PropTypes {
  title?: string;
  children?: React.ReactNode;
}

const HomePageLayout = (props: PropTypes) => {
  const { title, children } = props;

  return (
    <Fragment>
      <PageHead title={title} />
      <Suspense fallback={null}>
        <HomePageLayoutNavbar />
        <div className="font-open-sauce-sans">{children}</div>
        <HomePageLayoutFooter />
      </Suspense>
    </Fragment>
  );
};

export default HomePageLayout;
