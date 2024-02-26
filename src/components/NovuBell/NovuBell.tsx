'use client';

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  INotificationBellProps
} from '@novu/notification-center';

function NovuBell({}) {
  return (
    <NovuProvider
      subscriberId={process.env.REACT_APP_SUBSCRIBER_ID}
      applicationIdentifier={process.env.REACT_APP_NOVU_IDENTIFIER}
    >
      {/* <PopoverNotificationCenter children={function (props: INotificationBellProps): JSX.Element {
              throw new Error('Function not implemented.');
          } } colorScheme={'light'}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter> */}
    </NovuProvider>
  );
}

export default NovuBell;
