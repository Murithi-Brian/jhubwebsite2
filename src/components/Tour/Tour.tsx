import React from 'react';
import JoyRide from 'react-joyride';

const TOUR_STEPS = [
  {
    target: '.navbar-section',
    content: 'Explore the Navigation, Messaging, and Notifications'
    // placement: 'bottom',
  },
  {
    target: '.messages-notifications-section',
    content: 'Check out Messages and Notifications'
    // placement: 'bottom',
  },
  {
    target: '.events-calender',
    content: 'Create Events and Schedules'
    // placement: 'bottom',
  },
  {
    target: '.settings-section',
    content: 'Step 3: Explore the Settings'
    // placement: 'bottom',
  },
  {
    target: '.profile-section',
    content: 'Manage your Profile here'
    // placement: 'bottom',
  },
  {
    target: '.iam-section',
    content: 'Explore & Customize IAM for custom roles and permissions'
    // placement: 'bottom',
  }
];

const Tour: React.FC = () => {
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
            textAlign: 'left'
          },
          buttonNext: {
            backgroundColor: 'green'
          },
          buttonBack: {
            marginRight: 10
          }
        }}
        continuous={false}
        debug={false}
        disableCloseOnEsc={false}
        disableOverlay={false}
        disableOverlayClose={false}
        disableScrolling={false}
        disableScrollParentFix={false}
        // getHelpers = {}
        hideBackButton={false}
        run={false}
        // scrollOffset = {1}
        // scrollDuration ={}
        scrollToFirstStep={false}
        // showSkipButton={false}
        showProgress={false}
        spotlightClicks={false}
        // spotlightPadding ={}
        // steps={never[]}

        // callback: (data: CallBackProps) => void;
        // * Keydown event listener
        // handleKeyboard: (event: KeyboardEvent) => void;
        // * Sync the store with the component's state
        // syncState: (state: State) => void;
        // setPopper: Props$1['getPopper'];
        // scrollToStep(previousState: State): void;
        // render(): React.JSX.Element | null;
      />
    </>
  );
};

export default Tour;
